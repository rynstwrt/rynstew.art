<script setup>
import Background from "@/components/Background.vue";
</script>



<template>
    <Background />

    <!--<router-link to="/">Home</router-link>-->
    <!--<router-link to="/tech">Tech</router-link>-->
    <!--<router-link to="/art">Portfolio</router-link>-->
    <!---->
    <router-view />
</template>


<style lang="scss" >
@import '/sr'


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: $font-1;
}


html, body {
    height: 100%;
}


body {
    background-color: $color-primary;
    color: white;
}


#app {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>


<style scoped>
canvas {
    z-index: -1;
}
</style>
