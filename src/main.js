import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createWebHashHistory, createRouter } from "vue-router";
import FileRedirectPage from "./views/FileRedirectPage.vue";
import HomePage from "./views/HomePage.vue";



const routes = [
    { path: "/", component: HomePage },
    { path: "/test", redirect: "/RynStewartResume.pdf" },
    { path: "/resume", component: FileRedirectPage, props: { path: "/RynStewartResume.pdf" } },
    { path: "/portfolio", component: FileRedirectPage, props: { path: "/RynStewartPortfolio.pdf" } }
];


const router = createRouter({
    history: createWebHistory(),
    // history: createWebHashHistory(),
    routes
})


createApp(App)
.use(router)
// .use(VueSplide)
.mount('#app');
