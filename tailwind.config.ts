/** @type {import('tailwindcss').Config} */
module.exports = {
   theme: {
      colors: {
         "azure": "#007FFF",
         "oxfordBlue": "#001933",
         "columbiaBlue": "#CCE5FF",
         "raspberry": "#DF1F5B",
         "chartreuse": "#D6F630",
         "cadetGray": "#959CA4",
         "eerieBlack": "#212529",
      },
      backgroundSize: {},
      backgroundOpacity: ["active"],
      extend: {
         screens: {
            '3xs': '375px',
            '2xs': '390px',
            xs: '430px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
            '3xl': '1920px',
            'portrait': { 'raw': '(orientation: portrait)' },
            'landscape': { 'raw': '(orientation: landscape)' },
            // Custom breakpoints with specific min-widths for portrait orientation
            'portrait-lg': { 'raw': '(orientation: portrait) and (min-width: 1024px)' },
         },
      },
   },
   content: [
        "./components/**/*.{js,vue,ts}",
        // Include Nuxt 3 `app/` directory so Tailwind picks up classes in app/components and pages
        "./app/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
   ],
   plugins: [
      function ({ addBase, theme }) {
         addBase({
            ':root': {
               '--color-azure': theme('colors.azure'),
               '--color-oxfordBlue': theme('colors.oxfordBlue'),
               '--color-columbiaBlue': theme('colors.columbiaBlue'),
               '--color-raspberry': theme('colors.raspberry'),
               '--color-chartreuse': theme('colors.chartreuse'),
               '--color-cadetGray': theme('colors.cadetGray'),
               '--color-eerieBlack': theme('colors.eerieBlack'),
            },
         })
      },
   ],
}
