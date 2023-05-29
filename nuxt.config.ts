// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/ionic"],
    css: ["~/assets/css/main.scss"],
    ionic: {
        css: {
            basic: false
        },
        config: {
            mode: "ios"
        }
    }
})
