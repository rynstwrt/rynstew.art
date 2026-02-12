import "./lib/vue3-sfc-loader/vue3-sfc-loader.js";
import * as Vue from "./lib/vue/vue.esm-browser.js";



const VUE_MODULE_DIR = "./js/components/";



function loadVueModule(componentPath) {
    const sfcLoaderOptions = {
        moduleCache: { vue: Vue },

        getFile: async function (url) {
            const response = await fetch(url);
            if (!response.ok) {
                throw Object.assign(new Error(response.statusText + ' ' + url), { response });
            }
            return await response.text();
        },

        addStyle: function (textContent) {
            const style = Object.assign(document.createElement('style'), { textContent });
            const reference = document.head.getElementsByTagName('style')[0] || null;
            document.head.insertBefore(style, reference);
        }
    };

    return Vue.defineAsyncComponent(function () {
        return window['vue3-sfc-loader'].loadModule(VUE_MODULE_DIR + componentPath, sfcLoaderOptions);
    });
}



Vue.createApp({
    components: {
        "icon-button": loadVueModule("IconButton.vue"),
        "ryn-button": loadVueModule("RynButton.vue")
    },
    // data: () => { return {} },
    // methods: {},
    // computed: {},
    // created: () => {}
}).mount("#app");


