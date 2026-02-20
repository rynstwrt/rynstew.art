import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import PDFPage from "./views/PDFPage.vue";
import NotFoundPage from "./views/NotFoundPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: HomePage
        },
        {
            path: "/resume", component: PDFPage, props: {
                url: "/RynStewartResume.pdf",
                title: "Resumé"
            }
        },
        {
            path: "/portfolio", component: PDFPage, props: {
                url: "/RynStewartPortfolio.pdf",
                title: "Design Portfolio"
            }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFoundPage
        }
    ]
});


createApp(App)
.use(router)
// .use(VueSplide)
.mount('#app');
