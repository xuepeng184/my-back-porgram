<template>
  <div class="dashboard">
    <h2 ref="divRef"></h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

import * as echarts from "echarts";

export default defineComponent({
  name: "dashboard",
  setup() {
    const divRef = ref<HTMLElement>();
    onMounted(() => {
      const echartsInstance = echarts.init(divRef.value!);
    });

    return {
      divRef,
    };
  },
});
</script>

<style scoped lang="less"></style>
