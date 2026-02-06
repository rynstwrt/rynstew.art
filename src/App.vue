<script setup>
import Background from "@/components/Background.vue";
</script>



<template>
    <Background />

    <router-link to="/">Home</router-link>
    <router-link to="/tech">Tech</router-link>
    <router-link to="/art">Portfolio</router-link>

    <router-view />
</template>



<style scoped>
canvas {
    z-index: -1;
}
</style>
