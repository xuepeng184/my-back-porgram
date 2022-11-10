import { App } from "vue";
import { formatUtcString } from "@/utils/date-format";

export default function registerPro(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value);
    },
  };
}
