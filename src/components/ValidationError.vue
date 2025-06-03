<template>
    <ul class="list-group">
        <li v-for="errorMessage in errorMessages" :key="errorMessage" class="list-group-item list-group-item-danger mt-2">
            {{ errorMessage }}
        </li>
    </ul>
</template>
<script setup>
import { computed, onMounted, onUpdated } from "vue";

const props = defineProps({
    validationError: Object,
});

const errorMessages = computed(() => {
    return Object.keys(props.validationError).map(name => {
        const msg = props.validationError[name].join(',')

        return `${name} ${msg}`
    })
});
</script>
<style></style>
