<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

const article = computed(() => {
    return store.state.articles.articleDetail
})

</script>

<template>
    <div v-if="article">
        <div class="row">
            <div class="col-12">
                <p class="fs-2">
                    {{ article.title }}
                </p>
            </div>
            <div class="col-md-12 col-lg-8 mt-3">
                <p class="opacity-75">Description:</p>
                <p class="font-monospace">
                    {{ article.description }}
                </p>
            </div>
            <div class="col-6 col-lg-2 mt-3">
                <p class="opacity-75">Created at:</p>
                <p class="font-monospace">
                    {{ new Date(article.createdAt).toLocaleDateString('us') }}
                </p>
            </div>
            <div class="col-6 col-lg-2 mt-3">
                <p class="opacity-75">Updated at:</p>
                <p class="font-monospace">
                    {{ new Date(article.updatedAt).toLocaleDateString('us') }}
                </p>
            </div>
            <div class="col-lg-4 mt-3">
                <div class="d-flex align-items-center gap-3">
                    <div class="d-flex justify-content-center align-items-center bg-dark"
                        style="width: 50px; height: 50px; border-radius: 50%;">
                        <span class="text-light text-uppercase fw-bold">{{ article.author.username[0] }}</span>
                    </div>
                    <div class="fw-bold">
                        {{ article.author.username }}
                    </div>
                </div>
                <p class="mt-2 font-monospace">{{ article.author.bio }}</p>
            </div>
            <div class="col-lg-8 mt-3">
                <p class="opacity-75">Body:</p>
                <p>
                    {{ article.body }}
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
