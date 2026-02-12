<script setup>
const props = defineProps([
    "url"
]);

console.log(props.url);
</script>



<template>
    <button class="ryn-btn">
        {{ props.url }}
        <slot />
    </button>
</template>



<style>

</style>