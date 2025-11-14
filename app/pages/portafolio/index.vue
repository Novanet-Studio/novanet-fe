<script lang="ts" setup>
const PORTFOLIO_MAIN_INFO: {
  title: string;
  description: string;
  image?: string;
} = {
  title: "Portafolio",
  description:
    "Diseñamos material de marca coherente a través de la creación de logos, material impreso, digital y audiovisual. Construimos sitios y aplicaciones web modernos, utilizando plataformas y tecnologías de vanguardia.",
  image: "images/novanet-studio-og-portafolio.webp"
};

const { initObserver } = useSectionObserver();

onMounted(() => {
  nextTick(() => {
    initObserver();
  });
});

useHead(() => {
  return {
    title: PORTFOLIO_MAIN_INFO.title,
    meta: [
      {
        name: "description",
        content: PORTFOLIO_MAIN_INFO.description,
      },
      { property: 'og:title', content: PORTFOLIO_MAIN_INFO.title },
      { property: 'og:description', content: PORTFOLIO_MAIN_INFO.description },
      { property: 'og:image', content: PORTFOLIO_MAIN_INFO.image },
      { name: 'twitter:card', content: PORTFOLIO_MAIN_INFO.image },
      { name: 'twitter:title', content: PORTFOLIO_MAIN_INFO.title },
      { name: 'twitter:description', content: PORTFOLIO_MAIN_INFO.description },
      { name: 'twitter:image', content: PORTFOLIO_MAIN_INFO.image },
    ],
  };
});

const portfolio = [
  {
    alignCenter: true,
    bgColor: "bg-columbiaBlue",
    bgImage: "background-emblem-portafolio",
    color: "text-oxfordBlue",
    dataColor: "columbiaBlue",
    description: PORTFOLIO_MAIN_INFO.description,
    name: "Portafolio",
    title: "Creatividad y funcionalidad",
    titleColor: "text-raspberry",
  },
];

const recentsProjects = {
  alignCenter: true,
  arrowClass: "border-azure text-azure",
  bgColor: "bg-oxfordBlue",
  bgImage: "background-emblem-proyectos-recientes",
  dataColor: "oxfordBlue",
  buttonClass:
    "bg-azure text-columbiaBlue hover:bg-chartreuse hover:text-oxfordBlue transition-colors",
  color: "text-columbiaBlue",
  dateColor: "text-gray-400",
  justifyContent: true,
  name: "Portafolio-Recientes",
  oneImageViewer: true,
  sectionTitle: "Lo más reciente",
  titleColor: "text-azure",
};

const gallery = {
  alignCenter: true,
  bgColor: "bg-white",
  bgImage: "background-emblem-galeria",
  color: "text-oxfordBlue",
  dataColor: "white",
  description:
    "Te invitamos a explorar una muestra de nuestro trabajo, cubriendo desde la identidad corporativa hasta el desarrollo web y la gestión de redes sociales.",
  justifyContent: false,
  name: "Portafolio-Galeria",
  title: "Nuestros Proyectos",
  titleColor: "text-oxfordBlue",
};

const emblenmModifierSource: Record<string, string> = {
  /**
   * Record<SectionName, CustomEmblemColor>
   */
  Portafolio: "raspberry",
};

const others = {
  emblemModifierSource: emblenmModifierSource,
};

</script>

<template>
  <div class="section__container">
    <CommonSection :content="portfolio" :others="others" />

    <PortfolioRecentProjects :content="recentsProjects" />

    <PortfolioGallery :content="gallery" />
  </div>
</template>
