<script setup>
import ArticleForm from '@/components/ArticleForm.vue';
import Loader from '@/ui-components/Loader.vue';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const title = ref('')
const description = ref('')
const body = ref('')
const store = useStore()
const router = useRouter()
const route = useRoute()
const article = computed(() => store.state.articles.articleDetail)
const isLoading = computed(() => store.state.articles.isLoading)

onMounted(() => {
    store.dispatch('articleDetail', route.params.slug)
})

const editArticleHandler = (article) => {
    return store.dispatch('updateHandler', { article: article, slug: route.params.slug }).then(() => router.push({ name: 'home' }))
}


</script>

<template>
    <h1 class="text-center">Edit Article</h1>
    <Loader v-if="isLoading" class="offset-md-6"/>
    <ArticleForm v-else-if="!isLoading && article" :title="article.title" :description="article.description" :body="article.body"
        :editArticleHandler="editArticleHandler" />
</template>

<style lang="scss" scoped></style>
