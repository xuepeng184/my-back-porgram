<template>
  <div class="line-echarts">
    <base-echarts :options="options"></base-echarts>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import baseEcharts from "@/base-ui/echarts";

const props = defineProps<{
  xLabels: string[];
  values: any[];
}>();

const options = computed(() => {
  return {
    title: {
      text: "分类商品销量",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: props.xLabels,
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "分类销量",
        type: "line",
        stack: "总量",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: props.values,
      },
    ],
  };
});
</script>

<style scoped>
</style>