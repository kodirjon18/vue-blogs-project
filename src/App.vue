<template>
    <div>
        <div class="container">
            <Navbar />
            <RouterView />
        </div>
    </div>
</template>
<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
onMounted(() => {
    store.dispatch("getUser")
});
</script>
<style></style>
