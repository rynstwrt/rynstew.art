import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools';
import svgLoader from "vite-svg-loader";


export default defineConfig({
    plugins: [
        vue(),
        // vueDevTools(),
        svgLoader()
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "/src/_variables.scss" as *;`,
                api: 'modern',
            },
        },
    },
    // server: {
    //     hmr: {
    //         overlay: false
    //     }
    // }
});
