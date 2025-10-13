<script lang="ts" setup>
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

    dataColor: "azure",

    bgColor: "bg-azure",

    HeroImage: "images/novanet-studio-modelo-telefono.webp",
  },
];

const recentArticles = {
  name: "Recientes",

  sectionTitle: "Lo más reciente",
  containerClass: "bg-columbiaBlue text-oxfordBlue",
  titleColorClass: "text-oxfordBlue",
  textColorClass: "text-gray-700",

  buttonClass:
    "bg-oxfordBlue text-columbiaBlue hover:bg-raspberry hover:text-oxfordBlue transition-colors",
  arrowClass: "border-oxfordBlue text-oxfordBlue",

  bgColor: "bg-columbiaBlue",

  dataColor: "columbiaBlue",
};

const blogGallery = {
  name: "Articulos",
  dataColor: "white",
};
</script>

<template>
  <div class="section__container">
    <CommonSection :content="blog" />

    <BlogRecentArticles :content="recentArticles" />

    <BlogGallery :content="blogGallery" />
  </div>
</template>
