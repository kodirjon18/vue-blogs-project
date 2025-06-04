import ArticleService from "@/service/articles";

const state = {
  data: null,
  isLoading: false,
  error: null,
  articleDetail: null,
};

const mutations = {
  getArticlesStart(state) {
    (state.isLoading = true),
      (state.data = null),
      (state.error = null),
      (state.articleDetail = null);
  },
  getArticlesSuccess(state, payload) {
    (state.isLoading = false), (state.data = payload);
  },
  getArticlesFailure(state) {
    state.isLoading = false;
  },
  getArticleDetailsStart(state) {
    (state.isLoading = true),
      (state.data = null),
      (state.articleDetail = null),
      (state.error = null);
  },
  getArticleDetailsSuccess(state, payload) {
    (state.isLoading = false), (state.articleDetail = payload);
  },
  getArticleDetailsFailure(state) {
    state.isLoading = false;
  },
};
const actions = {
  articles(context) {
    return new Promise((resolve) => {
      context.commit("getArticlesStart");
      ArticleService.articles()
        .then((response) => {
          context.commit("getArticlesSuccess", response.data.articles);
          resolve(response.data.articles);
        })
        .catch((error) => {
          context.commit("getArticlesFailure");
        });
    });
  },
  articleDetail(context, slug) {
    return new Promise((resolve) => {
      context.commit("getArticleDetailsStart");
      ArticleService.articleDetail(slug)
        .then((response) => {
          context.commit("getArticleDetailsSuccess", response.data.article);
          resolve(response.data.article);
        })
        .catch(() => context.commit("getArticleDetailsFailure"));
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
