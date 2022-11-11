import { ref } from "vue";
import pageContent from "@/components/page-content";

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof pageContent>>();

  const handleReset = () => {
    pageContentRef.value?.getPageData();
  };

  const handleSearch = (searchData: any) => {
    pageContentRef.value?.getPageData(searchData);
  };
  return [pageContentRef, handleReset, handleSearch];
}
