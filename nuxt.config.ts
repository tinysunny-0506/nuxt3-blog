// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      title: "Nuxt Blog",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI
    }
  },

  devtools: {
    enabled: false,
  },
});
