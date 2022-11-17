<template>
  <div class="overview">
    <h2>本项目所用技术</h2>
    <p v-for="(item, index) in data" :key="index">{{ item }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "overview",
  setup() {
    const data = ["vue3", "ts", "vuex", "vue-router", "echarts", "element-ui"];
    return { data };
  },
});
</script>

<style scoped lang="less">
p {
  font-size: 15px;
  color: rgb(11, 8, 8);
  margin-bottom: 10px;
}
</style>
