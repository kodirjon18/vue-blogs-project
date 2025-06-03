<template>
    <main class="form-signin w-25 m-auto mt-5">
        <form>
            <h1 class="h3 mb-3 fw-normal mt-3">Register</h1>
            <ValidationError v-if="validationError" :validationError="validationError"/>
            <k-input :label="'Name'" :type="'text'" v-model="username" />
            <k-input
                :label="'Email address'"
                :type="'email'"
                class="mt-3"
                v-model="email"
            />
            <k-input
                :label="'Password'"
                :type="'password'"
                class="mt-3"
                v-model="password"
            />
            <k-button
                type="submit"
                :disabled="isLoading"
                @click="submitHandler"
            >
                Register
            </k-button>
        </form>
    </main>
</template>
<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import ValidationError from "./ValidationError.vue";

const username = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();

const store = useStore();
const isLoading = computed(() => {
    return store.state.auth.isLoading;
});

const validationError = computed(()=> store.state.auth.errors)

const submitHandler = (e) => {
    e.preventDefault();
    const data = {
        username: username.value,
        email: email.value,
        password: password.value,
    };
    store
        .dispatch("register", data)
        .then((user) => {
            console.log("USER", user);
            router.push({ name: "home" });
        })
        .catch((error) => console.log("Error", error));
};
</script>
<style></style>
