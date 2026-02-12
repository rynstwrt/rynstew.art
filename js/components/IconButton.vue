<script setup>
const props = defineProps(["url"]);


function onClick() {
    console.log("click");

    if (props.url)
        return window.open(props.url, "_blank");

    console.log("MEME");
}
</script>


<template>
    <button class="icon-button" @click="onClick">
        <slot />
    </button>
</template>