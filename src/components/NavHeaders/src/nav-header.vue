<template>
  <div class="nav-header">
    <i class="fold-menu" @click="handleCLickChange">
      <Fold style="height: 20px; width: 20px" v-show="!isFold" />
      <Expand style="height: 20px; width: 20px" v-show="isFold" />
    </i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isFold = ref(false);
    const handleCLickChange = () => {
      isFold.value = !isFold.value;
      emit("foldChange", isFold.value);
    };
    return {
      handleCLickChange,
      isFold,
    };
  },
});
</script>

<style scoped lang="less">
.fold-menu {
  cursor: pointer;
}
</style>