<script setup>
import ArticleDetailItem from '@/components/ArticleDetailItem.vue';
import Loader from '@/ui-components/Loader.vue';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const route = useRoute()
onMounted(() => {
    store.dispatch('articleDetail', route.params.slug)
})

const isLoading = computed(()=>{
    return store.state.articles.isLoading
})
</script>

<template>
    <div>
        <Loader v-if="isLoading" class="offset-md-6"/>
        <ArticleDetailItem  v-else/>
    </div>
</template>

<style lang="scss" scoped></style>
