<template>
    <div
        class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom"
    >
        <a
            class="d-flex align-items-center link-body-emphasis text-decoration-none"
            @click="toHomeHandler"
            style="cursor: pointer;"
        >
            Vue Blog
        </a>
        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <RouterLink
                :to="{ name: 'login' }"
                class="me-3 py-2 link-body-emphasis text-decoration-none"
                >Login</RouterLink
            >
            <RouterLink
                :to="{ name: 'register' }"
                class="me-3 py-2 link-body-emphasis text-decoration-none"
                >Register</RouterLink
            >
        </nav>
    </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const toHomeHandler = () => {
    return router.push("/");
};
</script>
<style></style>
