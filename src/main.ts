import { createApp } from "vue";
import App from "./App.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "normalize.css";
import "./assets/css/index.less";
import router from "./router";
import store from "./store";
import register from "./global/index";
import { setupStore } from "./store";
const app = createApp(App);

app.use(register);
setupStore();
app.use(store).use(router);

app.mount("#app");

//注册icon图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
