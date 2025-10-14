<script lang="ts" setup>
import type { title } from 'process';

useHead({
  title: "Blog | Novanet Studio",
});

const blog = [
  {
    name: "Blog",
    title: "Creatividad y conocimiento",
    titleColor: "text-oxfordBlue",
    description:
      "Exploramos temas de diseño gráfico, consejos sobre desarrollo web y asesoría personalizada para ayudarte a alcanzar sus metas digitales.",
    color: "text-oxfordBlue",
    justifyContent: true,
    dataColor: "azure",
    bgColor: "bg-azure",
    HeroImage: "images/novanet-studio-modelo-telefono.webp",
  },
];

const recentArticles = {
  name: "Recientes",
  title: "Lo más reciente",
  dateColor: "text-gray-500",
  titleColor: "text-azure",
  color: "text-oxfordBlue",
  buttonClass:
    "bg-azure text-columbiaBlue hover:bg-raspberry hover:text-oxfordBlue transition-colors",
  arrowClass: "border-oxfordBlue text-oxfordBlue",
  bgColor: "bg-white",
  dataColor: "columbiaBlue",
};

const blogGallery = {
  bgColor: "bg-columbiaBlue",
  name: "Articulos",
  dataColor: "white",
  titleColor: "text-azure",
};
</script>

<template>
  <div class="section__container">
    <CommonSection :content="blog" />

    <BlogRecentArticles :content="recentArticles" />

    <BlogGallery :content="blogGallery" />
  </div>
</template>
