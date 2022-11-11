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
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formConfig } from "./config/search.config";
import pageSearch from "../../../../components/page-search";
import xpTable from "../../../../base-ui/table/index";
import { contentConfig } from "./config/content.config";
import pageContent from "../../../../components/page-content";
import { usePageSearch } from "@/hooks/usePageSearch";

export default defineComponent({
  name: "user",
  setup() {
    const [pageContentRef, handleSearch, handleReset] = usePageSearch();

    return {
      formConfig,
      contentConfig,
      handleReset,
      handleSearch,
      pageContentRef,
    };
  },
  components: { pageSearch, xpTable, pageContent },
});
</script>

<style scoped lang="less">
.handlerBtn {
  display: flex;
  justify-content: space-around;
}
</style>
