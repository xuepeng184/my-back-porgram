import { Module } from "vuex";
import { ISystemState } from "./type";
import { IRootState } from "../../type";

import { getPageListData } from "@/network/main/system/system";

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
    };
  },
  mutations: {
    changeuserList(state, userList: any[]) {
      state.userList = userList;
    },
    changeuserCount(state, userCount: number) {
      state.userCount = userCount;
    },
    changeroleList(state, roleList: any[]) {
      state.roleList = roleList;
    },
    changeroleCount(state, roleCount: number) {
      state.roleCount = roleCount;
    },
    changegoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList;
    },
    changegoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount;
    },
    changemenuList(state, menuList: any[]) {
      state.menuList = menuList;
    },
    changemenuCount(state, menuCount: number) {
      state.menuCount = menuCount;
    },
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      //对页面发生请求
      let pageUrl = "";
      const pageName = payload.pageName;
      switch (pageName) {
        case "user":
          pageUrl = "/users/list";
          break;
        case "role":
          pageUrl = "/role/list";
          break;
        case "goods":
          pageUrl = "/goods/list";
          break;
        case "menu":
          pageUrl = "/menu/list";
      }
      const pageResult = await getPageListData(pageUrl, payload.queryInfo);
      console.log(pageResult);

      const { list, totalCount } = pageResult.data;
      commit(`change${pageName}List`, list);
      commit(`change${pageName}Count`, totalCount);
    },
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`];
      };
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`];
      };
    },
  },
};

export default systemModule;
