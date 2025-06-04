<template>
    <div class="col">
        <div class="card shadow-sm">
            <svg aria-label="Placeholder: Thumbnail" class="bd-placeholder-img card-img-top" height="225"
                preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="5%" y="50%" fill="#eceeef" dy=".3em">{{ article.title }}</text>
            </svg>
            <div class="card-body">
                <p class="card-title fw-bold">
                    {{ article.title }}
                </p>
                <p class="card-text">
                    {{ article.body }}
                </p>
                <div class="d-flex justify-content-between align-items-center card-footer">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary" @click="navigateHandler">
                            Read
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-danger" @click="deleteArticleHandler"
                            v-if="article.author.username === user.username" :disabled='isLoading'>
                            Delete
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-secondary"
                            v-if="article.author.username === user.username"
                            @click="editArticleHandler">
                            Edit
                        </button>
                    </div>
                    <small class="text-body-secondary">{{ new Date(article.createdAt).toLocaleDateString('us')
                        }}</small>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";

const props = defineProps({
    article: Object,
});

const store = useStore()
const router = useRouter()

const navigateHandler = () => {
    return router.push(`/article/${props.article.slug}`)
}

const deleteArticleHandler = () => {
    return store.dispatch('deleteArticle', props.article.slug).then(() => store.dispatch('articles'))
}

const editArticleHandler = () => {
    return router.push(`/edit-article/${props.article.slug}`)
}

const user = computed(() => store.state.auth.user)
const isLoading = computed(() => {
    return store.state.control.isLoading
})


</script>
