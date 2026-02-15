<script setup>
const props = defineProps([
    "text",
    "icon",
    "url"
]);

// function onButtonClick(event) {
//     const btnEl = event.target;
//     console.log(props.url)
// }

function onButtonClick(url) {
    console.log(url.currentTarget)
}
</script>



<template>
    <!--<button @click="() => onButtonClick(props.url)">-->
    <!--<button>-->
    <button @click=onButtonClick>
        <span class="social-icon" v-html="icon"></span>
        <span class="social-text">{{ props.text }}</span>
    </button>
</template>



<style lang="scss" scoped>
    button {
        background-color: transparent;
        color: $color-light;
        font-size: inherit;
        border: 1px solid $color-light;
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 10px;
        box-sizing: content-box;
        cursor: pointer;
        opacity: 0.7;
        transition: opacity .115s ease-out;

        :deep(span) {
            &.social-icon {
                float: left;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 25px;
                height: 50px;
                margin-right: 5px;


                svg {
                    color: $color-primary;
                    height: 100%;
                    width: 100%;
                }
            }
        }

        &:hover {
            opacity: 1;
        }
    }
</style>