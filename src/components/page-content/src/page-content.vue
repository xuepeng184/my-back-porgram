<template>
  <div class="page-content">
    <xpTable
      :listData="dataList"
      v-bind="contentConfig"
      :listCount="userCount"
      v-model:page="pageInfo"
    >
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.status ? "启用" : "禁用" }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="handlerBtn">
          <el-link size="small" type="primary" v-if="isUpdate">编辑</el-link>
          <el-link size="small" type="primary" v-if="isDelete">删除</el-link>
        </div>
      </template>
      <template #headerHandler>
        <el-button type="primary" v-if="isCreate">新建用户</el-button>
      </template>

      <!-- 动态插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </xpTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue";
import { useStore } from "../../../store";
import xpTable from "../../../base-ui/table/index";
import { usePermission } from "@/hooks/usePermission";
export default defineComponent({
  props: {
    contentConfig: {
      type: Object,
      required: true,
    },
    pageName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    //获取权限
    const isCreate = usePermission(props.pageName, "create");
    const isUpdate = usePermission(props.pageName, "update");
    const isDelete = usePermission(props.pageName, "delete");
    const isQuery = usePermission(props.pageName, "query");

    const pageInfo = ref({ currentPage: 0, pageSize: 10 });

    watch(pageInfo, () => getPageData());

    const getPageData = (searchData = {}) => {
      if (!isQuery) return;
      store.dispatch("system/getPageListAction", {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...searchData,
        },
      });
    };
    getPageData();

    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    );
    const userCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    );

    //获取动态插槽名称
    const otherPropSlots = props.contentConfig.propList.filter((item: any) => {
      if (
        item.slotName === "status" ||
        item.slotName == "createAt" ||
        item.slotName == "updateAt" ||
        item.slotName == "handler"
      ) {
        return false;
      }
      return true;
    });
    return {
      isUpdate,
      isCreate,
      dataList,
      getPageData,
      userCount,
      pageInfo,
      isDelete,
      otherPropSlots,
    };
  },
  components: {
    xpTable,
  },
});
</script>

<style scoped lang="less">
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>