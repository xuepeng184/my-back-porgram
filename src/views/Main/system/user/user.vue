<template>
  <div class="user">
    <page-search :formConfig="formConfig"></page-search>
    <page-content
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

export default defineComponent({
  name: "user",
  setup() {
    return {
      formConfig,
      contentConfig,
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
