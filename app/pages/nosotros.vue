<script lang="ts" setup>
import type { COLORS_MAP_KEYS, CommonSectionProps } from "~/types";

const ABOUT_MAIN_INFO: {
  title: string;
  description: string;
  image?: string;
} = {
  title: "Nosotros",
  description:
    "Somos un equipo multidisciplinario que crea soluciones innovadoras y se especializa en el diseño centrado en los usuarios para conectar a tu empresa con su público.",
  image: "images/novanet-studio-og-nosotros.webp",
};

const { initObserver } = useSectionObserver();

onMounted(() => {
  nextTick(() => {
    initObserver();
  });
});

useHead(() => {
  return {
    title: ABOUT_MAIN_INFO.title,
    meta: [
      {
        name: "description",
        content: ABOUT_MAIN_INFO.description,
      },
      { property: "og:title", content: ABOUT_MAIN_INFO.title },
      { property: "og:description", content: ABOUT_MAIN_INFO.description },
      { property: "og:image", content: ABOUT_MAIN_INFO.image },
      { name: "twitter:card", content: ABOUT_MAIN_INFO.image },
      { name: "twitter:title", content: ABOUT_MAIN_INFO.title },
      { name: "twitter:description", content: ABOUT_MAIN_INFO.description },
      { name: "twitter:image", content: ABOUT_MAIN_INFO.image },
    ],
  };
});

type ABOUT_SECTIONS_IDS = "Nosotros" | "Mision" | "Vision" | "Contacto";

//Array with about us page content
const nosotros: CommonSectionProps<ABOUT_SECTIONS_IDS>[] = [
  // Sección nosotros
  {
    alignCenter: true,
    bgColor: "bg-oxfordBlue",
    emblemAnimation: {
      imageSrc: "images/hero-emblens/nosotros-astronauta.webp",
      direction: "right",
    },
    buttonLink: "/portafolio#Portafolio-Galeria",
    buttonText: "Ver portafolio",
    buttonType:
      "bg-chartreuse text-oxfordBlue hover:bg-azure hover:text-oxfordBlue",
    color: "text-columbiaBlue",
    dataColor: "columbiaBlue",

    description: ABOUT_MAIN_INFO.description,
    name: "Nosotros",
    title: ABOUT_MAIN_INFO.title,
    titleColor: "text-chartreuse",
  },
  // Sección Misión
  {
    alignCenter: true,
    bgColor: "bg-columbiaBlue",
    bgImage: "background-emblem-mision",
    color: "text-oxfordBlue",
    dataColor: "oxfordBlue",
    description:
      "Queremos que conectes de forma genuina y efectiva con tus clientes, usando estrategias innovadoras y herramientas de vanguardia para que puedas llevar tu negocio al siguiente nivel de crecimiento y éxito.",
    visualLayers: {
      cssClass: "grid max-w-[60%] lg:max-w-[80%] place-self-center lg:mb-16",
      images: [
        {
          id: "shape-bg",
          type: "image",
          zIndex: 10,
          src: "images/hero-images/novanet-studio-mision-elemento.webp",
          animation: {
            initial: { x: -100, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            transition: { delay: 1, duration: 0.8 },
          },
        },
        {
          id: "hero-woman",
          type: "image",
          src: "images/hero-images/novanet-studio-mision-persona.webp",
          zIndex: 20,
          animation: {
            initial: { x: 100, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            transition: { delay: 1, duration: 0.8 },
          },
        },
      ],
    },
    justifyContent: true,
    name: "Mision",
    title: "Misión",
    titleColor: "text-azure",
  },
  // Sección Visión
  {
    alignCenter: true,
    bgColor: "bg-white",
    bgImage: "background-emblem-vision",
    color: "text-oxfordBlue",
    dataColor: "oxfordBlue",
    description:
      "Buscamos ser referentes en marketing digital y comunicación visual. Queremos dar soluciones súper innovadoras y creativas que dejen un impacto positivo en cada proyecto.",
    visualLayers: {
      cssClass: "grid max-w-[50%] lg:max-w-[70%] place-self-center lg:mb-16",
      images: [
        {
          id: "shape-bg",
          type: "image",
          zIndex: 10,
          src: "images/hero-images/novanet-studio-vision-elemento.webp",
          animation: {
            initial: { x: -100, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            transition: { delay: 1, duration: 0.8 },
          },
        },
        {
          id: "hero-woman",
          type: "image",
          src: "images/hero-images/novanet-studio-vision-persona.webp",
          zIndex: 20,
          animation: {
            initial: { x: 100, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            transition: { delay: 1, duration: 0.8 },
          },
        },
      ],
    },
    justifyContent: true,
    name: "Vision",
    title: "Visión",
    titleColor: "text-azure",

    flexOrientation: "flex-row",
    reverseDirection: true,
  },
  // Sección contacto
  {
    alignCenter: true,
    bgColor: "bg-azure",
    bgImage: "background-emblem-nosotros-contacto",
    buttonType:
      "bg-oxfordBlue text-columbiaBlue hover:bg-raspberry hover:text-columbiaBlue",
    color: "text-columbiaBlue",
    dataColor: "columbiaBlue",
    description: "Creemos juntos estrategias para que logres tus metas.",
    formButtonText: "Enviar mensaje",
    formFieldBorder: "border-b-[1px] border-oxfordBlue focus:border-raspberry",
    visualLayers: {
      cssClass: "grid max-w-[60%] lg:max-w-[80%] place-self-center lg:mt-20",
      images: [
        {
          id: "shape-bg",
          type: "image",
          zIndex: 10,
          src: "images/hero-images/novanet-studio-contacto-nosotros-elemento.webp",
          animation: {
            initial: { x: -100, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            transition: { delay: 1, duration: 0.8 },
          },
        },
        {
          id: "hero-woman",
          type: "image",
          src: "images/hero-images/novanet-studio-contacto-nosotros-manos.webp",
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
    title: "¡Queremos conectar contigo!",
    titleColor: "text-oxfordBlue",
  },
];

const emblenmModifierSource: Partial<
  Record<ABOUT_SECTIONS_IDS, COLORS_MAP_KEYS>
> = {
  Nosotros: "chartreuse",
};

const others = {
  emblemModifierSource: emblenmModifierSource,
};
</script>

<template>
  <div class="section__container">
    <CommonSection :content="nosotros" :others="others" />
  </div>
</template>
