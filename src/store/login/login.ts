import { Module } from "vuex";
import {
  accountLoginRequest,
  requestUserInfo,
  requestUserMenus,
} from "../../network/login/login";
import { ILoginState } from "./type";
import { IRootState } from "../type";
import { IAccount } from "@/network/login/type";
import LocalCache from "@/utils/cache";
import router from "@/router";
import { mapMenusToRoutes, mapMenusToPermissions } from "@/utils/map-menus";

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
      permissions: [],
    };
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo;
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus;
      const routes = mapMenusToRoutes(userMenus);
      routes.forEach((route) => {
        router.addRoute("main", route);
      });

      //获取用户权限
      const permission = mapMenusToPermissions(userMenus);
      state.permissions = permission;
    },
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const accountResult = await accountLoginRequest(payload);
      console.log("account", accountResult);
      const { id, token } = accountResult.data;
      commit("changeToken", token);
      LocalCache.setCache("token", token);
      //请求用户信息
      const userInfoResult = await requestUserInfo(id);
      console.log("userInfo", userInfoResult);
      const userInfo = userInfoResult.data;
      commit("changeUserInfo", userInfo);
      LocalCache.setCache("userInfo", userInfo);

      //请求用户菜单
      const userMenUResult = await requestUserMenus(userInfo.role.id);
      const userMenus = userMenUResult.data;
      console.log("userMenus", userMenus);
      commit("changeUserMenus", userMenus);
      LocalCache.setCache("userMenus", userMenus);

      router.push("/main");
    },

    loadLocalLogin({ commit }) {
      const token = LocalCache.getCache("token");
      if (token) {
        commit("changeToken", token);
      }
      const userInfo = LocalCache.getCache("userInfo");
      if (userInfo) {
        commit("changeUserInfo", userInfo);
      }
      const userMenus = LocalCache.getCache("userMenus");
      if (userMenus) {
        commit("changeUserMenus", userMenus);
      }
    },
  },
  getters: {},
};

export default loginModule;
