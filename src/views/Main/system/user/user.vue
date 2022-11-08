<template>
  <div class="user">
    <page-search :formConfig="formConfig"></page-search>
    <div class="content">
      <xp-table :listData="userList" :propList="propList">
        <template #status="scope">
          <el-button>{{ scope.row.enable ? "启用" : "禁用" }}</el-button>
        </template>
      </xp-table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { formConfig } from "./config/search.config";
import pageSearch from "@/components/page-search";
import { useStore } from "@/store";
import xpTable from "@/base-ui/table/index";
export default defineComponent({
  name: "user",
  setup() {
    const store = useStore();
    store.dispatch("system/getPageListAction", {
      url: "/users/list",
      queryInfo: {
        offset: 0,
        size: 10,
      },
    });
    const userList = computed(() => store.state.system.userList);
    const userCount = computed(() => store.state.system.userCount);

    const propList = [
      { prop: "name", label: "用户名", minWidth: "100", slotName: "name" },
      {
        prop: "realname",
        label: "真实姓名",
        minWidth: "100",
        slotName: "realname",
      },
      {
        prop: "cellphone",
        label: "手机号码",
        minWidth: "100",
        slotName: "cellphone",
      },
      { prop: "enable", label: "状态", minWidth: "100", slotName: "status" },
      {
        prop: "createAt",
        label: "创建时间",
        minWidth: "250",
        slotName: "createAt",
      },
      {
        prop: "updateAt",
        label: "更新时间",
        minWidth: "250",
        slotName: "updateAt",
      },
    ];

    return {
      formConfig,
      userList,
      propList,
    };
  },
  components: { pageSearch, xpTable },
});
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
