<template>
    <main class="form-signin w-25 m-auto mt-5">
        <form>
          
            <h1 class="h3 mb-3 fw-normal mt-3">Login</h1>
            <ValidationError v-if="validationError" :validationError="validationError" />
            <k-input :label="'Email address'" :type="'email'" v-model="email"/> 
            <k-input class="mt-3" :label="'Password'" :type="'password'" v-model="password"/> 
            <k-button type="submit" :disabled="isLoading" @click="submitHandler">
                Log in
            </k-button>
        </form>
    </main>
</template>
<script setup>
import { computed, ref } from 'vue';
import ValidationError from './ValidationError.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';


const email = ref('')
const password = ref('')
const router = useRouter()

const store = useStore();

const isLoading = computed(() => {
    return store.state.auth.isLoading;
});

const validationError = computed(()=> store.state.auth.errors)

const submitHandler = (e) => {
    e.preventDefault();
    const data = {
        email: email.value,
        password: password.value,
    };
    store
        .dispatch("login", data)
        .then((user) => {
            router.push({ name: "home" });
        })
        .catch((error) => console.log("Error", error));
};

</script>
<style></style>
