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


onMounted(() => {
    (async engine => {
        await loadSlim(engine);

        await engine.load({
            id: "bg-particles",
            options: particlesConfig
        });
    })(tsParticles);
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



    <!--&lt;!&ndash; FOOTER &ndash;&gt;-->
    <!--<RynFooter />-->
</template>