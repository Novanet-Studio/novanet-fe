import pwa from './pwa';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  telemetry: false,
  app: {
    head: {
      meta: [
        {
          name: 'title',
          content: 'Novanet',
        },
        {
          name: 'description',
          content:
            'Estudio de diseño dedicado al diseño gráfico, al desarrollo web y al marketing online.',
        },
        {
          name: 'name',
          content: 'Novanet Studio Aplicación web',
        },
        {
          name: 'author',
          content: 'Novanet Studio <info@novanet.studio>',
        },
      ],
      script: [
        {
          children:
            'function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"8ad2985e600b71f791445d3b7455dc49"})});',
        },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in',
    },
  },

  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons',
    ],
  },
  modules: [
    '@nuxt/image-edge',
    '@nuxtjs/strapi',
    '@kevinmarrec/nuxt-pwa',
    'nuxt-gtag',
    "@nuxt/image"
  ],
  pwa,
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ['project.d.ts'],
      },
    },
  },
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
  },
  css: [
    '~/assets/scss/global.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  image: {
    dir: 'assets/images',
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
  },
  routeRules: {
    // Static page generated on-demand, revalidates in background
    '/blog/**': { static: true },
    // Static page generated on-demand once
    '/portafolio/**': { ssr: false },
  },
  gtag: {
    // Your primary Google tag ID
    id: 'G-RZX6HSVMPY',
  },
});