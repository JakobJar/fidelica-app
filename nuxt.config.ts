// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/ionic"],
    css: ["~/assets/css/main.scss"],
    runtimeConfig: {
      public: {
        apiBaseUrl: process.env.API_BASE_URL || "http://127.0.0.1"
      }
    },
    ionic: {
        css: {
            basic: false
        },
        config: {
            mode: "ios"
        }
    }
})
