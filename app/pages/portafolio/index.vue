<script lang="ts" setup>
useHead({
  title: "Portafolio | Novanet Studio",
});

const portfolio = [
  {
    bgColor: "bg-columbiaBlue",
    bgImage: "background-emblem-portafolio",
    color: "text-oxfordBlue",
    dataColor: "columbiaBlue",
    description:
      "Creamos identidades visuales, desde logotipos hasta materiales de marca coherentes. Construimos aplicaciones interactivas y sitios web utilizando HTML5, CSS3 y frameworks de JavaScript.",
    name: "Portafolio",
    title: "Portafolio. Creatividad y funcionalidad",
    titleColor: "text-raspberry",
  },
];

const recents = {
  arrowClass: "border-azure text-azure",
  bgColor: "bg-oxfordBlue",
  bgImage: "background-emblem-proyectos-recientes",
  dataColor: "oxfordBlue",
  buttonClass:
    "bg-azure text-columbiaBlue hover:bg-chartreuse hover:text-oxfordBlue transition-colors",
  color: "text-columbiaBlue",
  dateColor: "text-gray-400",
  name: "Recientes",
  oneImageViewer: true,
  sectionTitle: "Lo más reciente",
  titleColor: "text-azure",
};

const gallery = {
  bgColor: "bg-white",
  bgImage: "background-emblem-galeria",
  color: "text-oxfordBlue",
  dataColor: "white",
  description:
    "Explora una selección de proyectos que hemos desarrollado para nuestros clientes en diversas industrias.",
  justifyContent: true,
  name: "Galeria",
  title: "Nuestros Proyectos",
  titleColor: "text-oxfordBlue",
};
</script>

<template>
  <div class="section__container">
    <CommonSection :content="portfolio" />

    <PortfolioRecentProjects :content="recents" />

    <PortfolioGallery :content="gallery" />
  </div>
</template>
