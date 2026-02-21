<script setup>
import { RouterView } from "vue-router";
import ParticleBackground from "./components/ParticleBackground.vue";
</script>



<template>
    <ParticleBackground />

    <RouterView />
</template>



<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    @include default-font("content");
    font-style: normal;
    //font-size: 14px;
    font-size: 16px;
    font-weight: normal;
}


html, body, #app {
    height: 100%;
}


body {
    background-color: $color-background;
    color: $color-light;

    &::before {
        content: "";
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-size: cover;
        z-index: -2;
        background: url("./assets/img/banner.jpg") no-repeat fixed center;
        opacity: 0.3;
        filter: brightness(30%) contrast(105%);
    }
}


a {
    color: inherit;
    text-decoration: none;
}


</style>