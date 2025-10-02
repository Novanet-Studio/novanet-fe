// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devServer: {
    host: '0.0.0.0', // Exposes the server to the local network
    port: 3000, // You can specify a different port if needed
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', "@nuxt/fonts", '@nuxt/icon', 'motion-v/nuxt'],
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
        weights: [300, 400, 500, 600, 700, 800, 900], // Include all desired weights
        styles: ['normal', 'italic'],
        subsets: ['latin-ext', 'latin'],
      },
    ],
  },

  icon: {
    class: 'icon', // default <Icon> class applied
    mode: 'css', // default <Icon> mode applied
    cssLayer: 'base'
  }
})