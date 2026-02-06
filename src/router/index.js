import { createRouter, createWebHistory } from 'vue-router'
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
})

export default router
