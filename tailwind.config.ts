import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
   theme: {
      fontSize: {

         "s1": [
            "0.563rem",
            {
               lineHeight: "0.629rem",
               fontWeight: "400",
            },
         ],
         "s2": [
            "0.700rem",
            {
               lineHeight: "0.629rem",
               fontWeight: "400",
            },
         ],
         "s3": [
            "0.938rem",
            {
               lineHeight: "1.25rem",
               fontWeight: "400",
            },
         ],
         "1": [
            "1.5rem",
            {
               lineHeight: "1.75rem",
               fontWeight: "700",
            },
         ],
         "2": [
            "1.3rem",
            {
               lineHeight: "1.75rem",
               fontWeight: "700",
            },
         ],
         "3": [
            "1.8rem",
            {
               lineHeight: "2.19rem",
               fontWeight: "900",
            },
         ],
         "4": [
            "1.12rem",
            {
               lineHeight: "1.37rem",
               fontWeight: "400",
            },
         ],
         "5": [
            "2.5rem",
            {
               lineHeight: "3.12rem",
               fontWeight: "900",
            },
         ],

         "6": [
            "3.125rem",
            {
               lineHeight: "3.44rem",
               fontWeight: "900",
            },
         ],

         "p1": [
            "1.12rem",
            {
               lineHeight: "1.56rem",
               fontWeight: "400",
            },
         ],
         "p2": [
            "1.87rem",
            {
               lineHeight: "2.5rem",
               fontWeight: "400",
            },
         ],

         "p3": [
            "1.375rem",
            {
               lineHeight: "1.75rem",
               fontWeight: "400",
            },
         ],

         "p4": [
            "2.2rem",
            {
               lineHeight: "2.81rem",
               fontWeight: "300",
            },
         ],
      },

      extend: {

         screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',

         },
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


            "footer-texture": "url('/img/footer-texture.png')",
         },
         backgroundSize: {},
         backgroundOpacity: ["active"],
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
