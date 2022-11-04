import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LocalCache from "@/utils/cache";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/login",
    component: () => import("@/views/Login/Login.vue"),
  },
  {
    path: "/main",
    component: () => import("@/views/Main/Main.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = LocalCache.getCache("token");
    if (!token) {
      return "/login";
    }
  }
});

export default router;
