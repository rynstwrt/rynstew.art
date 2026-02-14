<script setup>
// import RynButton from "../components/RynButton.vue";
import DownChevron from "../components/DownChevron.vue";
import Icon from "../components/Icon.vue";
// import InfoGridEntry from "../components/InfoGridEntry.vue";


const landingLinks = [
    { name: "GitHub", url: "https://github.com/rynstwrt", icon: "github.svg" },
    { name: "GitHub", url: "https://github.com/rynstwrt", icon: "github.svg" },
    { name: "GitHub", url: "https://github.com/rynstwrt", icon: "github.svg" },
    { name: "GitHub", url: "https://github.com/rynstwrt", icon: "github.svg" },
    { name: "GitHub", url: "https://github.com/rynstwrt", icon: "github.svg" },
    { name: "GitHub", url: "https://github.com/rynstwrt", icon: "github.svg" },
];

</script>



<template>
    <!-- LANDING SECTION -->
    <section id="landing">
        <main>
            <h1>Ryn<br />Stewart</h1>
            <!--<h1><span>Ryn</span>Stewart</h1>-->
            <p id="byline">Artist & Full Stack Developer.</p>



            <div id="info-grid">
                <a :href=linkData.url class="info-grid-entry" v-for="linkData of landingLinks">
                    <Icon :name=linkData.icon />
                    <p>{{ linkData.name }}</p>
                </a>
            </div>


            <!--    <InfoGridEntry-->
            <!--        label="GitHub"-->
            <!--        iconUrl="@/assets/icon/social/github.svg" />-->

            <!--    <InfoGridEntry-->
            <!--        label="GitHub"-->
            <!--        iconUrl="@/assets/icon/social/github.svg" />-->

            <!--    <InfoGridEntry-->
            <!--        label="GitHub"-->
            <!--        iconUrl="@/assets/icon/social/github.svg" />-->

            <!--    <InfoGridEntry-->
            <!--        label="GitHub"-->
            <!--        iconUrl="@/assets/icon/social/github.svg" />-->

            <!--    <InfoGridEntry-->
            <!--        label="GitHub"-->
            <!--        iconUrl="@/assets/icon/social/github.svg" />-->

            <!--    <InfoGridEntry-->
            <!--        label="GitHub"-->
            <!--        iconUrl="@/assets/icon/social/github.svg" />-->



                <!--<InfoGridEntry>-->
                    <!--<p></p>-->
                <!--</InfoGridEntry>-->

            <!--    <InfoGridEntry>-->
            <!--        <p>22222</p>-->
            <!--    </InfoGridEntry>-->

            <!--    <InfoGridEntry>-->
            <!--        <p>333333</p>-->
            <!--    </InfoGridEntry>-->

            <!--    <InfoGridEntry>-->
            <!--        <p>11111</p>-->
            <!--    </InfoGridEntry>-->

            <!--    <InfoGridEntry>-->
            <!--        <p>22222</p>-->
            <!--    </InfoGridEntry>-->

            <!--    <InfoGridEntry>-->
            <!--        <p>333333</p>-->
            <!--    </InfoGridEntry>-->
            <!--</div>-->
        </main>


        <DownChevron />
    </section>
</template>



<style lang="scss" scoped>
section#landing {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    main {
        padding: 0 15px;
        display: flex;
        flex-direction: column;
        max-width: 600px;

        h1 {
            font-weight: 300;
            margin-bottom: 5px;
            letter-spacing: 4px;
            color: $color-primary;
            @include set-font($header-font);
            font-size: 3rem;
            text-transform: uppercase;
            line-height: 3.2rem;

            :deep(span) {
                font-size: unset;
                font-weight: unset;
                line-height: unset;
            }
        }

        #info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;

            a.info-grid-entry {
                display: flex;
                align-items: center;
                color: inherit;
                text-decoration: inherit;
                border: 1px solid green;

                svg {
                    //height: 10px;
                    //width: 10px;
                    max-width: 25px;
                }

                p {

                }
            }
        }
    }
}
</style>