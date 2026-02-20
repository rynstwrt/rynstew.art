<script setup>
import "./App.scss";
import { onMounted } from "vue";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import particlesConfig from "./assets/json/particles-config.json";
import { createTimeline, splitText, stagger } from "animejs";
import LandingPage from "./views/LandingPage.vue";
import RynFooter from "./components/RynFooter.vue";
import Project from "./components/Project.vue";


const PLACEHOLDER_MODE = true;
const PLACEHOLDER_MODE_ALLOWED = ["#bg-particles", "#landing *:not(#down-chevron-container)", "#landing"]


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

    if (PLACEHOLDER_MODE) {
        const sel = `#app *:not(${PLACEHOLDER_MODE_ALLOWED.join()})`;
        document.querySelectorAll(sel)
                .forEach(el => el.remove());
    }
});
</script>



<template>
    <!-- BACKGROUND PARTICLES -->
    <div id="bg-particles" ref="bg-particles"></div>


    <!-- LANDING PAGE SECTION -->
    <LandingPage showArrow="true" />


    <section id="code">
        <h2>Code</h2>

        <Project
            title="Chord Progression Generator"
            desc="Generate chord progressions."
            url="https://quickbin.app"
            repo="https://github.com/rynstwrt/quickbin.app"
            image="ChordProgressionGenerator.jpg" />

        <Project
            title="Quickbin"
            desc="Like Pastebin, but quicker. Saved quickbins are read-only."
            url="https://quickbin.app"
            repo="https://github.com/rynstwrt/quickbin.app"
            image="Quickbin.png" />

        <Project
            title="EditorPerRepo"
            desc="Description"
            url="https://"
            repo="https://github.com/rynstewart/EditorPerRepoElectron" />

        <Project
            title="DomainDissidence"
            desc="Description"
            url="https://domaindissidence.online"
            repo="https://github.com/DomainDissidence" />

        <Project
            title="PixelblazeDesktop"
            desc="Description"
            url=""
            repo="https://github.com/rynstwrt/Pixelblaze-Desktop" />
    </section>


    <!--<section id="websites">-->
    <!--    <h2>Web Development</h2>-->

    <!--    <Project-->
    <!--        title="offtheblock.lol"-->
    <!--        desc="A website design for a Minecraft server."-->
    <!--        url="https://offtheblock.lol"-->
    <!--        repo="https://github.com/rynstwrt/offtheblock.lol"-->
    <!--        image="OffTheBlock.jpg" />-->

    <!--    <Project-->
    <!--        title="CSS Animation Gallery"-->
    <!--        desc="Description"-->
    <!--        url="https://"-->
    <!--        repo="https://github.com/" />-->

    <!--    <Project-->
    <!--        title="ilovefoxes.org"-->
    <!--        desc="Description"-->
    <!--        url="https://ilovefoxes.org"-->
    <!--        repo="https://github.com/rynstwrt/ilovefoxes.org" />-->
    <!--</section>-->



    <!--<section id="design">-->
    <!--    <h2>Design</h2>-->
    <!--</section>-->


    <!--&lt;!&ndash; FOOTER &ndash;&gt;-->
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
}


body {
    background-color: $color-background;
    color: $color-light;

    &::before {
        content: "";
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-size: cover;
        z-index: -2;
        background: url("./assets/img/banner.jpg") no-repeat fixed center;
        opacity: 0.3;
        filter: brightness(30%) contrast(105%);
    }
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
