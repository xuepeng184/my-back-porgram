<template>
  <div class="page-model">
    <el-dialog
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
      center
      destroy-on-close
    >
      <xpForm v-bind="modelConfig" v-model="formData"></xpForm>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import xpForm from "@/base-ui/form";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    modelConfig: {
      type: Object,
      required: true,
    },
    defaultInfo: {
      type: Object,
      default: () => ({}),
    },
    pageName: {
      type: String,
      required: true,
    },
    otherInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const store = useStore();
    let dialogVisible = ref(false);
    const formData = ref<any>({});

    const handleConfirmClick = () => {
      dialogVisible.value = false;
      if (Object.keys(props.defaultInfo).length) {
        //编辑
        store.dispatch("system/editPageDataAction", {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id,
        });
      } else {
        // 新建
        console.log(props.otherInfo);
        store.dispatch("system/createPageDataAction", {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo },
        });
      }
    };
    watch(
      () => props.defaultInfo,
      (newV) => {
        for (const item of props.modelConfig.formItems) {
          formData.value[`${item.field}`] = newV[`${item.field}`];
        }
      }
    );

    return { dialogVisible, formData, handleConfirmClick };
  },
  components: {
    xpForm,
  },
});
</script>

<style scoped>
</style>