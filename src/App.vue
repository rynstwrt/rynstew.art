<script setup>
import RynFooter from "./components/RynFooter.vue";
import { onMounted } from "vue";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import particlesConfig from "./assets/json/particles-config.json";
import { createTimeline, splitText, stagger } from "animejs";
import LandingPage from "./views/LandingPage.vue";


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
        // words: { wrap: 'clip' },
        // chars: { wrap: 'clip' }
        words: true,
        chars: true
    });


    createTimeline({
        defaults: {
            duration: 600,
            // ease: "inOutQuad"
            ease: 'inOut', // ease applied between each keyframes if no ease defined
            // playbackEase: 'ouIn(5)', // ease applied accross all keyframes
            // playbackEase: "inCirc"
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
</script>



<template>
    <!-- BACKGROUND PARTICLES -->
    <div id="bg-particles" ref="bg-particles"></div>


    <!-- LANDING PAGE SECTION -->
    <LandingPage />


    <!-- EDUCATION SECTION -->
    <section id="education">
        <div class="section-content">
            <h2>Education</h2>
            <h3>The University of Texas at Dallas</h3>
            <p>B.A. of Arts, Technology, and Emerging Communications</p>
        </div>
    </section>


    <!-- DESIGN SECTION -->



    <section id="websites">
        <div class="section-content">
            <h2>Websites</h2>



            <div class="item">
                <h3>ilovefoxes.org</h3>
                <p>A website</p>
            </div>
        </div>
    </section>


    <section id="design">
        <div class="section-content">
            <h2>Design</h2>
        </div>
    </section>


    <!-- TECHNOLGOY SECTION -->
    <section id="technology">
        <div class="section-content">
            <h2>Code</h2>
        </div>
    </section>


    <!-- FOOTER -->
    <RynFooter />
</template>




<!--||     GLOBAL STYLES     || -->
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


body {
    background-color: $color-background;
    color: $color-light;
}


a {
    color: inherit;
    text-decoration: none;
}
</style>




<!--||     SCOPED STYLES     || -->
<style lang="scss" scoped>
#bg-particles {
    //position: fixed;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    //opacity: 0.08;
    opacity: .75;
    pointer-events: none;
    width: 100%;
    height: 100%;
    mix-blend-mode: overlay;
    //background-blend-mode: overlay;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -2;
        background-size: cover;
        background: url("./assets/img/banner.jpg") no-repeat fixed center;
        //mix-blend-mode: overlay;
        //background-blend-mode: overlay;
        opacity: 0.7;
        filter: blur(6px) contrast(100%);
        //overflow: hidden;
    }
}


section {
    padding: 45px 15px;
}


section:not(#landing) {
    display: flex;
    //flex-direction: column;
    //justify-content: center;
    place-self: center;

    .section-content {
        background-color: $color-surface;
        //width: fit-content;
        width: 600px;
        padding: 15px;
        //place-self: center;


        h2 {
            color: $color-primary;
            font-size: 1.5rem;
            font-weight: 100;
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 300;
        }

        p {
            font-weight: 100;
            color: $color-light-2;
        }
    }
}
</style>