<template>
  <div class="goods">
    <page-content :contentConfig="contentConfig" page-name="goods">
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          fit="cover"
          preview-teleported
        />
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import pageContent from "@/components/page-content";
import { contentConfig } from "./config/content.config";

export default defineComponent({
  name: "goods",
  setup() {
    return { contentConfig };
  },
  components: {
    pageContent,
  },
});
</script>

<style scoped>
.demo-image__error .image-slot {
  font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}
</style>
