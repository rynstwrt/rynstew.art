import * as Vue from "./lib/vue/vue.esm-browser.js";
import "./lib/vue3-sfc-loader/vue3-sfc-loader.js";
import * as sass from 'https://jspm.dev/sass';
import { animate } from "./lib/animejs/anime.js";



const VUE_MODULE_DIR = "/js/components/";



const { loadModule } = window["vue3-sfc-loader"];
window['animate'] = animate;



function loadVueModule(componentName) {
    const options = {
        moduleCache: {vue: Vue},

        async getFile(url) {
            const res = await fetch(url);
            if (!res.ok)
                throw Object.assign(new Error(`${res.statusText} ${url}`), {res});
            return {getContentData: asBinary => asBinary ? res.arrayBuffer() : res.text()}
        },

        async processStyles(src, lang, filename, options) {
            if (!["sass", "scss"].includes(lang))
                throw new Error(`unsupported "${lang}" style processor`);

            const sassDepImporter = {
                canonicalize: str => new URL(str, 'file:'),
                load: async url => {
                    const res = options.getResource({refPath: filename, relPath: url.pathname}, options);
                    const content = await res.getContent();
                    return {
                        contents: await content.getContentData(false),
                        syntax: content.type.slice(1), // content.type is the file extension, then just strip the "."
                    };
                },
            };

            try {
                return (await sass.compileStringAsync(src, {
                    importers: [sassDepImporter],
                })).css;
            }
            catch (ex) {
                options.log('error', ex.message);
                return undefined;
            }
        },

        addStyle(styleStr) {
            const style = document.createElement('style');
            style.textContent = styleStr;
            const ref = document.head.getElementsByTagName('style')[0] || null;
            document.head.insertBefore(style, ref);
        },

        log(type, ...args) {
            console[type](...args);
        }
    };

    return Vue.defineAsyncComponent(() => loadModule(VUE_MODULE_DIR + componentName, options));
}



function createComponentsObj(fileNames) {
    // const fileNamesWithExts = fileNames.map(name => name.match(/\.vue$/gi) ? name : `${name}.vue`);
    //
    // const tagNames = fileNames.map(name => name.match(/([A-Z]+[a-z]+)/g)
    //                                            .join("-")
    //                                            .toLowerCase());

    const components = {};
    for (const fileName of fileNames) {
        const withExtension = fileName.match(/\.vue$/gi) ? fileName : `${fileName}.vue`;
        const tagName = fileName.match(/([A-Z]+[a-z]+)/g).join("-").toLowerCase();
        components[tagName] = loadVueModule(withExtension);
    }

    return components;
}



Vue.createApp({
    components: createComponentsObj([
        "RynButton", "DownChevron", "RynFooter",
        "Portfolio", "PortfolioPage"
    ])
    // components: {
    //     "ryn-button": loadVueModule("RynButton.vue"),
    //     "down-chevron": loadVueModule("DownChevron.vue"),
    //     "ryn-footer": loadVueModule("Footer.vue"),
    //     "portfolio": loadVueModule("Portfolio.vue")
    // }
}).mount("#app");