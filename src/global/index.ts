import { App } from "vue";
import registerElement from "./register-element";
import registerPro from "./register-pro";
export default function register(app: App) {
  app.use(registerElement);
  app.use(registerPro);
}
