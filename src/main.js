import { createApp } from 'vue'
import App from './App.vue'
import Particles from "@tsparticles/vue3";
import {loadSlim} from "@tsparticles/slim";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import TechView from "@/views/TechView.vue";
import ArtView from "@/views/ArtView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", component: HomeView },
        { path: "/tech", component: TechView },
        { path: "/art", component: ArtView }
    ],
});


const particlesInit = {
    init: async engine => {
        await loadSlim(engine)
    }
}


createApp(App)
.use(router)
.use(Particles, particlesInit)
.mount("#app");