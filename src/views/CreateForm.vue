<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const title = ref('')
const description = ref('')
const body = ref('')
const store = useStore()
const router = useRouter()

const createArticleHandler = () => {
    const article = {
        title: title.value,
        description: description.value,
        body: body.value,
        taglist: []
    }
    store.dispatch('createArticle', article)
    router.push({ name: 'home' })


}

const isLoading = computed(() => store.state.control.isLoading)
</script>

<template>
    <h1 class="text-center">Create Article</h1>
    <div class="w-50 mx-auto">
        <form @submit.prevent>
            <k-input class="mt-3" type="text" label="Title" v-model="title" />
            <k-textarea class="mt-3" type="text" label="Description" v-model="description" />
            <k-textarea class="mt-3" type="text" label="Body" v-model="body" />
            <k-button @click="createArticleHandler" :disabled="isLoading">Create article</k-button>
        </form>
    </div>
</template>

<style lang="scss" scoped></style>
