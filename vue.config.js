const { defineConfig } = require('@vue/cli-service')


module.exports = defineConfig({
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/src/css/_constants.scss";
                `
            }
        }
    }
});