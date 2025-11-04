// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  app: {
    head: {
      title: "Novanet Studio",
      meta: [
        {
          name: "title",
          content: "Novanet",
        },
        {
          name: "description",
          content:
            "Estudio de diseño dedicado al diseño gráfico, al desarrollo web y al marketing online.",
        },
        {
          name: "name",
          content: "Novanet Studio WebApp",
        },
        {
          name: "author",
          content: "Novanet Studio <info@novanet.studio>",
        },
        // Viewport meta for proper responsive behavior on mobile and devices
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  runtimeConfig: {
    public: {
      strapi: {
        url: process.env.STRAPI_URL,
      },
    },
  },
  devServer: {
    host: "0.0.0.0", // Exposes the server to the local network
    port: 3000, // You can specify a different port if needed
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/image-cloudinary",
    "@nuxt/fonts",
    "@nuxt/icon",
    "motion-v/nuxt",
    "@nuxtjs/strapi",
    "@stefanobartoletti/nuxt-social-share",
  ],
  css: ["~/assets/css/main.css"],

  router: {
    options: {
      linkActiveClass: "active",
      linkExactActiveClass: "exact-active",
    },
  },

  fonts: {
    families: [
      {
        name: "Red Hat Display",
        provider: "google", // or 'local', 'adobe'
        weights: [300, 400, 500, 600, 700, 800, 900], // Include all desired weights
        styles: ["normal", "italic"],
        subsets: ["latin-ext", "latin"],
      },
    ],
  },

  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/novanet-studio/image/upload/",
    },
  },

  icon: {
    class: "icon", // default <Icon> class applied
    mode: "css", // default <Icon> mode applied
    cssLayer: "base",
  },

  socialShare: {
    baseUrl: "https://novanet.studio/",
  },
});
