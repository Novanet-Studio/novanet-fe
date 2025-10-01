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
      },
      backgroundImage: {
         "Background-autronaut":
            "url('/assets/images/novanet-emblema-semicirculo-fondo-autronauta.webp')",

         "emblem-white":
            "url('/assets/images/novanet-emblema-blanco.svg')",

         "emblem-portafolio":
            "url('/assets/images/portafolio.webp')",
      },
      backgroundSize: {},
      backgroundOpacity: ["active"],
      extend: {
         screens: {
            xxs: '375px',
            xs: '390px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            'm4': '1512px',
            '2xl': '1536px',
         },
      },
   },
   content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
   ],
   plugins: [],
}
