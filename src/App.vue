<script setup>
import RynButton from "./components/RynButton.vue";
import Portfolio from "./components/Portfolio.vue";
import PortfolioPage from "./components/PortfolioPage.vue";
import DownChevron from "./components/DownChevron.vue";
import RynFooter from "./components/RynFooter.vue";
import { onMounted } from "vue";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import particlesConfig from "./assets/json/particles-config.json";
import { waapi, stagger, splitText, createTimeline, animate } from "animejs";


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
        // words: { wrap: 'clip' },
        // chars: { wrap: 'clip' }
        words: true,
        chars: true
    });


    createTimeline({
        defaults: {
            duration: 600,
            // ease: "inOutQuad"
            ease: 'inOut', // ease applied between each keyframes if no ease defined
            // playbackEase: 'ouIn(5)', // ease applied accross all keyframes
            // playbackEase: "inCirc"
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

    // .add(words, {
    //     y: 0,
    //     duration: 200,
    // })

    .add(words, {
        y: 0,
        ease: 'outQuad',
        duration: 400
    }, stagger(150, { reversed: true }));



    // const wordAnim = {
    //     fontSize: "+=4",
    // };
    // const charAnim = {
    //     color: { to: "#FF00FF" },
    // };
    // createTimeline({
    //     loop: true,
    //     defaults: {
    //         ease: "inOut(3)",
    //         // ease: 'out(3)',
    //         duration: 700,
    //     },
    //     // loopDelay: 300,
    //     alternate: true
    // })
    // // .add(words, wordAnim, 0)
    // // .add(chars, charAnim, 0)
    // // .init();

    // .add(words, {
    //     y: [$el => +$el.dataset.line % 2 ? '100%' : '-100%', '0%'],
    // }, stagger(125))
    // .add(chars, {
    //     y: $el => +$el.dataset.line % 2 ? '100%' : '-100%',
    // }, stagger(10, {from: 'random'}))

    // .add(words, {
    //     color: { to: "#FF0F00" },
    //     loop: 3,
    //     alternate: true,
    // }, stagger(400))
    // .add(chars, {
    //     paddingLeft: [0, 10],
    //     alternate: true,
    //     loop: 3
    // }, 0)

    // .init()
}


onMounted(() => {
    loadBackgroundParticles();
    createNameAnimation();
});
</script>



<template>
    <!-- BACKGROUND PARTICLES -->
    <div id="bg-particles" ref="bg-particles"></div>



    <!-- LANDING SECTION -->
    <section id="landing">
        <main>
            <h1>Ryn<br />Stewart
            </h1>
            <!--<h1><span>Ryn</span>Stewart</h1>-->
            <p id="byline">Artist & Full Stack Developer.</p>


            <div id="landing-links">
                <RynButton type="icon" url="https://github.com/rynstwrt">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </RynButton>

                <RynButton type="icon" url="https://linkedin.com/in/rynstwrt/">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2"
                            y="9"
                            width="4"
                            height="12"></rect>
                        <circle cx="4"
                            cy="4"
                            r="2"></circle>
                    </svg>
                </RynButton>

                <RynButton type="text"
                    id="learn-more-btn"
                    style="width: 100%"
                    scrollto="section:nth-of-type(2)">
                    Learn More
                </RynButton>
            </div>
        </main>


        <DownChevron />
    </section>



    <!-- PORTFOLIO SECTION -->
    <section id="portfolios">
        <Portfolio active="art-portfolio">
            <PortfolioPage id="art-portfolio">
                <h3>page 1</h3>
                <h3>page 1</h3>
                <h3>page 1</h3>
                <h3>page 1</h3>
                <h3>page 1</h3>
                <h3>page 1</h3>
                <h3>page 1</h3>
                <h3>page 1</h3>
            </PortfolioPage>

            <PortfolioPage id="tech-portfolio">
                <h3>page 2</h3>
                <h3>page 2</h3>
                <h3>page 2</h3>
                <h3>page 2</h3>
                <h3>page 2</h3>
                <h3>page 2</h3>
                <h3>page 2</h3>
                <h3>page 2</h3>
            </PortfolioPage>
        </Portfolio>
    </section>



    <!-- CONTACT SECTION -->
    <section id="contact">
        <h2>Contact</h2>
        <p>You can contact me at [...]</p>
    </section>



    <!-- FOOTER -->
    <RynFooter />
</template>




<!--||     GLOBAL STYLES     || -->
<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @include set-font($content-font);
    font-weight: normal;
    font-size: 17px;
    scroll-behavior: smooth;
}


html, body {
    height: 100%;
}


body {
    background-color: $color-background;
    color: $color-light;

    &::after {
        content: "";
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -2;
        background-size: cover;
        //background: url("../assets/img/banner.jpg") no-repeat fixed center;
        //background: url("/img/banner.jpg") no-repeat fixed center;
        mix-blend-mode: overlay;
        opacity: 0.3;
        filter: blur(6px) contrast(100%);
    }
}


#app {
    height: 100%;
}
</style>




<!--||     SCOPED STYLES     || -->
<style lang="scss" scoped>
#bg-particles {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    opacity: 0.2;
    pointer-events: none;
    width: 100%;
    height: 100%;
}


button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 0.9rem;
    width: fit-content;
    cursor: pointer;
    text-align: center;
}


p {
    //letter-spacing: 1px;
    font-weight: 200;
    @include set-font($font-source-code-pro);
}


section {
    padding: 45px 15px;
    min-height: 300px;
}


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

        #landing-links {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 25px;
            grid-column-gap: 10px;
        }
    }
}



section#portfolios {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}



section#contact {
    h2 {
        color: $color-primary;
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        @include set-font($header-font);
    }
}

</style>