<template>
  <div class="role">
    <page-search :formConfig="formConfig"></page-search>
    <page-content
      :contentConfig="contentConfig"
      page-name="role"
      @new-btn-click="handleNewData"
      @edit-btn-click="handleEditData"
    ></page-content>
    <page-model
      ref="pageModelRef"
      :modelConfig="modelConfig"
      page-name="role"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
    >
      <div class="menuTree">
        <el-tree
          ref="elTreeRef"
          @check="handleCheckChange"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
        />
      </div>
    </page-model>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, nextTick } from "vue";
import { useStore } from "@/store";
import pageContent from "@/components/page-content";
import { contentConfig } from "./config/content.config";
import { formConfig } from "./config/search.config";
import pageSearch from "@/components/page-search";
import pageModel from "@/components/page-model";
import { modelConfig } from "./config/model.config";
import { usePageModel } from "../../../../hooks/usePageModel";
import { getMenuLeafKeys } from "@/utils/map-menus";
import { ElTree } from "element-plus";

export default defineComponent({
  name: "role",
  setup() {
    const elTreeRef = ref<InstanceType<typeof ElTree>>();
    const store = useStore();

    const editCallback = (item: any) => {
      const leafkeys = getMenuLeafKeys(item.menuList);
      nextTick(() => elTreeRef.value?.setCheckedKeys(leafkeys, false));
    };
    const [handleEditData, handleNewData, defaultInfo, pageModelRef] =
      usePageModel(undefined, editCallback);

    const menus = computed(() => store.state.entireMenu);

    const otherInfo = ref({});

    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys;
      const halfCheckedKeys = data2.halfCheckedKeys;
      const menuList = [...checkedKeys, ...halfCheckedKeys];
      otherInfo.value = { menuList };
    };

    return {
      contentConfig,
      formConfig,
      modelConfig,
      handleEditData,
      handleNewData,
      defaultInfo,
      pageModelRef,
      menus,
      otherInfo,
      handleCheckChange,
      elTreeRef,
    };
  },
  components: {
    pageContent,
    pageSearch,
    pageModel,
  },
});
</script>

<style scoped lang="less">
.menuTree {
  margin-left: 35px;
}
</style>
