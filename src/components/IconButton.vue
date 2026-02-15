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
    //border: 1px solid $color-light-2;
    border: 1px solid rgba($color-light-2, 0.75);
    //border-radius: 2px;
    padding: 5px 7px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity .05s ease-in;
    display: flex;
    align-items: center;
    //font-weight: 200;

    &.center {
        justify-content: center;
        text-align: center;
    }

    :deep(span.social-icon) {
        //display: flex;
        //justify-content: center;
        //align-items: center;

        width: 25px;
        height: 25px;
        //aspect-ratio: 1;
        margin-right: 5px;

        svg {
            color: $color-primary;
            height: 100%;
            width: auto;
            padding: 2px;
        }
    }

    :deep(span.social-text) {
        color: $color-light;
        font-weight: 200;
        //font-size: 0.85rem;
        font-size: 0.9rem;
        letter-spacing: 1px;
    }

    &:hover {
        opacity: 1;
        //border-color: $color-light-2;
    }
}
</style>