<script setup>
import "./App.scss";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import particlesConfig from "./assets/json/particles-config.json";
import { RouterView } from "vue-router";


(async engine => {
    await loadSlim(engine);

    await engine.load({
        id: "bg-particles",
        options: particlesConfig
    });
})(tsParticles);
</script>



<template>
    <!-- BACKGROUND PARTICLES -->
    <div id="bg-particles" ref="bg-particles"></div>

    <RouterView />

</template>