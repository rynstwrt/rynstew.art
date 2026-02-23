<script setup>
import LandingPage from "../components/LandingSection.vue";
import { onMounted } from "vue";
import DownChevron from "../components/DownChevron.vue";
import LinkedInIcon from "../assets/icon/linkedin.svg";
import GitHubIcon from "../assets/icon/github.svg";
import ResumeIcon from "../assets/icon/resume.svg";
import IconButton from "../components/IconButton.vue";

const PLACEHOLDER_MODE = true;
const PLACEHOLDER_MODE_ALLOWED = ["#bg-particles", "#threejs-bg", "#landing *:not(#down-chevron-container)", "#landing"]


onMounted(() => {
    if (PLACEHOLDER_MODE) {
        const sel = `#app *:not(${PLACEHOLDER_MODE_ALLOWED.join()})`;
        document.querySelectorAll(sel)
                .forEach(el => el.remove());
    }
});
</script>



<template>
    <LandingPage :showArrow="!PLACEHOLDER_MODE" />
    <!--<section id="landing" class="w-100 h-100 relative flex flex-col justify-center align-center ">-->
    <!--    <main class="px-5 flex flex-col">-->
    <!--        <h1 class="tet-orange-500 font-medium mb-1 text-6xl uppercase">Ryn<br>Stewart</h1>-->

    <!--        <p id="byline">Artist and full-stack developer in<br />Dallas, Texas.</p>-->

    <!--        <div id="links-container">-->
    <!--            <IconButton-->
    <!--                :icon="LinkedInIcon"-->
    <!--                url="https://linkedin.com/in/rynstwrt" />-->

    <!--            <IconButton-->
    <!--                :icon="GitHubIcon"-->
    <!--                url="https://github.com/rynstwrt" />-->

    <!--            <IconButton-->
    <!--                id="portfolio-btn"-->
    <!--                :icon="ResumeIcon"-->
    <!--                url="/portfolio"-->
    <!--                text="Design Portfolio"-->
    <!--                useRouter="true" />-->

    <!--            <IconButton-->
    <!--                id="resume-btn"-->
    <!--                :icon="ResumeIcon"-->
    <!--                url="/resume"-->
    <!--                text="View Resumé"-->
    <!--                useRouter="true" />-->
    <!--        </div>-->
    <!--    </main>-->

    <!--    &lt;!&ndash;<DownChevron v-if="props.showArrow" />&ndash;&gt;-->
    <!--</section>-->
</template>