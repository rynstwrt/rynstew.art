import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";
import ShowFilePage from "./views/ShowFilePage.vue";
import HomePage from "./views/HomePage.vue";



const routes = [
    { path: "/", component: HomePage },
    { path: "/resume", component: ShowFilePage, props: { path: "/RynStewartResume.pdf" } },
    { path: "/portfolio", component: ShowFilePage, props: { path: "/RynStewartPortfolio.pdf" } }
];


const router = createRouter({
    history: createWebHistory(),
    routes
})


createApp(App)
.use(router)
// .use(VueSplide)
.mount('#app');
