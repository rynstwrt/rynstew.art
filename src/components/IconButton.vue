<script setup>
const props = defineProps([
    "icon",
    "url"
]);
</script>



<template>
    <a :href="props.url" target="_blank" v-html="props.icon"></a>
</template>



<style lang="scss" scoped>

</style>