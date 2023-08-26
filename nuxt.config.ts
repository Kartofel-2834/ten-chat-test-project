// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],

  css: ["~/assets/css/index.css"],

  tailwindcss: {
    exposeConfig: true,
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "https://dummyjson.com",
    },
  },
});
