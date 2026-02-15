<script setup>
const props = defineProps([
    "text",
    "icon",
    "url",
    "center"
]);

const openURL = url => window.open(url, "_blank");
</script>



<template>
    <button
        :class="() => 'social-btn' + props.center==='true' ? ' center' : ''"
        @click="props.url && openURL(props.url)" >
        <span class="social-icon" v-if="props.icon" v-html="props.icon"></span>
        <span class="social-text">{{ props.text }}</span>
    </button>
</template>



<style lang="scss" scoped>
button {
    background-color: transparent;
    //font-size: inherit;
    border: 1px solid $color-light;
    border-radius: 3px;
    padding: 5px 7px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity .115s ease-out;
    display: flex;
    align-items: center;
    font-weight: 400;

    &.center {
        justify-content: center;
        text-align: center;
    }

    :deep(span.social-icon) {
        //float: left;
        display: flex;
        justify-content: center;
        align-items: center;

        width: 25px;
        aspect-ratio: 1;
        margin-right: 5px;

        svg {
            color: $color-primary;
            height: 100%;
            width: auto;
        }
    }

    :deep(span.social-text) {
        color: $color-light;
        //font-size: inherit;
        font-size: 0.9rem;
    }

    &:hover {
        opacity: 1;
    }
}
</style>