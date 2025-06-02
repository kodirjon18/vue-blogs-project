<template>
    <div class="form-floating">
        <input
            :type="type"
            class="form-control"
            :id="label"
            :placeholder="label"
            @input="updateInput"
            :value="modelValue"
        />
        <label :for="label">{{ label }}</label>
    </div>
</template>
<script setup>
defineProps({
    label: String,
    type: String,
    modelValue: [String, Number],
});

const emit = defineEmits()

const updateInput = (e) => {
    emit('update:modelValue', e.target.value)
};
</script>
<style></style>
