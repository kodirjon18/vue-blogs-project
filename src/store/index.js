import auth from "@/modules/auth";
import { createStore } from "vuex";
import articles from "@/modules/articles";

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {auth, articles}

});

export default store;
