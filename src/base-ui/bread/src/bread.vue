<template>
  <div class="bread">
    <el-breadcrumb separator="/">
      <template v-for="item in breadData" :key="item.id">
        <el-breadcrumb-item :to="{ path: item.path }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IBread } from "../types/index";

export default defineComponent({
  props: {
    breadData: {
      type: Array as PropType<IBread[]>,
      default: () => [],
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>