// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  app: {
    head: {
      title: 'Novanet Studio',
      meta: [
        {
          name: 'title',
          content: 'Novanet',
        },
        {
          name: 'description',
          content:
            'Creatividad, innovación y colaboración para ayudar a las empresas a conectar con sus usuarios y potenciar sus metas de negocio.',
        },
        {
          name: 'name',
          content: 'Novanet Studio WebApp',
        },
        {
          name: 'author',
          content: 'Novanet Studio <info@novanet.studio>',
        },
        // Viewport meta for proper responsive behavior on mobile and devices
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },

  devServer: {
    host: 'localhost', // Exposes the server to the local network
    port: 3000, // You can specify a different port if needed
  },

  nitro: {
    prerender: {
      routes: ['/contact-form-netlify.html'],
    },
  },

  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
    'motion-v/nuxt',
    'nuxt-gtag',
    '@vite-pwa/nuxt',
  ],

  runtimeConfig: {
    public: {
      kairosApiUrl: process.env.KAIROS_API_URL,
      kairosApiKey: process.env.KAIROS_API_KEY,
      metaPixelId: process.env.META_PIXEL_ID || '',
    },
  },

  css: ['~/assets/css/main.css'],

  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'exact-active',
    },
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

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/novanet-studio/image/upload/',
    },
  },

  icon: {
    class: 'icon', // default <Icon> class applied
    mode: 'css', // default <Icon> mode applied
    cssLayer: 'base',
  },

  gtag: {
    id: 'G-RZX6HSVMPY',
  },

  pwa: {
    manifest: {
      name: 'Novanet Studio',
      short_name: 'Novanet',
      description:
        'Creatividad, innovación y colaboración para ayudar a las empresas a conectar con sus usuarios y potenciar sus metas de negocio.',
      theme_color: '#007FFF',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait',
      lang: 'es',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      navigateFallback: null,
    },

    client: {
      installPrompt: true,
    },

    registerType: 'autoUpdate',
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
})
