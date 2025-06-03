import { removeItem, setItem } from "@/helpers/persistaneStorage";
import AuthService from "@/service/auth";
import { gettersTypes } from "./types";

const state = {
    isLoading: false,
    user: null,
    errors: null,
    isLoogedIn: null,
};

const getters = {
    [gettersTypes.currentUser]: (state) => {
        return state.user;
    },
    [gettersTypes.isLoogedIn]: (state) => {
        return Boolean(state.isLoogedIn);
    },
    [gettersTypes.isAnonymous]: (state) => {
        return state.isLoogedIn === false;
    },
};

const mutations = {
    registerStart(state) {
        state.isLoading = true;
        state.user = null;
        state.errors = null;
        state.isLoogedIn = null;
    },

    registerSuccess(state, payload) {
        state.isLoading = false;
        state.user = payload;
        state.isLoogedIn = true;
    },

    registerFailure(state, payload) {
        state.isLoading = false;
        state.errors = payload.errors;
        state.isLoogedIn = false;
    },
    loginStart(state) {
        state.isLoading = true;
        state.user = null;
        state.errors = null;
        state.isLoogedIn = null;
    },
    loginSuccess(state, payload) {
        state.isLoading = false;
        state.user = payload;
        state.isLoogedIn = true;
    },
    loginFailure(state, payload) {
        state.isLoading = false;
        state.errors = payload.errors;
        state.isLoogedIn = false;
    },
    currentUserStart(state) {
        state.isLoading = true;
    },
    currentUserSuccess(state, payload) {
        (state.isLoading = false),
            (state.user = payload),
            (state.isLoogedIn = true);
    },
    currentUserFailure(state) {
        (state.isLoading = false),
            (state.user = null),
            (state.isLoogedIn = false);
    },
    logout(state) {
        (state.user = null), (state.isLoogedIn = false);
    },
};

const actions = {
    register(context, user) {
        return new Promise((resolve, reject) => {
            context.commit("registerStart");
            AuthService.register(user)
                .then((response) => {
                    context.commit("registerSuccess", response.data.user);
                    setItem("token", response.data.user.token);
                    resolve(response.data.user);
                })
                .catch((error) => {
                    context.commit("registerFailure", error.response.data);
                    reject(error.response.data);
                });
        });
    },
    login(context, user) {
        return new Promise((resolve, reject) => {
            AuthService.login(user)
                .then((response) => {
                    context.commit("registerSuccess", response.data.user);
                    setItem("token", response.data.user.token);
                    resolve(response.data.user);
                })
                .catch((error) => {
                    context.commit("registerFailure", error.response.data);
                    reject(error.response.data);
                });
        });
    },
    getUser(context) {
        return new Promise((resolve) => {
            context.commit("currentUserStart");
            AuthService.getUser()
                .then((response) => {
                    context.commit("currentUserSuccess", response.data.user);
                    resolve(response.data.user);
                })
                .catch(() => context.commit("currentUserFailure"));
        });
    },
    logout(context) {
        context.commit("logout");
        removeItem("token");
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
