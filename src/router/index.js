import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register.vue')
    },
    {
      path: '/article/:slug',
      name: 'article-details',
      component: () => import('@/views/ArticleDetail.vue')
    },
    {
      path: '/create-article',
      name: 'create-article',
      component: () => import('@/views/CreateForm.vue')
    },
    {
      path: '/edit-article/:slug',
      name: 'edit-article',
      component: () => import('@/views/EditArticle.vue')
    }
  ],
})

export default router
