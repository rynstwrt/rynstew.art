<script setup>

import PortfolioSection from "@/components/PortfolioSection.vue";
</script>

<template>
    <main>
        <h2>Art Portfolio</h2>

        <PortfolioSection
            title="Typography"
            type="gallery">
            <p>asdf</p>
        </PortfolioSection>
    </main>
</template>


<style lang="scss" scoped>
@use "@/css/constants" as *;

main {
    background-color: $color-surface;
    padding: 20px;

    h2 {
        font-size: 2rem;
        text-align: center;
        margin: 0 50px;
    }
}
</style>