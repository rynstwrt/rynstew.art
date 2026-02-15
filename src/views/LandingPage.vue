<script setup>
import DownChevron from "../components/DownChevron.vue";
import IconButton from "../components/IconButton.vue";

import LinkedInIcon from "../assets/icon/social/linkedin.svg?raw";
import GitHubIcon from "../assets/icon/social/github.svg?raw";
import CameraIcon from "../assets/icon/social/camera.svg?raw";
import InstagramIcon from "../assets/icon/social/instagram.svg?raw";
import ResumeIcon from "../assets/icon/social/resume.svg?raw";

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

            <p id="byline">Artist and full-stack developer in Dallas, Texas.</p>

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
            font-weight: 300;
            margin-bottom: 5px;
            letter-spacing: 4px;
            color: $color-primary;
            font-size: 3rem;
            text-transform: uppercase;
            line-height: 3.2rem;

            //@extend .victor-mono-font;
            //@include open-sans-font;
            //@extend .roboto-font;



            :deep(span) {
                font-size: unset;
                font-weight: unset;
                line-height: unset;
            }
        }

        #byline { }

        #social-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: auto;
            grid-gap: 8px;
            margin-top: 30px;

            #resume-btn {
                grid-column: auto / span 2;
                border-color: $color-primary;

                :deep(.social-text) {
                    letter-spacing: 0;
                    //color: $color-primary;
                    //font-weight: 500;
                }
            }
        }
    }
}
</style>