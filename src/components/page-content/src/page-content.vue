<template>
  <div class="page-content">
    <xpTable :listData="dataList" v-bind="contentConfig">
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? "启用" : "禁用" }}</el-button
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
          <el-link size="small" type="primary">编辑</el-link>
          <el-link size="small" type="primary">删除</el-link>
        </div>
      </template>
      <template #headerHandler>
        <el-button type="primary">新建用户</el-button>
      </template>
    </xpTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "../../../store";
import xpTable from "../../../base-ui/table/index";

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
    store.dispatch("system/getPageListAction", {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10,
      },
    });
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    );
    return { dataList };
  },
  components: {
    xpTable,
  },
});
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>