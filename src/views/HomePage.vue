<script setup>
import { onMounted } from "vue";
import LinkedInIcon from "../assets/icon/linkedin.svg?raw";
import GitHubIcon from "../assets/icon/github.svg?raw";
import ResumeIcon from "../assets/icon/resume.svg?raw";
import DownChevron from "../components/DownChevron.vue";
import IconButton from "../components/IconButton.vue";


const PLACEHOLDER_MODE = true;
const PLACEHOLDER_MODE_ALLOWED = ["#bg-particles", "#threejs-bg", "#landing *:not(#down-chevron-container)", "#landing"]
import { createNameAnimation } from "../js/landing-animation.js";


onMounted(() => {
    if (PLACEHOLDER_MODE) {
        const sel = `#app *:not(${PLACEHOLDER_MODE_ALLOWED.join()})`;
        document.querySelectorAll(sel)
                .forEach(el => el.remove());
    }

    createNameAnimation();
});
</script>



<template>
    <section id="landing">
        <main>
            <h1>Ryn<br>Stewart</h1>

            <p id="byline">Artist and full-stack developer in<br />Dallas, Texas.</p>

            <div id="links-container">
                <IconButton
                    :icon="LinkedInIcon"
                    url="https://www.linkedin.com/in/rynstwrt/" />

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
            </div>
        </main>

        <DownChevron v-if="!PLACEHOLDER_MODE" />
    </section>
</template>


<style lang="css" scoped>
section#landing {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    main {
        padding: 0 20px;
        display: flex;
        flex-direction: column;

        h1 {
            font-weight: 500;
            margin-bottom: 5px;
            letter-spacing: 4px;
            color: var(--color-primary);
            font-size: 4rem;
            text-transform: uppercase;
            line-height: 3.1lh;
            font-family: var(--header-font), sans-serif;

            span {
                font-size: inherit;
                font-weight: inherit;
                font-family: inherit;
            }
        }

        p#byline {
            font-family: "Source Code Pro", monospace;
            font-size: 1.05rem !important;
            font-weight: 300;
            line-height: 1.1lh;

        }


        #links-container {
            gap: 5px;
            margin-top: 17px;
            flex-wrap: wrap;
            width: fit-content;
            display: grid;
            grid-template-columns: auto auto 100%;

            :last-child {
                grid-column-start: 1;
                grid-column-end: 4;
                grid-row: 2;
            }
        }
    }
}
</style>