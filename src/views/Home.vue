<template>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <Loader v-if="isLoading" class="offset-md-6" />
        <ArticleCard
            v-else
            v-for="article in data"
            :article="article"
            :key="article.id"
        />
    </div>
</template>
<script setup>
import ArticleCard from "@/components/ArticleCard.vue";
import Loader from "@/ui-components/Loader.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => store.dispatch("articles"));

const data = computed(() => store.state.articles.data);
const isLoading = computed(() => store.state.articles.isLoading);
const error = computed(() => store.state.articles.error);
</script>
<style></style>
