<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
    title: String,
    description: String,
    body: String,
    editArticleHandler: Function
})

const title = ref(props.title || '')
const description = ref(props.description || '')
const body = ref(props.body || '')
const store = useStore()

const editArticle = () => {
    const article = {
        title: title.value,
        description: description.value,
        body: body.value,
        taglist: []
    }
    props.editArticleHandler(article)
}
const isLoading = computed(() => store.state.control.isLoading)

</script>

<template>
    <div class="w-50 mx-auto">
        <form @submit.prevent>
            <k-input class="mt-3" type="text" label="Title" v-model="title" />
            <k-textarea class="mt-3" type="text" label="Description" v-model="description" />
            <k-textarea class="mt-3" type="text" label="Body" v-model="body" />
            <k-button @click="editArticle" :disabled="isLoading">Create article</k-button>
        </form>
    </div>
</template>

<style lang="scss" scoped></style>
