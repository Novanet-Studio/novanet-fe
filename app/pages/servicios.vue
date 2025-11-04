<script lang="ts" setup>
const SERVICES_MAIN_INFO: {
  title: string;
  description: string;
  image?: string;
} = {
  title: "Servicios",
  description:
    "Analizamos en detalle para comprender sus requerimientos, deseos y comportamientos y así crear soluciones que potencien sus procesos y mejoren su experiencia.",
  image: "images/novanet-studio-og-servicios.webp"
};

useHead(() => {
  return {
    title: SERVICES_MAIN_INFO.title,
    meta: [
      {
        name: "description",
        content: SERVICES_MAIN_INFO.description,
      },
      { property: 'og:title', content: SERVICES_MAIN_INFO.title },
      { property: 'og:description', content: SERVICES_MAIN_INFO.description },
      { property: 'og:image', content: SERVICES_MAIN_INFO.image },
      { name: 'twitter:card', content: SERVICES_MAIN_INFO.image },
      { name: 'twitter:title', content: SERVICES_MAIN_INFO.title },
      { name: 'twitter:description', content: SERVICES_MAIN_INFO.description },
      { name: 'twitter:image', content: SERVICES_MAIN_INFO.image },
    ],
  };
});

const servicios = [
  // Sección Servicios
  {
    alignCenter: true,
    bgColor: "bg-white",
    bgImage: "background-emblem-servicios",
    color: "text-oxfordBlue",
    dataColor: "white",
    description: SERVICES_MAIN_INFO.description,
    showTabs: true,
    justifyContent: true,
    name: "Principal",
    title: "Nuestros servicios se orientan a los usuarios",
    titleColor: "text-azure",
    list: [
      {
        text: "Diseño gráfico",
        targetSection: "Diseno",
        icon: '<svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_118_839)"><path d="M21.54 38H3.9613C3.62136 38 3.34546 37.7299 3.34546 37.3971C3.34546 37.0642 3.62136 36.7941 3.9613 36.7941H21.54C21.8799 36.7941 22.1558 37.0642 22.1558 37.3971C22.1558 37.7299 21.8799 38 21.54 38Z" fill="#007FFF"/><path d="M1.91171 36.1191C0.857379 36.1191 0.00012207 35.2798 0.00012207 34.2427C0.00012207 33.9774 0.0592433 33.717 0.167632 33.4758L4.47855 24.1036C4.51304 24.0361 4.55245 23.9782 4.60665 23.9251L27.4816 1.59687C29.6592 -0.53514 33.1868 -0.53514 35.3644 1.59687C37.5421 3.72889 37.5421 7.18255 35.3644 9.31457L12.4648 31.6428C12.4106 31.6959 12.3515 31.7345 12.2825 31.7634L2.69506 35.9503C2.44872 36.0612 2.18268 36.1191 1.91171 36.1191ZM5.55751 24.6969L1.31064 33.9678C1.1924 34.2186 1.24659 34.5177 1.44859 34.7154C1.64566 34.9132 1.95605 34.9711 2.21224 34.8505L11.6568 30.7071L34.4727 8.45597C36.0985 6.73396 35.9901 4.04724 34.2313 2.45547C32.571 0.95534 30.014 0.950517 28.3537 2.45064L5.55751 24.6969Z" fill="#007FFF"/><path d="M23.6196 6.22912L21.4629 8.3333L28.453 15.2009L30.6097 13.0967L23.6196 6.22912Z" fill="#007FFF"/><path d="M27.2306 2.70356L25.0704 4.81114L32.0605 11.6787L34.2207 9.57117L27.2306 2.70356Z" fill="#007FFF"/><path d="M11.7111 31.5027C11.5485 31.5027 11.3908 31.44 11.2775 31.3242L4.92691 25.0874C4.6855 24.851 4.6855 24.47 4.92691 24.2336C5.16832 23.9972 5.55753 23.9972 5.79895 24.2336L12.1495 30.4753C12.386 30.7116 12.386 31.0879 12.1495 31.3242C12.0362 31.44 11.8786 31.5075 11.7111 31.5027Z" fill="#007FFF"/><path d="M2.29609 31.8981L1.33537 33.9916C1.1925 34.2955 1.33537 34.6572 1.64576 34.7971C1.80834 34.8695 1.99063 34.8695 2.15321 34.7971L4.29636 33.8324C3.37505 33.4996 2.64589 32.7953 2.29609 31.8981Z" fill="#007FFF"/><path d="M1.91665 35.1011C1.70973 35.0866 1.50773 35.0094 1.35008 34.8792C1.06432 34.6428 0.970716 34.2473 1.12837 33.9145L2.34036 31.2808L2.54728 31.8307C2.86752 32.67 3.54249 33.3357 4.39974 33.654L4.96139 33.8566L2.29602 35.0143C2.17777 35.0721 2.04968 35.1011 1.91665 35.1011ZM2.32065 32.4771L1.57671 34.0881C1.50773 34.2232 1.53237 34.3824 1.64076 34.4885C1.81319 34.6139 1.90187 34.6573 2.06446 34.5801L3.71985 33.8566C3.13357 33.5334 2.65074 33.0559 2.32065 32.4771Z" fill="#007FFF"/></g><defs><clipPath id="clip0_118_839"><rect width="37" height="38" fill="white"/></clipPath></defs></svg>',
      },
      {
        text: "Tecnologías web",
        targetSection: "Web",
        icon: '<svg width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_118_848)"><path d="M34.4419 13.3942H4.5623C3.8323 13.3942 3.23918 12.7999 3.23462 12.0685V10.3314C3.23462 9.59535 3.82774 9.00107 4.5623 9.00107H34.4282C35.1582 9.00107 35.7514 9.59535 35.7514 10.3268C35.7514 10.3268 35.7514 10.3268 35.7514 10.3314V12.0685C35.7514 12.7954 35.1674 13.3851 34.4419 13.3942ZM4.61705 12.0228H34.3963V10.3725H4.61705V12.0228Z" fill="#007FFF"/><path d="M17.2916 28.1645H4.5623C3.8323 28.1645 3.23918 27.5656 3.23462 26.8342V16.4891C3.23462 15.7576 3.8323 15.1633 4.5623 15.1633H17.2916C18.0216 15.1633 18.6147 15.7576 18.6193 16.4891V26.8342C18.6193 27.5656 18.0216 28.1599 17.2916 28.1645ZM4.61705 26.7931H17.2505V16.5348H4.61705V26.7931Z" fill="#007FFF"/> <path d="M34.442 28.1645H21.7264C20.9918 28.1645 20.3987 27.5702 20.3987 26.8342V16.4891C20.3987 15.7576 20.9918 15.1633 21.7218 15.1633C21.7218 15.1633 21.7218 15.1633 21.7264 15.1633H34.442C35.172 15.1633 35.7651 15.7576 35.7651 16.4891V26.8342C35.7651 27.5656 35.172 28.1599 34.442 28.1645ZM21.7674 26.7931H34.3963V16.5348H21.7674V26.7931Z" fill="#007FFF"/><path d="M35.3409 0H3.64998C1.63336 0 0 1.63657 0 3.65714V28.3429C0 30.3634 1.63336 32 3.64998 32H35.35C37.3666 32 39 30.3634 39 28.3429V3.65714C39 1.63657 37.3666 0 35.35 0C35.35 0 35.3455 0 35.3409 0ZM34.4284 2.74286C34.3098 2.51886 34.3919 2.24457 34.6155 2.12571C34.7478 2.05714 34.9075 2.05257 35.0398 2.12571L35.5873 2.67886L36.1165 2.144C36.2945 1.984 36.5682 2.00229 36.7279 2.18514C36.8693 2.34514 36.8739 2.58743 36.7279 2.752L36.2032 3.28686L36.7325 3.81257C36.8511 4.03657 36.7644 4.31086 36.5408 4.42971C36.4131 4.49829 36.258 4.49829 36.1256 4.43429L35.5827 3.904L35.058 4.43886C34.8846 4.59886 34.6155 4.59886 34.4421 4.43886C34.287 4.26514 34.287 4 34.4421 3.82629L34.9668 3.29143L34.4238 2.74743L34.4284 2.74286ZM33.087 3.41029C33.087 3.66171 32.8817 3.86743 32.6308 3.86743H31.0248C30.7876 3.78971 30.6552 3.52914 30.7328 3.29143C30.7784 3.15429 30.8879 3.04457 31.0248 2.99886H32.6582C32.9 2.99886 33.0916 3.19086 33.1053 3.43314L33.087 3.41029ZM35.3226 30.5874H3.64998C2.39073 30.5874 1.36874 29.5634 1.36874 28.3017V5.83314H37.613V28.3337C37.6084 29.5909 36.5956 30.6057 35.3409 30.6103L35.3226 30.5874Z" fill="#007FFF"/></g><defs><clipPath id="clip0_118_848"><rect width="39" height="32" fill="white"/></clipPath></defs></svg>',
      },
      {
        text: "Asesoría",
        targetSection: "Asesoria",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="33" height="38" fill="none"><g fill="#007FFF" clip-path="url(#a)"><path d="M10.02 30.082c0-2.587-2.012-4.735-4.628-4.934 1.007-.2 1.771-1.075 1.771-2.11A2.152 2.152 0 0 0 4.99 20.89a2.152 2.152 0 0 0-2.173 2.149c0 1.034.764 1.91 1.77 2.109C2.013 25.386 0 27.495 0 30.082a.53.53 0 0 0 .523.517h2.173v.438c0 1.273 1.046 2.307 2.334 2.307s2.334-1.034 2.334-2.307v-.438h2.214c.201 0 .443-.239.443-.517ZM21.49 34.737c0-2.586-2.012-4.735-4.628-4.934 1.006-.199 1.77-1.074 1.77-2.109a2.152 2.152 0 0 0-2.172-2.148 2.152 2.152 0 0 0-2.173 2.148c0 1.035.764 1.91 1.77 2.11-2.575.238-4.587 2.347-4.587 4.933a.53.53 0 0 0 .523.517h2.173v.438c0 1.273 1.046 2.308 2.334 2.308s2.334-1.035 2.334-2.308v-.438h2.213c.202 0 .443-.238.443-.517ZM28.332 25.148c1.006-.2 1.77-1.075 1.77-2.11a2.152 2.152 0 0 0-2.173-2.148 2.152 2.152 0 0 0-2.173 2.149c0 1.034.765 1.91 1.77 2.109-2.575.199-4.627 2.347-4.627 4.934a.53.53 0 0 0 .523.517h2.213v.438c0 1.273 1.047 2.307 2.334 2.307 1.288 0 2.335-1.034 2.335-2.307v-.438h2.173a.53.53 0 0 0 .523-.517c-.08-2.587-2.093-4.696-4.668-4.934ZM16.54 23.675c-.2 0-.362-.119-.442-.318l-1.771-4.934a8.628 8.628 0 0 1-2.978-1.313l-5.151 1.592c-.202.04-.403 0-.524-.16a.485.485 0 0 1-.04-.517l2.616-4.178a9.366 9.366 0 0 1-1.167-4.496C7.123 4.178 11.349 0 16.581 0c5.231 0 9.457 4.178 9.457 9.35a9.162 9.162 0 0 1-1.207 4.577l2.495 4.098c.08.16.08.358-.04.517-.121.16-.323.2-.484.16l-5.07-1.513c-.805.518-1.73.916-2.656 1.194l-2.093 5.014a.547.547 0 0 1-.443.278Zm-5.15-7.52c.08 0 .2.04.28.08a8.644 8.644 0 0 0 3.1 1.352c.16.04.281.16.322.279l1.489 4.059 1.73-4.139a.458.458 0 0 1 .322-.278c1.006-.239 1.932-.677 2.777-1.234.12-.08.241-.119.402-.08l4.145 1.234-2.012-3.302a.502.502 0 0 1 0-.478 8.206 8.206 0 0 0 1.207-4.337c0-4.655-3.823-8.436-8.531-8.436-4.709 0-8.532 3.78-8.532 8.436 0 1.512.403 2.984 1.167 4.297.08.16.08.319 0 .478l-2.133 3.382 4.186-1.273c0-.04.04-.04.08-.04Z"/><path d="M11.791 10.982a1.52 1.52 0 0 1-1.529-1.512 1.52 1.52 0 0 1 1.53-1.512c.844 0 1.528.676 1.528 1.512a1.52 1.52 0 0 1-1.529 1.512Zm0-2.109a.615.615 0 0 0-.603.597c0 .318.281.597.603.597a.615.615 0 0 0 .604-.597.59.59 0 0 0-.604-.597ZM16.58 10.982a1.52 1.52 0 0 1-1.529-1.512 1.52 1.52 0 0 1 1.53-1.512c.844 0 1.529.676 1.529 1.512a1.52 1.52 0 0 1-1.53 1.512Zm0-2.109a.615.615 0 0 0-.603.597c0 .318.281.597.603.597a.616.616 0 0 0 .604-.597.616.616 0 0 0-.604-.597ZM21.37 10.982a1.52 1.52 0 0 1-1.53-1.512 1.52 1.52 0 0 1 1.53-1.512c.845 0 1.529.676 1.529 1.512a1.52 1.52 0 0 1-1.53 1.512Zm0-2.109a.615.615 0 0 0-.604.597c0 .318.281.597.603.597a.615.615 0 0 0 .604-.597.615.615 0 0 0-.604-.597Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h33v38H0z"/></clipPath></defs></svg>',
      },
    ],
    listColor: "text-azure",
  },
  // Sección Diseño gráfico
  {
    alignCenter: true,
    bgColor: "bg-columbiaBlue",
    navButtonBack: true,
    navButton: "text-azure",
    color: "text-oxfordBlue",
    dataColor: "columbiaBlue",
    description:
      "Enfocados en la creatividad y la colaboración estrecha, trabajamos de la mano con nuestros clientes para desarrollar soluciones visuales que destacan y consiguen resultados tangibles.",
    justifyContent: true,
    name: "Diseno",
    title: "Diseño Gráfico",
    titleColor: "text-azure",
    serviceImage:
      "images/novanet-studio-semicirculo-figuras-geometricas-3d.webp",
    serviceIcon:
      '<svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_118_839)"><path d="M21.54 38H3.9613C3.62136 38 3.34546 37.7299 3.34546 37.3971C3.34546 37.0642 3.62136 36.7941 3.9613 36.7941H21.54C21.8799 36.7941 22.1558 37.0642 22.1558 37.3971C22.1558 37.7299 21.8799 38 21.54 38Z" fill="#007FFF"/><path d="M1.91171 36.1191C0.857379 36.1191 0.00012207 35.2798 0.00012207 34.2427C0.00012207 33.9774 0.0592433 33.717 0.167632 33.4758L4.47855 24.1036C4.51304 24.0361 4.55245 23.9782 4.60665 23.9251L27.4816 1.59687C29.6592 -0.53514 33.1868 -0.53514 35.3644 1.59687C37.5421 3.72889 37.5421 7.18255 35.3644 9.31457L12.4648 31.6428C12.4106 31.6959 12.3515 31.7345 12.2825 31.7634L2.69506 35.9503C2.44872 36.0612 2.18268 36.1191 1.91171 36.1191ZM5.55751 24.6969L1.31064 33.9678C1.1924 34.2186 1.24659 34.5177 1.44859 34.7154C1.64566 34.9132 1.95605 34.9711 2.21224 34.8505L11.6568 30.7071L34.4727 8.45597C36.0985 6.73396 35.9901 4.04724 34.2313 2.45547C32.571 0.95534 30.014 0.950517 28.3537 2.45064L5.55751 24.6969Z" fill="#007FFF"/><path d="M23.6196 6.22912L21.4629 8.3333L28.453 15.2009L30.6097 13.0967L23.6196 6.22912Z" fill="#007FFF"/><path d="M27.2306 2.70356L25.0704 4.81114L32.0605 11.6787L34.2207 9.57117L27.2306 2.70356Z" fill="#007FFF"/><path d="M11.7111 31.5027C11.5485 31.5027 11.3908 31.44 11.2775 31.3242L4.92691 25.0874C4.6855 24.851 4.6855 24.47 4.92691 24.2336C5.16832 23.9972 5.55753 23.9972 5.79895 24.2336L12.1495 30.4753C12.386 30.7116 12.386 31.0879 12.1495 31.3242C12.0362 31.44 11.8786 31.5075 11.7111 31.5027Z" fill="#007FFF"/><path d="M2.29609 31.8981L1.33537 33.9916C1.1925 34.2955 1.33537 34.6572 1.64576 34.7971C1.80834 34.8695 1.99063 34.8695 2.15321 34.7971L4.29636 33.8324C3.37505 33.4996 2.64589 32.7953 2.29609 31.8981Z" fill="#007FFF"/><path d="M1.91665 35.1011C1.70973 35.0866 1.50773 35.0094 1.35008 34.8792C1.06432 34.6428 0.970716 34.2473 1.12837 33.9145L2.34036 31.2808L2.54728 31.8307C2.86752 32.67 3.54249 33.3357 4.39974 33.654L4.96139 33.8566L2.29602 35.0143C2.17777 35.0721 2.04968 35.1011 1.91665 35.1011ZM2.32065 32.4771L1.57671 34.0881C1.50773 34.2232 1.53237 34.3824 1.64076 34.4885C1.81319 34.6139 1.90187 34.6573 2.06446 34.5801L3.71985 33.8566C3.13357 33.5334 2.65074 33.0559 2.32065 32.4771Z" fill="#007FFF"/></g><defs><clipPath id="clip0_118_839"><rect width="37" height="38" fill="white"/></clipPath></defs></svg>',
    reverseDirection: true,
    tabs: [
      {
        label: "Identidad visual",
        spanText: "",
        content: `**Creamos identidades visuales consistentes** que refuerzan la imagen de tu empresa, asegurando que todos los elementos gráficos comuniquen eficazmente tu marca en cada punto de contacto.`,
      },
      {
        label: "Impresos y digital",
        spanText: "Material promocional:",
        content: `Cubrimos sus necesidades esenciales de comunicación, desde el **diseño de activos de marca impresos** de uso diario hasta la creación de contenido gráfico optimizado para redes sociales y medios digitales.`,
      },
      {
        label: "Diseño web y rrss",
        content: `**Desarrollamos su presencia digital integral.** Creamos sitios web orientados a resultados y diseñamos estrategias de redes sociales visualmente impactantes para asegurar su crecimiento y visibilidad.`,
      },
    ],
    tabColor: "text-azure",
    tabColorActive: "text-oxfordBlue",
    targetSection: "Principal",
  },
  // Sección Tecnologías web
  {
    alignCenter: true,
    bgColor: "bg-oxfordBlue",
    navButtonBack: true,
    navButton: "text-azure",
    color: "text-columbiaBlue",
    dataColor: "oxfordBlue",
    description:
      "Con un enfoque en la innovación y la eficiencia, construimos soluciones digitales robustas, seguras y escalables.",
    justifyContent: true,
    name: "Web",
    title: "Tecnologías web",
    titleColor: "text-azure",
    serviceImage: "images/novanet-studio-semicirculo-teclado.webp",
    serviceIcon:
      '<svg width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_118_848)"><path d="M34.4419 13.3942H4.5623C3.8323 13.3942 3.23918 12.7999 3.23462 12.0685V10.3314C3.23462 9.59535 3.82774 9.00107 4.5623 9.00107H34.4282C35.1582 9.00107 35.7514 9.59535 35.7514 10.3268C35.7514 10.3268 35.7514 10.3268 35.7514 10.3314V12.0685C35.7514 12.7954 35.1674 13.3851 34.4419 13.3942ZM4.61705 12.0228H34.3963V10.3725H4.61705V12.0228Z" fill="#007FFF"/><path d="M17.2916 28.1645H4.5623C3.8323 28.1645 3.23918 27.5656 3.23462 26.8342V16.4891C3.23462 15.7576 3.8323 15.1633 4.5623 15.1633H17.2916C18.0216 15.1633 18.6147 15.7576 18.6193 16.4891V26.8342C18.6193 27.5656 18.0216 28.1599 17.2916 28.1645ZM4.61705 26.7931H17.2505V16.5348H4.61705V26.7931Z" fill="#007FFF"/> <path d="M34.442 28.1645H21.7264C20.9918 28.1645 20.3987 27.5702 20.3987 26.8342V16.4891C20.3987 15.7576 20.9918 15.1633 21.7218 15.1633C21.7218 15.1633 21.7218 15.1633 21.7264 15.1633H34.442C35.172 15.1633 35.7651 15.7576 35.7651 16.4891V26.8342C35.7651 27.5656 35.172 28.1599 34.442 28.1645ZM21.7674 26.7931H34.3963V16.5348H21.7674V26.7931Z" fill="#007FFF"/><path d="M35.3409 0H3.64998C1.63336 0 0 1.63657 0 3.65714V28.3429C0 30.3634 1.63336 32 3.64998 32H35.35C37.3666 32 39 30.3634 39 28.3429V3.65714C39 1.63657 37.3666 0 35.35 0C35.35 0 35.3455 0 35.3409 0ZM34.4284 2.74286C34.3098 2.51886 34.3919 2.24457 34.6155 2.12571C34.7478 2.05714 34.9075 2.05257 35.0398 2.12571L35.5873 2.67886L36.1165 2.144C36.2945 1.984 36.5682 2.00229 36.7279 2.18514C36.8693 2.34514 36.8739 2.58743 36.7279 2.752L36.2032 3.28686L36.7325 3.81257C36.8511 4.03657 36.7644 4.31086 36.5408 4.42971C36.4131 4.49829 36.258 4.49829 36.1256 4.43429L35.5827 3.904L35.058 4.43886C34.8846 4.59886 34.6155 4.59886 34.4421 4.43886C34.287 4.26514 34.287 4 34.4421 3.82629L34.9668 3.29143L34.4238 2.74743L34.4284 2.74286ZM33.087 3.41029C33.087 3.66171 32.8817 3.86743 32.6308 3.86743H31.0248C30.7876 3.78971 30.6552 3.52914 30.7328 3.29143C30.7784 3.15429 30.8879 3.04457 31.0248 2.99886H32.6582C32.9 2.99886 33.0916 3.19086 33.1053 3.43314L33.087 3.41029ZM35.3226 30.5874H3.64998C2.39073 30.5874 1.36874 29.5634 1.36874 28.3017V5.83314H37.613V28.3337C37.6084 29.5909 36.5956 30.6057 35.3409 30.6103L35.3226 30.5874Z" fill="#007FFF"/></g><defs><clipPath id="clip0_118_848"><rect width="39" height="32" fill="white"/></clipPath></defs></svg>',
    reverseDirection: true,
    tabs: [
      {
        label: "Aplicaciones web",
        content: `**Diseñamos y desarrollamos aplicaciones web** a medida que optimizan procesos internos y externos, impulsando la eficiencia, reduciendo costos y facilitando el crecimiento digital estratégico de su negocio.`,
      },
      {
        label: "Soporte técnico",
        content: `Nos encargamos del **soporte técnico y la optimización web** para que su sitio siempre sea seguro, rápido y funcional.`,
      },
      {
        label: "Pagos online",
        content: `Implementamos **botones de pago online seguros y optimizados** que simplifican el proceso de compra. Garantizamos una experiencia de usuario rápida y confiable para que sus clientes completen sus pedidos sin fricciones.`,
      },
    ],
    tabColor: "text-azure",
    targetSection: "Principal",
  },
  // Sección Asesoría
  {
    alignCenter: true,
    bgColor: "bg-azure",
    navButtonBack: true,
    navButton: "text-orfordBlue",
    color: "text-columbiaBlue",
    dataColor: "oxfordBlue",
    description:
      "Trabajamos de la mano con nuestros clientes para integrar su visión con nuestra metodología. Esta colaboración profunda nos permite generar estrategias precisas y soluciones personalizadas que garantizan el cumplimiento de sus objetivos de negocio.",
    justifyContent: true,
    buttonLink: "#",
    name: "Asesoria",
    title: "Asesoría",
    titleColor: "text-columbiaBlue",
    serviceImage: "images/novanet-studio-semicirculo-piezas-ajedrez.webp",
    serviceIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="33" height="38" fill="none"><g fill="#001933" clip-path="url(#a)"><path d="M10.02 30.082c0-2.587-2.012-4.735-4.628-4.934 1.007-.2 1.771-1.075 1.771-2.11A2.152 2.152 0 0 0 4.99 20.89a2.152 2.152 0 0 0-2.173 2.149c0 1.034.764 1.91 1.77 2.109C2.013 25.386 0 27.495 0 30.082a.53.53 0 0 0 .523.517h2.173v.438c0 1.273 1.046 2.307 2.334 2.307s2.334-1.034 2.334-2.307v-.438h2.214c.201 0 .443-.239.443-.517Zm11.47 4.655c0-2.586-2.012-4.735-4.628-4.934 1.006-.199 1.77-1.074 1.77-2.109a2.152 2.152 0 0 0-2.172-2.148 2.152 2.152 0 0 0-2.173 2.148c0 1.035.764 1.91 1.77 2.11-2.575.238-4.587 2.347-4.587 4.933a.53.53 0 0 0 .523.517h2.173v.438c0 1.273 1.046 2.308 2.334 2.308s2.334-1.035 2.334-2.308v-.438h2.213c.202 0 .443-.238.443-.517Zm6.842-9.589c1.006-.2 1.77-1.075 1.77-2.11a2.152 2.152 0 0 0-2.173-2.148 2.152 2.152 0 0 0-2.173 2.149c0 1.034.765 1.91 1.77 2.109-2.575.199-4.627 2.347-4.627 4.934a.53.53 0 0 0 .523.517h2.213v.438c0 1.273 1.047 2.307 2.334 2.307 1.288 0 2.335-1.034 2.335-2.307v-.438h2.173a.53.53 0 0 0 .523-.517c-.08-2.587-2.093-4.696-4.668-4.934ZM16.54 23.675c-.2 0-.362-.119-.442-.318l-1.771-4.934a8.628 8.628 0 0 1-2.978-1.313l-5.151 1.592c-.202.04-.403 0-.524-.16a.485.485 0 0 1-.04-.517l2.616-4.178a9.366 9.366 0 0 1-1.167-4.496C7.123 4.178 11.349 0 16.581 0c5.231 0 9.457 4.178 9.457 9.35a9.162 9.162 0 0 1-1.207 4.577l2.495 4.098c.08.16.08.358-.04.517a.465.465 0 0 1-.484.16l-5.07-1.513c-.805.518-1.73.916-2.656 1.194l-2.093 5.014a.547.547 0 0 1-.443.278Zm-5.15-7.52c.08 0 .2.04.28.08a8.644 8.644 0 0 0 3.1 1.352c.16.04.281.16.322.279l1.489 4.059 1.73-4.139a.458.458 0 0 1 .322-.278c1.006-.239 1.932-.677 2.777-1.234a.472.472 0 0 1 .402-.08l4.145 1.234-2.012-3.302a.502.502 0 0 1 0-.478 8.206 8.206 0 0 0 1.207-4.337c0-4.655-3.823-8.436-8.531-8.436-4.709 0-8.532 3.78-8.532 8.436a8.52 8.52 0 0 0 1.167 4.297c.08.16.08.319 0 .478l-2.133 3.382 4.186-1.273c0-.04.04-.04.08-.04Z"/><path d="M11.791 10.982a1.52 1.52 0 0 1-1.529-1.512 1.52 1.52 0 0 1 1.53-1.512A1.52 1.52 0 0 1 13.32 9.47a1.52 1.52 0 0 1-1.529 1.512Zm0-2.109a.615.615 0 0 0-.603.597c0 .318.281.597.603.597a.615.615 0 0 0 .604-.597.59.59 0 0 0-.604-.597Zm4.789 2.109a1.52 1.52 0 0 1-1.529-1.512 1.52 1.52 0 0 1 1.53-1.512A1.52 1.52 0 0 1 18.11 9.47a1.52 1.52 0 0 1-1.53 1.512Zm0-2.109a.615.615 0 0 0-.603.597c0 .318.281.597.603.597a.616.616 0 0 0 .604-.597.616.616 0 0 0-.604-.597Zm4.79 2.109a1.52 1.52 0 0 1-1.53-1.512 1.52 1.52 0 0 1 1.53-1.512 1.52 1.52 0 0 1 1.529 1.512 1.52 1.52 0 0 1-1.53 1.512Zm0-2.109a.615.615 0 0 0-.604.597c0 .318.281.597.603.597a.615.615 0 0 0 .604-.597.615.615 0 0 0-.604-.597Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h33v38H0z"/></clipPath></defs></svg>',
    reverseDirection: true,
    tabs: [
      {
        label: "Estrategia de marca",
        content: `Construimos y posicionamos tu marca en la mente de los usuarios; incluye elementos como identidad visual, voz de la marca, valores y promesa al cliente. **Una estrategia sólida crea conexiones duraderas y fomenta la lealtad.**`,
      },
      {
        label: "Estrategia de marketing",
        content: `**Desarrollamos y articulamos su propuesta de valor para sus clientes** a través del entendimiento del perfil del usuario para destacarnos frente a la competencia y alcanzar los objetivos comerciales.`,
      },
      {
        label: "Marketing online",
        content: `**Marketing Online con propósito.** Llevamos su marca directamente a su público objetivo, utilizando data y creatividad para impulsar ventas y reconocimiento en todos los canales digitales clave.`,
      },
    ],
    tabColor: "text-oxfordBlue",
    targetSection: "Principal",
  },
  // Sección contacto
  {
    alignCenter: true,
    bgColor: "bg-columbiaBlue",
    bgImage: "background-emblem-contacto",
    buttonType:
      "bg-azure text-columbiaBlue hover:bg-chartreuse hover:text-oxfordBlue",
    color: "text-oxfordBlue",
    dataColor: "columbiaBlue",
    description: "Creemos juntos las estrategias para que alcances tus metas.",
    formButtonText: "Enviar mensaje",
    formFieldBorder: "border-b-[1px] border-oxfordBlue focus:border-raspberry",
    HeroImage: "images/novanet-studio-fichas-colores-juegos-mesa.webp",
    HideOn3xs: true,
    justifyContent: true,
    name: "Servicio-contacto",
    showForm: true,
    placeHolderColor: "placeholder-oxfordBlue",
    title: "¡Queremos conectar contigo!",
    titleColor: "text-azure",
    targetSection: "Principal",
  },
];
</script>

<template>
  <div class="section__container">
    <CommonSection :content="servicios" />
  </div>
</template>
