<template>
  <div class="role">
    <page-search :formConfig="formConfig"></page-search>
    <page-content
      :contentConfig="contentConfig"
      page-name="role"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import pageContent from "@/components/page-content";
import { contentConfig } from "./config/content.config";
import { formConfig } from "./config/search.config";
import pageSeacrch from "@/components/page-search";

export default defineComponent({
  name: "role",
  setup() {
    return { contentConfig, formConfig };
  },
  components: {
    pageContent,
    pageSeacrch,
  },
});
</script>

<style scoped></style>
