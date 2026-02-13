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



<style lang="scss" scoped>
@use "../css/partials/_colors.scss" as *;

</style>