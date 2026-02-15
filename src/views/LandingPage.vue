<script setup>
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


function onC() {
    window.open('/RynStewartResume.pdf');
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
                    @click="onC"
                />
            </div>
        </main>

        <DownChevron />
    </section>
</template>



<style lang="scss" scoped>
@use "sass:list";
@use "sass:meta";

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
            font-weight: 500;
            margin-bottom: 5px;
            letter-spacing: 4px;
            color: $color-primary;
            //font-size: 3rem;
            font-size: 4rem;
            text-transform: uppercase;
            //line-height: 3.25rem;
            //line-height: 3.15rem;
            //line-height: 4.3rem;
            //line-height: 4lh;
            line-height: 3.1lh;
            @include default-font("header");

            :deep(span) {
                //line-height: unset;
                //font-size: unset;
                //font-weight: unset;
                //line-height: unset;
                font-size: inherit;
                font-weight: inherit;
                //line-height: inherit;
                font-family: inherit;
            }
        }

        #byline {
            @include source-code-pro-font;
            font-size: 1.07rem;
            font-weight: 300;
            line-height: 1.125lh;
            //letter-spacing: 1px;
            //letter-spacing: 2px;
            //margin-top: 5px;
        }

        #social-grid {
            display: grid;
            //grid-template-columns: repeat(3, 1fr);
            grid-template-columns: repeat(3, auto);
            grid-auto-rows: auto;
            grid-gap: 8px;
            margin-top: 30px;
            margin-right: 70px;
            width: 100%;

            @media (min-width: 500px) {
                margin-right: 80px;
            }

            #resume-btn {
                grid-column: auto / span 2;
                border-color: $color-primary;

                :deep(.social-text) {
                    //color: $color-primary;
                }
            }
        }
    }
}
</style>