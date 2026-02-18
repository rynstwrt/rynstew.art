<script setup>
import { onMounted } from "vue";


const props = defineProps(["active"]);


onMounted(() => {
    // console.log(this.$props);
});
</script>



<template>
    <div class="portfolio-page">
        <!--{{ expectedProps() }}-->
        <!--{{ this.$props.active }}-->
        <slot />
    </div>
</template>