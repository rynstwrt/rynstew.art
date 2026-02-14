<script setup>
import { defineAsyncComponent } from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
});

const icon = defineAsyncComponent(() => import(`../assets/icon/social/${props.name}`));
</script>



<template>
    <component :is="icon" />
    <!--<icon :name=name />-->
</template>
