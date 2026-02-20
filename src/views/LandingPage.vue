<script setup>
import "./LandingPage.scss";

import DownChevron from "../components/DownChevron.vue";
import IconButton from "../components/IconButton.vue";
import LinkedInIcon from "../assets/icon/linkedin.svg?raw";
import GitHubIcon from "../assets/icon/github.svg?raw";
import ResumeIcon from "../assets/icon/resume.svg?raw";

const props = defineProps(["showArrow"]);
</script>



<template>
    <section id="landing">
        <main>
            <h1>Ryn<br>Stewart</h1>

            <p id="byline">Artist and full-stack developer in<br />Dallas, Texas.</p>

            <div id="links-container">
                <IconButton
                    :icon="LinkedInIcon"
                    url="https://linkedin.com/in/rynstwrt" />

                <IconButton
                    :icon="GitHubIcon"
                    url="https://github.com/rynstwrt" />

                <IconButton
                    id="portfolio-btn"
                    :icon="ResumeIcon"
                    url="/portfolio"
                    text="Design Portfolio"
                    useRouter="true" />

                <IconButton
                    id="resume-btn"
                    :icon="ResumeIcon"
                    url="/resume"
                    text="View Resumé"
                    useRouter="true" />

                <!--<IconButton-->
                <!--    id="resume-btn"-->
                <!--    :icon="ResumeIcon"-->
                <!--    url="/resume"-->
                <!--    text="View "-->

                <!--<IconButton-->
                <!--    id="portfolio-btn"-->
                <!--    :icon="ResumeIcon"-->
                <!--    url="/RynStewartPortfolio.pdf"-->
                <!--    text="Design Portfolio" />-->

                <!--<IconButton-->
                <!--    id="resume-btn"-->
                <!--    :icon="ResumeIcon"-->
                <!--    url="/RynStewartResume.pdf"-->
                <!--    text="Resumé" />-->
            </div>
        </main>

        <DownChevron v-if="showArrow==='true'" />
    </section>
</template>