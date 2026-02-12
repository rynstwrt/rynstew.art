<script setup>
const props = defineProps(["url"]);


function onClick() {
    console.log(`Opening ${props.url}`);

    if (props.url)
        return window.open(props.url, "_blank");
}
</script>


<template>
    <button class="icon-button" @click="onClick">
        <slot />
    </button>
</template>


<style lang="scss" scoped>
@use "css/partials/_colors.scss" as *;


.icon-button {
    //background-color: $color-primary;
}
</style>