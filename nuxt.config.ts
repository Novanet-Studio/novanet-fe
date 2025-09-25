// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', "@nuxt/fonts"],
  css: [
    "~/assets/css/main.css",
  ],

  router: {
    options: {
      linkActiveClass: "active",
      linkExactActiveClass: "exact-active"
    }
  },

  fonts: {
    families: [
      {
        name: 'Red Hat Display',
        provider: 'google', // or 'local', 'adobe'
        weights: [400, 500, 600, 700, 800, 900], // Include all desired weights
        styles: ['normal', 'italic'],
        subsets: ['latin-ext', 'latin'],
      },
    ],
  },
})