import { defineConfig } from 'vite'
import { templateCompilerOptions } from '@tresjs/core'
import vue from '@vitejs/plugin-vue'
import svgLoader from "vite-svg-loader";


export default defineConfig({
    plugins: [
        vue({
            ...templateCompilerOptions
        }),
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
