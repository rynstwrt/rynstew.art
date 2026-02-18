<script setup>
import "./LandingPage.scss";

import DownChevron from "../components/DownChevron.vue";
import IconButton from "../components/IconButton.vue";

import LinkedInIcon from "../assets/icon/linkedin.svg?raw";
import GitHubIcon from "../assets/icon/github.svg?raw";
import CameraIcon from "../assets/icon/camera.svg?raw";
import InstagramIcon from "../assets/icon/instagram.svg?raw";
import ResumeIcon from "../assets/icon/resume.svg?raw";


const SOCIALS = [
    { text: 'GitHub', icon: GitHubIcon, url: 'https://github.com/rynstwrt' },
    { text: 'LinkedIn', icon: LinkedInIcon, url: 'https://linkedin.com/in/rynstwrt' },
    { text: 'Instagram', icon: InstagramIcon, url: 'https://unsplash.com/rynstwrt' },
    { text: 'Unsplash', icon: CameraIcon, url: 'https://instagram.com/rynstwrt' }
];


function openResume() {
    window.open('/RynStewartResume.pdf', '_blank');
}
</script>



<template>
    <section id="landing">
        <main>
            <h1>Ryn<br>Stewart</h1>

            <p id="byline">Artist and full-stack developer in<br />Dallas, Texas.</p>

            <div id="social-grid">
                <IconButton
                    v-for="social in SOCIALS"
                    :text="social.text"
                    :icon='social.icon.replace(/(?=.*?)>/s, ` preserveAspectRatio="none">`)'
                    :url="social.url" />

                <IconButton
                    id="resume-btn"
                    text="View Resume"
                    :icon=ResumeIcon
                    :center="true"
                    @click="openResume"
                />
            </div>
        </main>

        <!--<DownChevron />-->
    </section>
</template>