import { ref } from "vue";
import pageModel from "@/components/page-model";

type CallBackType = (item?: any) => void;

export function usePageModel(newCallBack?: CallBackType, editCallback?: CallBackType) {
  const pageModelRef = ref<InstanceType<typeof pageModel>>();

  const defaultInfo = ref({});

  const handleNewData: any = () => {
    defaultInfo.value = {};
    if (pageModelRef.value) pageModelRef.value.dialogVisible = true;
    newCallBack && newCallBack();
  };

  const handleEditData: any = (item: any) => {
    defaultInfo.value = { ...item };
    if (pageModelRef.value) pageModelRef.value.dialogVisible = true;
    editCallback && editCallback(item);
  };

  return [handleEditData, handleNewData, defaultInfo, pageModelRef];
}
