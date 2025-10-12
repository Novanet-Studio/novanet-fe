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
</script>

<template>
  <div class="section__container">
    <CommonSection :content="blog" />
  </div>
</template>
