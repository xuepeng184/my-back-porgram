<template>
  <div class="nav-header">
    <i class="fold-menu" @click="handleCLickChange">
      <Fold style="height: 20px; width: 20px" v-show="!isFold" />
      <Expand style="height: 20px; width: 20px" v-show="isFold" />
    </i>
    <div class="content">
      <xpBread :breadData="breadData"></xpBread>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import UserInfo from "./user-info.vue";
import { useStore } from "@/store";
import { useRoute } from "vue-router";
import xpBread from "@/base-ui/bread/index";
import { pathMapToBread } from "../../../utils/map-menus";
export default defineComponent({
  emits: ["foldChange"],
  setup(props, { emit }) {
    const store = useStore();
    const route = useRoute();
    const isFold = ref(false);
    const handleCLickChange = () => {
      isFold.value = !isFold.value;
      emit("foldChange", isFold.value);
    };

    //面包屑的数据
    const breadData = computed(() => {
      const currentPath = route.path;
      const userMenus = store.state.login.userMenus;
      return pathMapToBread(userMenus, currentPath);
    });

    return {
      handleCLickChange,
      isFold,
      breadData,
    };
  },
  components: {
    UserInfo,
    xpBread,
  },
});
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
.fold-menu {
  cursor: pointer;
}
</style>