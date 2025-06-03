<template>
    <div
        class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom"
    >
        <a
            class="d-flex align-items-center link-body-emphasis text-decoration-none"
            @click="toHomeHandler"
            style="cursor: pointer"
        >
            Vue Blog
        </a>
        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <template v-if="isLoogedIn">
                <RouterLink :to="{name: 'home'}" class="me-3 py-2 link-body-emphasis text-decoration-none">
                    {{ user.username }}
                </RouterLink> 
                <a href="#" @click="logout" class="me-3 py-2 link-body-emphasis text-decoration-none"> Log out</a>
            </template>
            <template v-if="isAnonymous">
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
            </template>
        </nav>
    </div>
</template>
<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { gettersTypes } from "@/modules/types";

const router = useRouter();
const store = useStore();

const toHomeHandler = () => {
    return router.push("/");
};

const user = computed(() => store.getters[gettersTypes.currentUser]);
const isLoogedIn = computed(() => store.getters[gettersTypes.isLoogedIn]);
const isAnonymous = computed(() => store.getters[gettersTypes.isAnonymous]);

const logout = () => {
    return store.dispatch('logout')
}
</script>
<style></style>
