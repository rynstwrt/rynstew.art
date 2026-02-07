<script setup>
import Background from "@/components/Background.vue";
import Header from "@/components/Header.vue";
</script>



<template>
    <Background
        particleColor='#FFFFFF'
        particleOpacity='0.4' />

    <Header />

    <router-view />
</template>


<style lang="scss" >
@use '@/css/constants' as *;


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: $font-1;
    font-weight: normal;
    font-size: 16px;
}


html, body {
    height: 100%;
}


body {
    background-color: $color-background;
    color: $color-light;
    padding: 20px;
}


#app {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


a {
    color: inherit;
    text-decoration: none;
    //font-family: inherit;
}
</style>