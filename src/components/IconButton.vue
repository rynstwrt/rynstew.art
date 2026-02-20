<script setup>
const props = defineProps([
    "icon",
    "url",
    "text"
]);
</script>



<template>
    <a :href="props.url" target="_blank" >
        <div class="icon-container" v-html="props.icon"></div>
        <p v-if="props.text">{{ props.text }}</p>
    </a>
</template>



<style lang="scss" scoped>
    a {
        //height: 40px;
        //display: block;
        border: 1px solid orange;
        display: flex;
        align-items: center;
        //max-width: fit-content;
        //width: fit-content;
        //height: 100%;
        //height: auto;
        //padding: 5px 10px;
        border: 1px solid rgba($color-light-2, 0.75);
        //border-radius: 2px;
        padding: 5px 7px;
        //height: 25px;
        //height: fit-content;


        .icon-container {
            //height: 40px;
            //width: auto;
            //max-height: 100%;
            //width: auto;
            //color: red;
            width: 25px;
            height: 25px;
            padding: 2px;
            color: $color-primary;

            :deep(svg) {
                //width: 100%;
                height: 100%;
                width: auto;
            }
        }

        p {
            color: $color-light;
            font-weight: 200;
            //font-size: 0.85rem;
            font-size: 0.9rem;
            letter-spacing: 1px;
            margin-left: 5px;
            text-wrap: nowrap;
        }

    }
</style>