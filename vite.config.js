import { defineConfig } from 'vite'
// import tailwindcss from "@tailwindcss/vite";
// import { templateCompilerOptions } from '@tresjs/core'
import vue from '@vitejs/plugin-vue'
import svgLoader from "vite-svg-loader";


export default defineConfig({
    plugins: [
        // vue({
        //     ...templateCompilerOptions
        // }),
        vue(),
        svgLoader()
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "/src/_variables.scss" as *;`,
                api: 'modern',
            },
        },
    }
});
