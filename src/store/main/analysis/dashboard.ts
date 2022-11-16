import { Module } from "vuex";
import { IDashBoardState } from "./type";
import { IRootState } from "@/store/type";
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale,
} from "@/network/main/analysis/dashboard";

const dashBoardModule: Module<IDashBoardState, IRootState> = {
  namespaced: true,

  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: [],
    };
  },
  getters: {},
  actions: {
    async getDashboardDataAction({ commit }) {
      const result1 = await getCategoryGoodsCount();
      commit("changeCategoryGoodsCount", result1.data);
      const result2 = await getCategoryGoodsSale();
      commit("changeCategoryGoodsSale", result2.data);
      const result3 = await getCategoryGoodsFavor();
      commit("changeCategoryGoodsFavor", result3.data);
      const result4 = await getAddressGoodsSale();
      commit("changeAddressGoodsSale", result4.data);
    },
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list;
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list;
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list;
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list;
    },
  },
};

export default dashBoardModule;
