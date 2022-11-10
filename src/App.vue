<template>
  <div class="app">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElConfigProvider } from "element-plus";

import zhCn from "element-plus/dist/locale/zh-cn.mjs";
export default defineComponent({
  name: "App",
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      locale: zhCn,
    };
  },
});
</script>



<style lang="less">
.app {
  height: 100%;
}
</style>


