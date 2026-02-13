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
import { stagger, splitText, createTimeline } from "animejs";


onMounted(() => {
    (async engine => {
        await loadSlim(engine);

        await engine.load({
            id: "bg-particles",
            options: particlesConfig
        });
    })(tsParticles);


    const {words, chars} = splitText("#landing h1", {
        words: {wrap: "clip"},
        chars: true,
        debug: true
    });

    console.log(words, chars);

    createTimeline({
        loop: true,
        defaults: {
            ease: "inOut(3)",
            duration: 600
        },
        loopDelay: 500
    })

    .add(words, {
        y: [$el => +$el.dataset.line % 2 ? '100%' : '-100%', '0%'],
    }, stagger(125))

    .add(chars, {
        y: $el => +$el.dataset.line % 2 ? '100%' : '-100%',
    }, stagger(10, {from: 'random'}))

    .init();

});
</script>



<template>
    <!-- BACKGROUND PARTICLES -->
    <div id="bg-particles" ref="bg-particles"></div>



    <!-- LANDING SECTION -->
    <section id="landing">
        <main>
            <h1>Ryn Stewart</h1>
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




<style lang="scss">
@use "css/partials/colors" as *;
@use "css/partials/fonts" as *;

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
            font-size: 3rem;
            margin-bottom: 5px;
            letter-spacing: 4px;
            color: $color-primary;
            @include set-font($header-font);
            text-transform: uppercase;
            line-height: 3rem;
            display: block !important;

            span {
                display: inline !important;
                background-color: red !important;
            }
        }

        p {
            //letter-spacing: 1px;
            font-weight: 200;
            @include set-font($font-source-code-pro);
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
    display: none;

    h2 {
        color: $color-primary;
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        @include set-font($header-font);
    }
}

</style>