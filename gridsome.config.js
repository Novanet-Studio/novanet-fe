// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/assets/scss/_global.scss')],
    })
}

module.exports = {
  runtimeCompiler: true,
  siteName: 'Novanet Studio',
  siteUrl: 'https://novanet.studio',
  icon: 'src/assets/images/favicon.png',
  metadata: {
    siteName: 'Novanet web app',
    title: 'Novanet',
    titleTemplate: '%s · Estudio de diseño',
    siteDescription:
      'Estudio de diseño dedicado al diseño gráfico, al desarrollo web y al marketing online.',
    siteUrl: process.env.DEPLOY_URL || 'https://novanet.studio',
    author: 'Novanet Studio',
    image:
      'https://res.cloudinary.com/novanet-studio/image/upload/v1638481973/novanet_open_graph_miniatura_a58d0828f9.jpg',
    twitter: {
      site: '@novanetstudio',
      creator: '@flaex_',
    },
  },

  plugins: [
    'gridsome-plugin-seo',
    'gridsome-plugin-ogp',
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/privacy', '/legal'],
      },
    },
    {
      use: 'gridsome-plugin-robots-txt',
      options: {
        policy: [
          {
            userAgent: 'Googlebot',
            allow: '/',
            disallow: '/search',
            crawlDelay: 2,
          },
          {
            userAgent: '*',
            allow: '/',
            disallow: '/search',
            crawlDelay: 10,
            cleanParam: 'ref /articles/',
          },
        ],
      },
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.API_URL,          
        queryLimit: 1000, // Defaults to 100
        contentTypes: [`articulos`, `proyectos`, `categorias`],
        singleTypes: [
          'blog',
          'contacto',
          'inicio',
          'nosotros',
          'portafolio',
          'servicios',
        ],
        loginData: {
          identifier: process.env.API_USER,
          password: process.env.API_USER_PASSWORD,
        },
      },
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        // Service Worker Options
        disableServiceWorker: false,
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif',
        disableTemplatedUrls: false, // Optional
        // Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
        manifestPath: 'manifest.json',
        title: 'Novanet Studio',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        themeColor: '#ffffff',
        backgroundColor: '#ffffff',
        icon: 'src/assets/images/favicon.png',
        shortName: 'Novanet Studio', // Optional
        description:
          'Estudio de diseño dedicado al diseño gráfico, al desarrollo web y al marketing online', // Optional
        lang: 'es-ES', // Optional
        maskableIcon: true, // Optional
      },
    },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-W4T9CPR',
        enabled: true,
        debug: true,
      },
    },
  ],
  chainWebpack(config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type =>
      addStyleResource(config.module.rule('scss').oneOf(type)),
    )
  },
}
