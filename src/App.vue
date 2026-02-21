<script setup>
import { RouterView } from "vue-router";
import ThreeDimBackground from "./components/ThreeDimBackground.vue";
import { ref } from "vue";
// import { TresCanvas, useLoop } from "@tresjs/core";
import ParticleBackground from "./components/ParticleBackground.vue";

// const meshRef = ref(null);
//
//
// const { onBeforeRender } = useLoop()
//
//
// onBeforeRender(() => {
//     if (meshRef.value) {
//         console.log("A")
//         // Rotate the donut on both X and Y axes
//         meshRef.value.rotation.x = elapsed * 0.5
//         meshRef.value.rotation.y = elapsed * 0.3
//     }
// })
</script>


<template>
    <ParticleBackground />
    <!--<TresCanvas id="threejs-bg" :alpha="true" window-size>-->
    <!--    <ThreeDimBackground id="threejs-bg" />-->

    <!--</TresCanvas>-->

    <RouterView />
</template>



<style lang="scss">
//* {
//    margin: 0;
//    padding: 0;
//    box-sizing: border-box;
//    scroll-behavior: smooth;
//    @include default-font("content");
//    font-style: normal;
//    //font-size: 14px;
//    font-size: 16px;
//    font-weight: normal;
//}
//
//
//html, body, #app {
//    height: 100%;
//}
//
//
//body {
//    background-color: $color-background;
//    color: $color-light;
//    font-size: 16px;
//
//    &::before {
//        content: "";
//        position: fixed;
//        top: 0;
//        right: 0;
//        bottom: 0;
//        left: 0;
//        background-size: cover;
//        z-index: -2;
//        background: url("./assets/img/banner.jpg") no-repeat fixed center;
//        opacity: 0.3;
//        filter: brightness(30%) contrast(105%);
//    }
//}
//
//
//a {
//    color: inherit;
//    text-decoration: none;
//}
</style>