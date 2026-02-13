<script setup>
const props = defineProps({
    url: {
        type: String
    },
    type: {
        type: String,
        default: "text"
    },
    scrollto: {
        type: String
    }
});

const classNames = `ryn-btn ryn-btn-${props.type}`;

function onClick() {
    if (props.scrollto)
        return document.querySelector(props.scrollto).scrollIntoView();

    if (props.url)
        return window.open(props.url, "_blank");
}
</script>



<template>
    <button :class=classNames @click="onClick">
        <span v-if='props.type==="icon"' class="icon-container">
            <slot />
        </span>

        <slot v-else/>
    </button>
</template>



<style lang="scss" scoped>
@use "../css/partials/_colors.scss" as *;

.ryn-btn {
    border-radius: 5px;
    background-color: transparent;
    color: $color-primary;
    border: 1px solid $color-surface-2;
    text-transform: uppercase;

    &.ryn-btn-text {
        $transition: 0.1s ease-out;
        transition: background-color $transition,
            color $transition,
            font-weight $transition;

        padding: 5px 15px;
        border: 1px solid $color-primary;
        letter-spacing: 1px;

        &:hover {
            color: $color-background;
            background-color: $color-primary;
            font-weight: 600;
        }
    }


    &.ryn-btn-icon {
        padding: 6px;
        transition: opacity 0.1s ease-out;
        opacity: 0.75;
        flex-direction: column;

        &:hover {
            opacity: 1;
        }

        .icon-container {
            display: flex;
            place-items: center;
            max-height: 25px;
            aspect-ratio: 1;

            & > * {
                background-color: blue;
            }

            svg {
                min-height: 100%;
                width: auto;
                color: $color-light;
                stroke-width: 1px;
            }
        }
    }
}
</style>