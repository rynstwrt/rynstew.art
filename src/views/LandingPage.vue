<script setup>
import "./LandingPage.scss";

import DownChevron from "../components/DownChevron.vue";
import IconButton from "../components/IconButton.vue";

import LinkedInIcon from "../assets/icon/linkedin.svg?raw";
import GitHubIcon from "../assets/icon/github.svg?raw";
import UnsplashIcon from "../assets/icon/unsplash.svg?raw";
import ResumeIcon from "../assets/icon/resume.svg?raw";
</script>



<template>
    <section id="landing">
        <main>
            <h1>Ryn<br>Stewart</h1>

            <p id="byline">Artist and full-stack developer in<br />Dallas, Texas.</p>

            <div id="links-container">

                <IconButton
                    :icon="GitHubIcon"
                    text="GitHub"
                    url="https://github.com/rynstwrt" />

                <IconButton
                    :icon="LinkedInIcon"
                    text="LinkedIn"
                    url="https://linkedin.com/in/rynstwrt" />

                <!--<IconButton-->
                <!--    :icon="UnsplashIcon"-->
                <!--    url="https://unsplash.com/rynstwrt" />-->

                <div style="flex-basis: 100%; height: auto; width: 0;"></div>

                <IconButton
                    id="resume-button"
                    :icon="ResumeIcon"
                    url="/RynStewartResume.pdf"
                    text="Resumé" />

                <IconButton
                    id="portfolio-button"
                    :icon="ResumeIcon"
                    url="/RynStewartPortfolio.pdf"
                    text="Design Portfolio" />


                <!--<IconButton-->
                <!--    v-for="social in SOCIALS"-->
                <!--    :text="social.text"-->
                <!--    :icon='social.icon.replace(/(?=.*?)>/s, ` preserveAspectRatio="none">`)'-->
                <!--    :url="social.url" />-->

                <!--<IconButton-->
                <!--    id="resume-btn"-->
                <!--    text="View Resume"-->
                <!--    :icon=ResumeIcon-->
                <!--    :center="true"-->
                <!--    @click="openResume"-->
                <!--/>-->
            </div>


            <!--<div id="resume-portfolio-buttons">-->
            <!--    <TextIconButton-->
            <!--        :icon=ResumeIcon-->
            <!--        text="View Resume"-->
            <!--        url="/RynStewartResume.pdf"-->
            <!--    />-->

            <!--    <TextIconButton-->
            <!--        :icon=ResumeIcon-->
            <!--        text="View Portfolio"-->
            <!--        url="/RynStewartPortfolio.pdf"-->
            <!--    />-->
            <!--</div>-->



        </main>

        <!--<DownChevron />-->
    </section>
</template>