<template>
  <div class="page-search">
    <xpForm v-bind="formConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-buttons">
          <el-button type="primary" icon="Refresh" @click="handleClickReset"
            >重置</el-button
          >
          <el-button type="primary" icon="Search">搜索</el-button>
        </div>
      </template>
    </xpForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import xpForm from "../../../base-ui/form/index";
export default defineComponent({
  components: { xpForm },
  props: {
    formConfig: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const formItems = props.formConfig.formItems ?? [];

    //初始化值
    const formOriginData: any = [];
    for (const item of formItems) {
      formOriginData[item.field] = "";
    }

    const formData = ref(formOriginData);
    const handleClickReset = () => {
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[`${key}`];
      }
    };
    return { formData, handleClickReset };
  },
});
</script>

<style scoped>
.handle-buttons {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>