import { reactive } from 'vue'

export function useNavigationLinks() {
   const navigationLinks = reactive([
      { name: "Inicio", link: "/" },
      { name: "Nosotros", link: "/nosotros" },
      { name: "Servicios", link: "/servicios" },
      { name: "Portafolio", link: "/portafolio" },
      { name: "Blog", link: "/blog" },
   ])
   return { navigationLinks }
}