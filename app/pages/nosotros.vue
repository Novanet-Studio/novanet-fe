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
    bgImage: "background-emblem-nosotros",
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
    HeroImage: "images/novanet-studio-heroina-brazo-extendido.webp",
    // visualLayers: [
    //   {
    //     id: "shape-bg",
    //     type: "shape",
    //     bgColor: "bg-azure",
    //     zIndex: 10,

    //     mask: "/masks/rounded-triangle.svg",
    //     animation: {
    //       initial: { x: -100, opacity: 0 },
    //       animate: { x: 0, opacity: 1 },
    //       transition: { delay: 1, duration: 0.8 },
    //     },
    //   },
    //   {
    //     id: "hero-woman",
    //     type: "image",
    //     src: "images/novanet-studio-mujer-joven-sentada-sonriendo.webp",
    //     zIndex: 20,
    //     cssClass: "w-full",
    //     animation: {
    //       initial: { x: 100, opacity: 0 },
    //       animate: { x: 0, opacity: 1 },
    //       transition: { delay: 1, duration: 0.8 },
    //     },
    //   },
    // ],
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
    HeroImage: "images/novanet-studio-bailarina-ballet.webp",
    justifyContent: true,
    name: "Vision",
    title: "Visión",
    titleColor: "text-azure",
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
    HeroImage: "images/novanet-studio-manos-juntas.webp",
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
