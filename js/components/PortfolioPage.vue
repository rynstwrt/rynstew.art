<script setup>
</script>



<script>
export default {
    // mounted() {
        // console.log("page mounted!");
        // console.log(this.$parent.$el);
        // console.log(this.$slots.default()[0]);

        // console.log(this.$parent.$props);
    // },
    // computed: {
    //     expectedProps() {
    //         return this.$vnode;
        // }
    // }
    props: ["active"],
    mounted() {
        console.log(this.$props.active)
    }
}


</script>



<template>
    <div class="portfolio-page">
        <!--{{ expectedProps() }}-->
        {{ this.$props.active }}
        <slot />
    </div>
</template>




<style lang="scss" scoped>
@use "../../css/partials/_colors.scss" as *;

</style>