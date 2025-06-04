import ArticleService from "@/service/articles";

const state = {
  isLoading: null,
};

const mutations = {
  controlArticleStart(state) {
    state.isLoading = true;
  },
  controlArticleSuccess(state) {
    state.isLoading = false;
  },
  controlArticleFailur(state) {
    state.isLoading = false;
  },
};

const actions = {
  createArticle(context, article) {
    return new Promise((resolve) => {
      context.commit("controlArticleStart");
      ArticleService.createArticle(article)
        .then(() => {
          context.commit("controlArticleSuccess");
        })
        .catch(() => {
          context.commit("controlArticleFailur");
        });
    });
  },
  deleteArticle(context, slug) {
    return new Promise((resolve) => {
      context.commit("controlArticleStart");
      ArticleService.deleteArticle(slug)
        .then(() => {
          context.commit("controlArticleSuccess");
          resolve();
        })
        .catch(() => {
          context.commit("controlArticleFailur");
        });
    });
  },
  updateHandler(context, data) {
    return new Promise((resolve) => {
      context.commit("controlArticleStart");
      ArticleService.updateArticle(data.article, data.slug)
        .then(() => {
            context.commit("controlArticleSuccess")
            resolve()
        })
        .catch(() => context.commit("controlArticleFailur"));
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
