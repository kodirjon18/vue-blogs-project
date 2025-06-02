<template>
    <div class="form-floating">
        <input
            :type="type"
            class="form-control"
            id="floatingInput"
            :placeholder="label"
        />
        <label for="floatingInput">{{ label }}</label>
    </div>
</template>
<script setup>
defineProps({
    label: String,
    type: String,
})
</script>
<style></style>
