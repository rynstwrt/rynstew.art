<script setup>
import { animate, splitText, stagger, random } from 'animejs';
import { onMounted } from "vue";

onMounted(() => {
    animate("#down-chevron-container", {
        bottom: "+=7px",
        loop: true,
        alternate: true,
        easing: "inQuad",
        duration: 600
    });
});
</script>



<template>
    <div id="down-chevron-container">
        <svg xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="0.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-down">
            <polyline points="6 9 12 15 18 9" />
        </svg>
    </div>
</template>




<style scoped>
#down-chevron-container {
    width: 45px;
    position: absolute;
    bottom: 20px;
    display: flex;
    place-content: center;

    svg {
        color: var(--color-light-2);
        min-width: 100%;
        height: min-content;
    }
}
</style>