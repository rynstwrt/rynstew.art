<script setup>
import particlesConfig from "../assets/json/particles-config.json";
import { loadSlim } from "@tsparticles/slim";
import { tsParticles } from "@tsparticles/engine";


(async engine => {
    await loadSlim(engine);

    await engine.load({
        id: "bg-particles",
        options: particlesConfig
    });
})(tsParticles);
</script>



<template>
    <div id="bg-particles" ref="bg-particles"></div>
</template>



<style scoped lang="scss">
#bg-particles {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    opacity: .09;
    pointer-events: none;
    width: 100%;
    height: 100%;
}
</style>