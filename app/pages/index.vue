<script lang="ts" setup>
import type { CommonSectionProps } from "~/types";

const HOME_MAIN_INFO: {
  title: string;
  description: string;
  image?: string;
} = {
  title: "Novanet Studio",
  description:
    "Creatividad, innovación y colaboración para ofrecer soluciones digitales a la medida. Diseño centrado en el usuario que conecta, impulsa y hace posible tus metas.",
  image: "images/novanet-studio-og-inicio.webp",
};

const { initObserver } = useSectionObserver();

onMounted(() => {
  nextTick(() => {
    initObserver();
  });
});

useHead(() => {
  return {
    title: HOME_MAIN_INFO.title,
    meta: [
      {
        name: "description",
        content: HOME_MAIN_INFO.description,
      },
      { property: "og:title", content: HOME_MAIN_INFO.title },
      { property: "og:description", content: HOME_MAIN_INFO.description },
      { property: "og:image", content: HOME_MAIN_INFO.image },
      { name: "twitter:card", content: HOME_MAIN_INFO.image },
      { name: "twitter:title", content: HOME_MAIN_INFO.title },
      { name: "twitter:description", content: HOME_MAIN_INFO.description },
      { name: "twitter:image", content: HOME_MAIN_INFO.image },
    ],
  };
});

type HOME_SECTIONS_IDS =
  | "Principal"
  | "Creatividad"
  | "Innovación"
  | "Colaboración"
  | "Contacto";

//Array with home page content
const home: CommonSectionProps<HOME_SECTIONS_IDS>[] = [
  // Sección principal
  {
    name: "Principal",
    alignCenter: true,
    bgColor: "bg-azure",
    bgImage: "background-emblem-main",
    buttonLink: "/nosotros",
    buttonText: "Conócenos",
    buttonType:
      "bg-oxfordBlue text-columbiaBlue hover:bg-raspberry hover:text-white",
    color: "text-columbiaBlue",
    dataColor: "oxfordBlue",
    description: HOME_MAIN_INFO.description,
    HeroImage: "images/novanet-studio-nina-mirando-izquierda.webp",
    justifyEndImage: true,
    title: HOME_MAIN_INFO.title,
    titleColor: "text-columbiaBlue",
  },
  // Sección creatividad
  {
    alignCenter: true,
    bgColor: "bg-oxfordBlue",
    bgImage: "background-emblem-creatividad",
    buttonLink: "/servicios#Diseno",
    buttonText: "Creemos juntos",
    buttonType:
      "bg-azure text-columbiaBlue hover:bg-chartreuse hover:text-oxfordBlue",
    color: "text-columbiaBlue",
    dataColor: "columbiaBlue",
    description:
      "Nos apasiona generar ideas innovadoras y hacer de lo común algo que sorprenda en el mercado y conecte de forma efectiva con tu audiencia.",
    HeroImage: "images/novanet-studio-mujer-joven-sentada-sonriendo.webp",
    justifyEndImage: true,
    name: "Creatividad",
    title: "Creatividad",
    titleColor: "text-columbiaBlue",
  },
  // Sección innovación
  {
    alignCenter: true,
    bgColor: "bg-azure",
    bgImage: "background-emblem-innovacion",
    buttonLink: "/servicios#Web",
    buttonText: "Innovemos juntos",
    buttonType:
      "bg-oxfordBlue text-columbiaBlue hover:bg-raspberry hover:text-white",
    color: "text-columbiaBlue",
    dataColor: "oxfordBlue",
    description:
      "Estamos comprometidos con la búsqueda constante de nuevas tecnologías y enfoques para ofrecer soluciones eficientes a nuestros clientes.",
    HeroImage: "images/novanet-studio-nino-casco-realidad-virtual.webp",
    justifyEndImage: true,
    name: "Innovación",
    title: "Innovación",
    titleColor: "text-oxfordBlue",
  },
  // Sección colaboración
  {
    alignCenter: true,
    bgColor: "bg-columbiaBlue",
    bgImage: "background-emblem-colaboracion",
    buttonLink: "/servicios#Asesoria",
    buttonText: "Colaboremos juntos",
    buttonType:
      "bg-oxfordBlue text-columbiaBlue hover:bg-azure hover:text-columbiaBlue",
    color: "text-oxfordBlue",
    dataColor: "oxfordBlue",
    description:
      "Creemos en el poder del trabajo en equipo, tanto con nuestros clientes como en la  empresa, para lograr resultados increíbles.",
    HeroImage: "images/novanet-studio-grupo-personas-juntando-manos.webp",
    justifyEndImage: true,
    name: "Colaboración",
    title: "Colaboración",
    titleColor: "text-oxfordBlue",
  },
  // Sección contacto
  {
    alignCenter: true,
    bgColor: "bg-oxfordBlue",
    bgImage: "background-emblem-contacto",
    buttonType:
      "bg-azure text-columbiaBlue hover:bg-chartreuse hover:text-oxfordBlue",
    color: "text-columbiaBlue",
    dataColor: "columbiaBlue",
    description: "Creemos juntos estrategias para que logres tus metas.",
    formButtonText: "Enviar mensaje",
    formFieldBorder:
      "border-b-[1px] border-columbiaBlue focus:border-raspberry",

    visualLayers: {
      cssClass: "grid max-w-[60%] lg:max-w-[80%] place-self-center lg:mt-20",
      images: [
        {
          id: "shape-bg",
          type: "image",
          zIndex: 10,
          src: "images/hero-images/novanet-studio-contacto-inicio-elemento.webp",
          animation: {
            initial: { x: -100, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            transition: { delay: 1, duration: 0.8 },
          },
        },
        {
          id: "hero-woman",
          type: "image",
          src: "images/hero-images/novanet-studio-contacto-inicio-rompecabezas.webp",
          zIndex: 20,
          animation: {
            initial: { x: 100, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            transition: { delay: 1, duration: 0.8 },
          },
        },
      ],
    },

    HideOn3xs: true,
    justifyContent: true,
    name: "Contacto",
    showForm: true,
    placeHolderColor: "placeholder-columbiaBlue",
    title: "¡Queremos conectar contigo!",
    titleColor: "text-azure",
  },
];
</script>

<template>
  <div class="section__container">
    <CommonSection :content="home" />
  </div>
</template>
