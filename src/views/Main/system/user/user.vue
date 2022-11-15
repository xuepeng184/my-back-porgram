<template>
  <div class="user">
    <page-search
      :formConfig="formConfig"
      @resetBtnClick="handleReset"
      @searchBtnClick="handleSearch"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentConfig="contentConfig"
      page-name="user"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-model
      :modelConfig="modelConfigComputed"
      ref="pageModelRef"
      :defaultInfo="defaultInfo"
      page-name="user"
    ></page-model>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { formConfig } from "./config/search.config";
import pageSearch from "../../../../components/page-search";
import xpTable from "../../../../base-ui/table/index";
import { contentConfig } from "./config/content.config";
import pageContent from "../../../../components/page-content";
import { usePageSearch } from "@/hooks/usePageSearch";
import pageModel from "../../../../components/page-model";
import { modelConfig } from "./config/model.config";
import { usePageModel } from "@/hooks/usePageModel";
import { useStore } from "@/store";

export default defineComponent({
  name: "user",
  setup() {
    const [pageContentRef, handleSearch, handleReset] = usePageSearch();

    //pageModel相关的逻辑
    const newCallback = () => {
      const passItem = modelConfig.formItems.find(
        (item) => item.field == "password"
      );
      passItem!.isHidden = false;
    };
    const editCallback = () => {
      const passItem = modelConfig.formItems.find(
        (item) => item.field == "password"
      );
      passItem!.isHidden = true;
    };

    const store = useStore();
    const modelConfigComputed = computed(() => {
      const departmentItem = modelConfig.formItems.find(
        (item) => item.field == "departmentId"
      );
      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { title: item.name, value: item.id };
      });
      const roleItem = modelConfig.formItems.find(
        (item) => item.field == "roleId"
      );

      roleItem!.options = store.state.entireRole.map((item) => {
        return { title: item.name, value: item.id };
      });
      return modelConfig;
    });

    const [handleEditData, handleNewData, defaultInfo, pageModelRef] =
      usePageModel(newCallback, editCallback);

    return {
      formConfig,
      contentConfig,
      handleReset,
      handleSearch,
      pageContentRef,
      modelConfigComputed,
      handleEditData,
      handleNewData,
      pageModelRef,
      defaultInfo,
    };
  },
  components: { pageSearch, xpTable, pageContent, pageModel },
});
</script>

<style scoped lang="less">
.handlerBtn {
  display: flex;
  justify-content: space-around;
}
</style>
