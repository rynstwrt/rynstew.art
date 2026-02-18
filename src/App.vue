<script setup>
import "./App.scss";
import { onMounted } from "vue";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import particlesConfig from "./assets/json/particles-config.json";
import { createTimeline, splitText, stagger } from "animejs";
import LandingPage from "./views/LandingPage.vue";
import RynFooter from "./components/RynFooter.vue";
import Website from "./components/Website.vue";


function loadBackgroundParticles() {
    (async engine => {
        await loadSlim(engine);

        await engine.load({
            id: "bg-particles",
            options: particlesConfig
        });
    })(tsParticles);
}


function createNameAnimation() {
    const { words, chars } = splitText("#landing h1", {
        words: true,
        chars: true
    });


    createTimeline({
        defaults: {
            duration: 600,
            ease: 'inOut', // ease applied between each keyframes if no ease defined
        },
        delay: 150,
    })
    .add(words, {
        y: "-=0.3lh",
        ease: 'outCubic'
    }, stagger(100))
    .add(chars, {
        duration: 650,

        scale: [
            { to: 1.123, ease: "in" },
            { to: 1, ease: "out" }
        ],

        rotateX: {
            to: "-1turn",
            ease: "inOutSine",
            delay: stagger(35),
        }
    }, 0)
    .add(words, {
        y: 0,
        ease: 'outQuad',
        duration: 400
    }, stagger(150, { reversed: true }));
}


onMounted(() => {
    loadBackgroundParticles();
    createNameAnimation();
});



// let allPortfolioAssets = Object.values(import.meta.glob("./assets/portfolio/**/*.*", {
//     eager: true,
//     query: "?url",
//     import: "default"
// }));

// allPortfolioAssets = allPortfolioAssets.map(src => src.replaceAll("/src/assets/portfolio/", ""))
// console.log(allPortfolioAssets)


const allWebsiteAssets = Object.values(import.meta.glob("/src/assets/portfolio/websites/**/*.*", {
    eager: true,
    query: "?url",
    import: "default"
}));

function getWebsiteImagesFromDir(dir) {
    return allWebsiteAssets.filter(url => url.startsWith("/src/assets/portfolio/websites/" + dir));
}


const chordProgImages = getWebsiteImagesFromDir("ChordProgressionGenerator");
console.log(chordProgImages);

</script>



<template>
    <!-- BACKGROUND PARTICLES -->
    <div id="bg-particles" ref="bg-particles"></div>


    <!-- LANDING PAGE SECTION -->
    <LandingPage />


    <section id="websites">
        <h2>Websites</h2>

        <Website
            title="Chord Progression Generator"
            desc="Generate chord progressions."
            url="https://quickbin.app"
            repo="https://github.com/rynstwrt/quickbin.app"
            :imageURLs="getWebsiteImagesFromDir('ChordProgressionGenerator')"
        />

        <Website
            title="Quickbin"
            desc="Like Pastebin, but quicker. Saved quickbins are read-only."
            url="https://quickbin.app"
            repo="https://github.com/rynstwrt/quickbin.app"
            :imageURLs="getWebsiteImagesFromDir('Quickbin')"
        />

        <Website
            title="offtheblock.lol"
            desc="A website design for a Minecraft server."
            url="https://offtheblock.lol"
            repo="https://github.com/rynstwrt/offtheblock.lol"
            :imageURLs="getWebsiteImagesFromDir('OffTheBlock')"
        />


    </section>




    <!--&lt;!&ndash; EDUCATION SECTION &ndash;&gt;-->
    <!--<section id="education">-->
    <!--    <div class="section-content">-->
    <!--        <h2>Education</h2>-->
    <!--        <h3>The University of Texas at Dallas</h3>-->
    <!--        <p>B.A. of Arts, Technology, and Emerging Communications</p>-->
    <!--    </div>-->
    <!--</section>-->


    <!--&lt;!&ndash; DESIGN SECTION &ndash;&gt;-->






    <!--<section id="design">-->
    <!--    <div class="section-content">-->
    <!--        <h2>Design</h2>-->
    <!--    </div>-->
    <!--</section>-->


    <!--&lt;!&ndash; TECHNOLGOY SECTION &ndash;&gt;-->
    <!--<section id="technology">-->
    <!--    <div class="section-content">-->
    <!--        <h2>Code</h2>-->
    <!--    </div>-->
    <!--</section>-->


    <!-- FOOTER -->
    <RynFooter />
</template>



<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    @include default-font("content");
    font-style: normal;
    //font-size: 14px;
    font-size: 16px;
    font-weight: normal;
}


html, body, #app {
    height: 100%;
}

#app {
    width: 100%;
    height: 100%;
    //display: flex;
    //flex-direction: column;
    //justify-content: center;
    //align-items: center;
}


body {
    background-color: $color-background;
    color: $color-light;
}


a {
    color: inherit;
    text-decoration: none;
}
</style>


<style lang="scss" scoped>
.website {
    margin: 20px 0;
}
</style>