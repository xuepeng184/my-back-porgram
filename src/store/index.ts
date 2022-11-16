import { createStore, Store, useStore as useVuexStore } from "vuex";
import { IStoreType } from "./type";
import { IRootState } from "./type";
import login from "./login/login";
import system from "./main/system/system";
import { getPageListData } from "@/network/main/system/system";
import dashboard from "./main/analysis/dashboard";

const store = createStore<IRootState>({
  state: () => {
    return {
      name: "xp",
      entireDepartment: [],
      entireRole: [],
      entireMenu: [],
    };
  },
  getters: {},
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list;
    },
    changeEntireRole(state, list) {
      state.entireRole = list;
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list;
    },
  },
  actions: {
    async getInitialDataAction({ commit }) {
      //请求部门和角色
      const departmentResult = await getPageListData("/department/list", {
        offset: 0,
        size: 1000,
      });
      const { list: departmentList } = departmentResult.data;
      const roleResult = await getPageListData("/role/list", {
        offset: 0,
        size: 1000,
      });
      const { list: roleList } = roleResult.data;

      const menuResult = await getPageListData("/menu/list", {});
      const { list: menuList } = menuResult.data;

      commit("changeEntireDepartment", departmentList);
      commit("changeEntireRole", roleList);
      commit("changeEntireMenu", menuList);
    },
  },
  modules: {
    login,
    system,
    dashboard,
  },
});

export default store;

export function setupStore() {
  store.dispatch("login/loadLocalLogin");
}

export function useStore(): Store<IStoreType> {
  return useVuexStore();
}
