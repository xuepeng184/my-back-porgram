import { createStore, Store, useStore as useVuexStore } from "vuex";
import { IStoreType } from "./type";
import { IRootState } from "./type";
import login from "./login/login";
import system from "./main/system/system";
const store = createStore<IRootState>({
  state: () => {
    return {
      name: "xp",
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    system,
  },
});

export default store;

export function setupStore() {
  store.dispatch("login/loadLocalLogin");
}

export function useStore(): Store<IStoreType> {
  return useVuexStore();
}
