<script setup>
// import PortfolioPage from "./PortfolioPage.vue";

// const props = defineProps({
//     active: { default: "art" }
// });
// import PortfolioPage from "./PortfolioPage.vue";
// import { onMounted } from "vue";



</script>



<template>
    <div id="portfolio">
        <div id="tabs-row">
            <button id="art-tab">Art Portfolio</button>
            <button id="tech-tab">Tech Portfolio</button>
        </div>

        <div id="portfolio-page-container">

            <slot id='Math.random() > 0.5 ? "asdfasdf" : "asdfasdf"' />

            <!--<portfolio-page v-for="test in this.$children">-->
            <!--    <p>{{test}}</p>-->
            <!--</portfolio-page>-->

            <!--<slot :active="mememe"/>-->
            <!--<portfolio-page>-->
            <!--    <h3>asdf</h3>-->
            <!--</portfolio-page>-->
            <!--<slot :name="portfolio" />-->
            <!--<slot :ref=slotRef />-->
            <!--<slot v-if="$slots.default.id==='art-portfolio'">-->
            <!--    asf-->
            <!--</slot>-->
        </div>
    </div>
</template>



<!--<script>-->
<!--document.querySelectorAll("#tabs-row button").forEach(btn => {-->
<!--    btn.addEventListener("click", () => {-->
<!--        const portfolioId = btn.id.replaceAll("-tab", "");-->

<!--        document.querySelectorAll("#portfolio-content .active")-->
<!--                .forEach(active => active.classList.remove("active"));-->

<!--        btn.classList.add("active");-->

<!--        const portfolio = document.querySelector(`.portfolio#${portfolioId}`);-->
<!--        portfolio.classList.add("active");-->
<!--    });-->
<!--});-->

<!--document.querySelector("button.active").click();-->
<!--</script>-->



<!--<style lang="scss">-->
<style lang="scss" scoped>
//@use "../css/partials/_colors.scss" as *;

//$border-radius: 5px;
#portfolio {
    width: 100%;
    display: flex;
    flex-direction: column;
    //border-radius: $border-radius;
    //border: 1px solid $color-primary;
    height: fit-content;
    background-color: rgba($color-surface, 0.95);
    //overflow: hidden;

    #tabs-row {
        display: none;
        //display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: rgba($color-surface, 0.95);

        button {
            flex: 1;
            border: none;
            border-radius: 3px;
            padding: 7px 0;
            font-weight: 500;
            letter-spacing: 0.5px;

            &.active {
                color: $color-background;
                background-color: $color-primary;
                font-weight: 600;
            }

            $active-box-shadow-offset: 10px;
            $active-box-shadow-style: 0 6px rgba(black, 0.08);
            &:first-of-type {
                //border-top-left-radius: $border-radius;

                &.active {
                    box-shadow: $active-box-shadow-offset $active-box-shadow-style;
                }
            }

            &:last-of-type {
                //border-top-right-radius: $border-radius;

                &.active {
                    box-shadow: -$active-box-shadow-offset $active-box-shadow-style;
                }
            }

            &:not(:first-of-type,:last-of-type) {
                border-left: none;
                border-right: none;
            }

            &:not(.active) {
                opacity: 0.6;
            }
        }
    }

    #portfolio-page-container {
        border: 3px solid green;
        display: flex;
        flex-direction: column;
        //align-items: flex-end;

        :deep(.portfolio-page) {
            padding: 12px;
            flex: 1;
            //min-height: 100%;
            border: 1px solid blue;

            &:not(.active) {
                //display: none;
            }
        }
    }
}

</style>