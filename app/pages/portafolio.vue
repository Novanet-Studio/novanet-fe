<script lang="ts" setup>
const portfolio = [
  // Sección Principal
  {
    bgColor: "bg-columbiaBlue",
    bgImage: "background-emblem-portafolio",

    name: "Portafolio",
    title: "Portafolio. Creatividad y funcionalidad",
    titleColor: "text-raspberry",

    description:
      "Creamos identidades visuales, desde logotipos hasta materiales de marca coherentes.  Construimos aplicaciones interactivas y sitios web utilizando HTML5, CSS3 y frameworks de JavaScript.",

    color: "text-oxfordBlue",
    dataColor: "white",
  },
];
</script>

<template>
  <CommonSection :content="portfolio" />
</template>
