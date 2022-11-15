import { ref } from "vue";
import pageContent from "@/components/page-content";

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof pageContent>>();

  const handleReset: any = () => {
    pageContentRef.value?.getPageData();
  };

  const handleSearch: any = (searchData: any) => {
    pageContentRef.value?.getPageData(searchData);
  };
  return [pageContentRef, handleReset, handleSearch];
}
