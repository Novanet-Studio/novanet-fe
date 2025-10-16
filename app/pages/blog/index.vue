<script lang="ts" setup>

useHead({
  title: "Blog | Novanet Studio",
});

const blog = [
  {
    HeroImage: "images/novanet-studio-modelo-telefono.webp",
    bgColor: "bg-azure",
    color: "text-oxfordBlue",
    dataColor: "azure",
    description:
      "Exploramos temas de diseño gráfico, consejos sobre desarrollo web y asesoría personalizada para ayudarte a alcanzar sus metas digitales.",
    justifyContent: true,
    name: "Blog",
    title: "Creatividad y conocimiento",
    titleColor: "text-oxfordBlue",
  },
];

const recentArticles = {
  arrowClass: "border-oxfordBlue text-oxfordBlue",
  bgColor: "bg-white",
  buttonClass:
    "bg-azure text-columbiaBlue hover:bg-raspberry hover:text-oxfordBlue transition-colors",
  color: "text-oxfordBlue",
  dateColor: "text-gray-500",
  dataColor: "columbiaBlue",
  name: "Recientes",
  oneImageViewer: false,
  title: "Lo más reciente",
  titleColor: "text-azure",
};

const blogGallery = {
  bgColor: "bg-columbiaBlue",
  bgImage: "background-emblem-galeria-blog",
  dataColor: "white",
  name: "Articulos",
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
