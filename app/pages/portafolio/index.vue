<script lang="ts" setup>
useHead({
  title: "Portafolio | Novanet Studio",
});

const portfolio = [
  {
    name: "Portafolio",

    title: "Portafolio. Creatividad y funcionalidad",
    titleColor: "text-raspberry",
    description:
      "Creamos identidades visuales, desde logotipos hasta materiales de marca coherentes. Construimos aplicaciones interactivas y sitios web utilizando HTML5, CSS3 y frameworks de JavaScript.",
    color: "text-oxfordBlue",

    dataColor: "azure",

    bgColor: "bg-columbiaBlue",
    bgImage: "background-emblem-portafolio",
  },
];

const recents = {
  name: "Recientes",

  sectionTitle: "Lo más reciente",
  containerClass: "bg-transparent text-white",
  bgImage: "background-emblem-proyectos-recientes",
  titleColorClass: "text-azure",
  itemColorClass: "text-columbiaBlue",
  textColorClass: "text-columbiaBlue",
  buttonClass: "bg-azure text-columbiaBlue hover:bg-chartreuse hover:text-oxfordBlue transition-colors",
  arrowClass: "border-azure text-azure",

  bgColor: "bg-oxfordBlue",

  dataColor: "oxfordBlue",

  oneImageViewer: true
};

const gallery = {
  name: "Galeria",
  title: "Nuestros Proyectos",
  titleColor: "text-oxfordBlue",
  bgImage: "background-emblem-galeria",
  description:
    "Explora una selección de proyectos que hemos desarrollado para nuestros clientes en diversas industrias.",
  color: "text-oxfordBlue",

  dataColor: "azure",

  bgColor: "bg-white",
};
</script>

<template>
  <div class="section__container">
    <CommonSection :content="portfolio" />

    <PortfolioRecentProjects :content="recents" />

    <PortfolioGallery :content="gallery" />
  </div>
</template>
