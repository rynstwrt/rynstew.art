import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/router/HomeView.vue";
import PortfolioView from "@/router/PortfolioView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", component: HomeView },
        // { path: "/tech", component: TechView },
        { path: "/portfolio", component: PortfolioView }
    ],
})

export default router
