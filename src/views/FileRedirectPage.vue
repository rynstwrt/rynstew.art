<script setup>
const props = defineProps(["path"]);

// const file = props.path || "/";
// window.location.href = file;

</script>



<template>
    <p>{{ props.path }}</p>
</template>