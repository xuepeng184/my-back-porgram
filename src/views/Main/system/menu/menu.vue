<template>
  <div class="menu">
    <page-content
      :contentConfig="contentConfig"
      page-name="menu"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import pageContent from "@/components/page-content";
import { contentConfig } from "./config/content.config";
export default defineComponent({
  name: "xp-menu",
  setup() {
    return { contentConfig };
  },
  components: {
    pageContent,
  },
});
</script>

<style scoped></style>
