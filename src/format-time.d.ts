import { ComponentCustomProperties } from "@vue/runtime-core";

interface FormatDate {
  formatTime: (UtcString: string) => {};
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $filters: FormatDate; // 这里填类型
  }
}
// 必须导出，才能在其他文件中使用
export default ComponentCustomProperties;
