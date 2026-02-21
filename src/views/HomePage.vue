<script setup>
import LandingPage from "../components/LandingSection.vue";
import { onMounted } from "vue";

const PLACEHOLDER_MODE = true;
const PLACEHOLDER_MODE_ALLOWED = ["#bg-particles", "#landing *:not(#down-chevron-container)", "#landing"]


onMounted(() => {
    if (PLACEHOLDER_MODE) {
        const sel = `#app *:not(${PLACEHOLDER_MODE_ALLOWED.join()})`;
        document.querySelectorAll(sel)
                .forEach(el => el.remove());
    }
});
</script>



<template>
    <LandingPage :showArrow="!PLACEHOLDER_MODE" />
</template>