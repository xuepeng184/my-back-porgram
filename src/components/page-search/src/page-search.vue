<template>
  <div class="page-search">
    <xpForm v-bind="formConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-buttons">
          <el-button type="primary" icon="Refresh">重置</el-button>
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
  setup() {
    const formData = ref({
      id: "",
      password: "",
      name: "",
      sport: "",
      createTime: "",
    });
    return { formData };
  },
});
</script>

<style scoped>
.handle-buttons {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>