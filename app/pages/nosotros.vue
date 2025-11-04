<script lang="ts" setup>
const ABOUT_MAIN_INFO: {
  title: string;
  description: string;
  image?: string;
} = {
  title: "Nosotros",
  description:
    "Somos un estudio de marketing digital especializado en diseño y desarrollo orientado a los usuarios. Ofrecemos soluciones creativas e innovadoras para conectar empresas con su público.",
  image: "images/novanet-studio-og-nosotros.webp"
};

useHead(() => {
  return {
    title: ABOUT_MAIN_INFO.title,
    meta: [
      {
        name: "description",
        content: ABOUT_MAIN_INFO.description,
      },
      { property: 'og:title', content: ABOUT_MAIN_INFO.title },
      { property: 'og:description', content: ABOUT_MAIN_INFO.description },
      { property: 'og:image', content: ABOUT_MAIN_INFO.image },
      { name: 'twitter:card', content: ABOUT_MAIN_INFO.image },
      { name: 'twitter:title', content: ABOUT_MAIN_INFO.title },
      { name: 'twitter:description', content: ABOUT_MAIN_INFO.description },
      { name: 'twitter:image', content: ABOUT_MAIN_INFO.image },
    ],
  };
});

//Array with about us page content
const nosotros = [
  // Sección nosotros
  {
    alignCenter: true,
    bgColor: "bg-oxfordBlue",
    bgImage: "background-emblem-nosotros",
    buttonLink: "#",
    buttonText: "Conoce más",
    buttonType:
      "bg-chartreuse text-oxfordBlue hover:bg-azure hover:text-oxfordBlue",
    color: "text-columbiaBlue",
    dataColor: "oxfordBlue",

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
    dataColor: "columbiaBlue",
    description:
      "Ofrecemos soluciones que permiten a nuestros clientes conectar con sus usuarios de manera auténtica y consolidar sus emprendimientos en el mundo digital.",
    HeroImage: "images/novanet-studio-heroina-brazo-extendido.webp",
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
    dataColor: "white",
    description:
      "Aspiramos a ser reconocidos como líderes en el campo del marketing digital y la comunicación visual, ofreciendo soluciones de vanguardia que inspiren, motiven y transformen.",
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
    dataColor: "oxfordBlue",
    description: "Creemos juntos las estrategias para que alcances tus metas.",
    formButtonText: "Enviar mensaje",
    formFieldBorder: "border-b-[1px] border-oxfordBlue focus:border-raspberry",
    HeroImage: "images/novanet-studio-manos-juntas.webp",
    HideOn3xs: true,
    justifyContent: true,
    name: "Contacto",
    showForm: true,
    title: "¡Queremos conectar contigo!",
    titleColor: "text-oxfordBlue",
    buttonText: null,
    buttonLink: null,
  },
];

const emblenmModifierSource: Record<string, string> = {
  /**
   * Record<SectionName, CustomEmblemColor>
   */
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
