/** @type {import('tailwindcss').Config} */
module.exports = {
   theme: {
      colors: {
         "azure": "#007FFF",
         "oxford-blue": "#001933",
         "columbia-blue": "#CCE5FF",
         "raspberry": "#DF1F5B",
         "chartreuse": "#D6F630",
         "cadet-gray": "#959CA4",
      },
      backgroundImage: {
         "emblem-columbia-blue":
            "url('/assets/images/novanet-emblema-semicirculo-1.svg')",

         "azure-reverse":
            "url('/assets/images/novanet-emblema-semicirculo-2.svg')",

         "borde-emblem-columbia-blue":
            "url('/assets/images/novanet-emblema-semicirculo-borde-azul.svg')",

         "emblem-azure-reverse":
            "url('/assets/images/novanet-emblema-semicirculo-borde-azul-reverso.svg')",

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
            sm: '640px',
            md: '768px',
            lg: '1024px',
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
