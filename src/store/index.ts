import { createStore, Store, useStore as useVuexStore } from "vuex";
import { IStoreType } from "./type";
import { IRootState } from "./type";
import login from "./login/login";

const store = createStore<IRootState>({
  state: () => {
    return {
      name: "",
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login,
  },
});

export default store;

export function setupStore() {
  store.dispatch("login/loadLocalLogin");
}

export function useStore(): Store<IStoreType> {
  return useVuexStore();
}
