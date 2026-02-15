<script setup>
import DownChevron from "../components/DownChevron.vue";
import IconButton from "../components/IconButton.vue";

import LinkedInIcon from "../assets/icon/social/linkedin.svg?raw";
import GitHubIcon from "../assets/icon/social/github.svg?raw";
import CameraIcon from "../assets/icon/social/camera.svg?raw";

// function onSocialButtonClick(url) {
//     console.log(url.currentTarget, this)
// }
</script>


<template>
    <section id="landing">
        <main>
            <h1>Ryn<br />Stewart</h1>

            <p id="byline">Artist and full-stack developer in Dallas, Texas.</p>

            <div id="social-grid">
                <IconButton text="LinkedIn" :icon=LinkedInIcon />
                <IconButton text="GitHub" :icon=GitHubIcon />
                <IconButton text="Unsplash" :icon=CameraIcon />
                <IconButton
                    v-for="social in [
                        { text: 'LinkedIn', icon: LinkedInIcon, url: 'https://linkedin.com/in/rynstwrt' }
                    ]"
                    :text="social.text"
                    :icon="social.icon"
                    :url="social.url" />
                    <!--@click="onSocialButtonClick" />-->
                    <!--v-bind="{ url: social.url ? social.url : null }" />-->
                    <!--:url=getSocialURL(social) />-->
                    <!--v-bind="getSocialURL"-->
            </div>
        </main>

        <DownChevron />
    </section>
</template>



<style lang="scss" scoped>
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
            @include set-font($header-font);
            font-size: 3rem;
            text-transform: uppercase;
            line-height: 3.2rem;

            :deep(span) {
                font-size: unset;
                font-weight: unset;
                line-height: unset;
            }
        }

        #byline {
            //margin-top: 0;
        }

        #social-grid {
            display: grid;
            grid-column-gap: 7px;
            grid-template-columns: repeat(3, 1fr);
            place-self: center;
            margin-top: 30px;
        }
    }
}
</style>