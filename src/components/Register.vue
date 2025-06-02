<template>
    <main class="form-signin w-25 m-auto mt-5">
        <form>
            <h1 class="h3 mb-3 fw-normal mt-3">Register</h1>
            <k-input :label="'Name'" :type="'text'" />
            <k-input :label="'Email address'" :type="'email'" class="mt-3" />
            <k-input :label="'Password'" :type="'password'" class="mt-3" />
            <k-button type="submit" :disabled="isLoading" @click="submitHandler"> Register </k-button>
        </form>
    </main>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isLoading = computed(() => {
    return store.state.auth.isLoading;
});

const submitHandler = (e) => {
    e.preventDefault();
    store.commit('setLoading')
};
</script>
<style></style>
