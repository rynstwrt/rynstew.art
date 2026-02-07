<script setup>
import PortfolioGallery from "@/components/PortfolioGallery.vue";

const props = defineProps([
    'title',
    'type'
]);
</script>

<template>
<section class="portfolio-section">
    <h3 class="portfolio-section-title">{{ props.title }}</h3>

    <PortfolioGallery title="Designs of the letter R" />
</section>
</template>


<style lang="scss" scoped>
@use '@/css/constants' as *;

.portfolio-section {
    //width: 100%;

    .portfolio-section-title {
        text-transform: uppercase;
        font-family: $font-2;
        letter-spacing: 2px;
        //font-size: .9rem;
        font-size: 1.2rem;
        font-weight: 400;
        margin-bottom: 5px;
        color: $color-primary;
    }
}
</style>