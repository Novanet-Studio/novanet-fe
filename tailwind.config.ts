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
      backgroundSize: {},
      backgroundOpacity: ["active"],
      extend: {
         screens: {
            '3xs': '375px',
            '2xs': '414px',
            xs: '480px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
         },
      },
      variants: {
         extend: {
            // Extend any utility you want to be orientation-responsive
            // For example, you might want to change flex direction based on orientation
            flexDirection: ['landscape', 'portrait'],
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
