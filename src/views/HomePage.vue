<script setup>
import "./HomePage.scss";
import LandingPage from "./LandingPage.vue";
import RynFooter from "../components/RynFooter.vue";
import { onMounted } from "vue";
import { createTimeline, splitText, stagger } from "animejs";

const PLACEHOLDER_MODE = false;
const PLACEHOLDER_MODE_ALLOWED = ["#bg-particles", "#landing *:not(#down-chevron-container)", "#landing"]



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
    createNameAnimation();

    if (PLACEHOLDER_MODE) {
        const sel = `#app *:not(${PLACEHOLDER_MODE_ALLOWED.join()})`;
        document.querySelectorAll(sel)
                .forEach(el => el.remove());
    }
});
</script>

<template>
    <!-- LANDING PAGE SECTION -->
    <LandingPage showArrow="true" />


    <!--<PDFPage url="/RynStewartResume.pdf" title="asdf" />-->


    <!--<section id="code">-->
    <!--    <h2>Code</h2>-->

    <!--    <Project-->
    <!--        title="Chord Progression Generator"-->
    <!--        desc="Generate chord progressions."-->
    <!--        url="https://quickbin.app"-->
    <!--        repo="https://github.com/rynstwrt/quickbin.app"-->
    <!--        image="ChordProgressionGenerator.jpg" />-->

    <!--    <Project-->
    <!--        title="Quickbin"-->
    <!--        desc="Like Pastebin, but quicker. Saved quickbins are read-only."-->
    <!--        url="https://quickbin.app"-->
    <!--        repo="https://github.com/rynstwrt/quickbin.app"-->
    <!--        image="Quickbin.png" />-->

    <!--    <Project-->
    <!--        title="EditorPerRepo"-->
    <!--        desc="Description"-->
    <!--        url="https://"-->
    <!--        repo="https://github.com/rynstewart/EditorPerRepoElectron" />-->

    <!--    <Project-->
    <!--        title="DomainDissidence"-->
    <!--        desc="Description"-->
    <!--        url="https://domaindissidence.online"-->
    <!--        repo="https://github.com/DomainDissidence" />-->

    <!--    <Project-->
    <!--        title="PixelblazeDesktop"-->
    <!--        desc="Description"-->
    <!--        url=""-->
    <!--        repo="https://github.com/rynstwrt/Pixelblaze-Desktop" />-->
    <!--</section>-->


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

    <!--
    Source - https://stackoverflow.com/a/7044015
    Posted by Batfan, modified by community. See post 'Timeline' for change history
    Retrieved 2026-02-20, License - CC BY-SA 4.0
    -->

    <!--<embed src="https://drive.google.com/viewerng/-->
    <!--viewer?embedded=true&url=https://drive.google.com/file/d/1Cmi0H41IBApo4fqS98U4PKQD_XmzAVc3/view?usp=sharing" width="500" height="375">-->


    <!--<pdf-js-vue title="aasdf" pdfUrl="./RynStewartResume.pdf" />-->

    <!--<PDFPage pdfPath="../public/RynStewartResume.pdf" />-->

    <!--<section id="design">-->
    <!--    <h2>Design</h2>-->
    <!--</section>-->


    <!--&lt;!&ndash; FOOTER &ndash;&gt;-->
    <RynFooter />
</template>

<style scoped lang="scss">

</style>