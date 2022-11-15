<template>
  <div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <span>{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleExitClick">退出登录</el-dropdown-item>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>信息管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import localCache from "@/utils/cache";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const name = computed(() => store.state.login.userInfo.name);
    const handleExitClick = () => {
      localCache.deleteCache("token");
      router.push("/main");
    };
    return { name, handleExitClick };
  },
});
</script>

<style scoped>
</style>