<script lang="ts" setup>
const BLOG_MAIN_INFO: {
  title: string;
  description: string;
  image?: string;
} = {
  title: "Blog",
  description:
    "Exploramos temas de diseño gráfico, consejos sobre desarrollo web y asesoría personalizada para ayudarte a alcanzar sus metas digitales.",
  image: "images/novanet-studio-og-blog.webp",
};

useHead(() => {
  return {
    title: BLOG_MAIN_INFO.title,
    meta: [
      {
        name: "description",
        content: BLOG_MAIN_INFO.description,
      },
      { property: 'og:title', content: BLOG_MAIN_INFO.title },
      { property: 'og:description', content: BLOG_MAIN_INFO.description },
      { property: 'og:image', content: BLOG_MAIN_INFO.image },
      { name: 'twitter:card', content: BLOG_MAIN_INFO.image },
      { name: 'twitter:title', content: BLOG_MAIN_INFO.title },
      { name: 'twitter:description', content: BLOG_MAIN_INFO.description },
      { name: 'twitter:image', content: BLOG_MAIN_INFO.image },
    ],
  };
});

const blog = [
  {
    alignCenter: true,
    bgColor: "bg-azure",
    bgImage: "background-emblem-blog",
    buttonLink: "/blog#Blog-Articulos",
    buttonText: "Ver artículos",
    buttonType:
      "bg-oxfordBlue text-columbiaBlue hover:bg-raspberry hover:text-white",
    color: "text-columbiaBlue",
    dataColor: "azure",
    description: BLOG_MAIN_INFO.description,
    HeroImage: "images/novanet-studio-modelo-telefono.webp",
    justifyContent: true,
    name: "Blog",
    title: "Creatividad y conocimiento",
    titleColor: "text-oxfordBlue",
  },
];

const recentArticles = {
  alignCenter: true,
  justifyContent: true,
  arrowClass: "border-oxfordBlue text-oxfordBlue",
  bgColor: "bg-white",
  buttonClass:
    "bg-azure text-columbiaBlue hover:bg-raspberry hover:text-oxfordBlue transition-colors",
  color: "text-oxfordBlue",
  dateColor: "text-gray-500",
  dataColor: "columbiaBlue",
  name: "Blog-Recientes",
  oneImageViewer: false,
  sectionTitle: "Lo más reciente",
  titleColor: "text-azure",
};

const blogGallery = {
  alignCenter: true,
  bgColor: "bg-columbiaBlue",
  bgImage: "background-emblem-galeria-blog",
  dataColor: "white",
  name: "Blog-Articulos",
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
