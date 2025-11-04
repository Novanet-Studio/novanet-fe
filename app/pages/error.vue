<script lang="ts" setup>
const ERROR_MAIN_INFO: {
  title: string;
  description: string;
  image?: string;
} = {
  title: "Eror 404",
  description:
    "Lo sentimos. No encontramos la página que estás buscando",
  image: "images/novanet-studio-og-inicio.webp",
};

useHead(() => {
  return {
    title: ERROR_MAIN_INFO.title + " | Novanet Studio",
    meta: [
      {
        name: "description",
        content: ERROR_MAIN_INFO.description,
      },
      { property: 'og:title', content: ERROR_MAIN_INFO.title },
      { property: 'og:description', content: ERROR_MAIN_INFO.description },
      { property: 'og:image', content: ERROR_MAIN_INFO.image },
      { name: 'twitter:card', content: ERROR_MAIN_INFO.image },
      { name: 'twitter:title', content: ERROR_MAIN_INFO.title },
      { name: 'twitter:description', content: ERROR_MAIN_INFO.description },
      { name: 'twitter:image', content: ERROR_MAIN_INFO.image },
    ],
  };
});

const error = [
  {
    alignCenter: true,
    bgColor: "bg-chartreuse",
    bgImage: "background-emblem-blog",
    color: "text-OxfordBlue",
    dataColor: "azure",
    description: ERROR_MAIN_INFO.description,
    HeroImage: "images/novanet-studio-404-joven-binoculares.webp",
    justifyContent: true,
    name: "Blog",
    title: "Lo sentimos",
    titleColor: "text-oxfordBlue",
  },
];
</script>

<template>
  <div class="section__container">

    <CommonSection :content="error" />
    
  </div>
</template>
