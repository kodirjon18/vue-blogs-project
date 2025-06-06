import auth from "@/modules/auth";
import { createStore } from "vuex";
import articles from "@/modules/articles";
import control from "@/modules/control";

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {auth, articles, control}

});

export default store;
