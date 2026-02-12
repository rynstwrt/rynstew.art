import * as Vue from "./lib/vue/vue.esm-browser.js";
import "./lib/vue3-sfc-loader/vue3-sfc-loader.js";
import * as sass from 'https://jspm.dev/sass';
console.log(sass)


const VUE_MODULE_DIR = "/js/components/";


// function loadVueModule(componentPath) {
//     const sfcLoaderOptions = {
//         moduleCache: { vue: Vue },
//
//         getFile: async function (url) {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw Object.assign(new Error(response.statusText + ' ' + url), { response });
//             }
//             return await response.text();
//         },
//
//         addStyle: function (textContent) {
//             const style = Object.assign(document.createElement('style'), { textContent });
//             const reference = document.head.getElementsByTagName('style')[0] || null;
//             document.head.insertBefore(style, reference);
//         }
//     };
//
//     console.log(sfcLoaderOptions)
//
//     if (componentPath === "IconButton.vue") {
//         console.log("ICON");
//         sfcLoaderOptions.addStyle("./css/test.css");
//     }
//
//     console.log(sfcLoaderOptions)
//
//     return Vue.defineAsyncComponent(function () {
//         return window['vue3-sfc-loader'].loadModule(VUE_MODULE_DIR + componentPath, sfcLoaderOptions);
//     });
// }



// const options = {
//     moduleCache: {vue: Vue},
//
//     async getFile(url) {
//         const res = await fetch(url);
//         if (!res.ok)
//             throw Object.assign(new Error(`${res.statusText} ${url}`), {res})
//         return {
//             getContentData: asBinary => asBinary ? res.arrayBuffer() : res.text()
//         }
//     },
//
//     addStyle(textContent) {
//         const style = Object.assign(document.createElement("style"), {textContent});
//         const ref = document.head.getElementsByTagName("style")[0] || null;
//         document.head.insertBefore(style, ref);
//     }
// };


const {loadModule} = window["vue3-sfc-loader"];


function loadVueModule(componentName, extraOptions) {
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
        },

        // addStyle(textContent) {
        //     const style = Object.assign(document.createElement("style"), {textContent});
        //     const ref = document.head.getElementsByTagName("style")[0] || null;
        //     document.head.insertBefore(style, ref);
        // },
        //
        // handleModule: async function (type, getContentData, path, options) {
        //     switch (type) {
        //         case '.css':
        //             options.addStyle(await getContentData(false));
        //             return null;
        //     }
        // }
    };


    return Vue.defineAsyncComponent(() => loadModule(VUE_MODULE_DIR + componentName, options));
    // const component = Vue.defineAsyncComponent(loadModule(componentName, options));
    // options.addStyle("* { color: blue !important; }");
    // const s = options.getFile("../css/test.css");
    // s.then(a => console.log(a.getContentData().then(b => console.log(b))));
    // options.addStyle(s);

    // return component;
}


Vue.createApp({
    components: {
        "icon-button": loadVueModule("IconButton.vue")
    },
    // data: () => { return {} },
    // methods: {},
    // computed: {},
    // created: () => {}
}).mount("#app");