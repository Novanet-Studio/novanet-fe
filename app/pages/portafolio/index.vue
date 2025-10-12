<script lang="ts" setup>
useHead({
  title: "Portafolio | Novanet Studio",
});

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
    dataColor: "azure",
  },
];

const portfolioSection = {
  componentType: "PortfolioGallery",
  bgColor: "bg-white",
  color: "text-oxfordBlue",
  dataColor: "azureBlue",
  name: "Portafolio",
  title: "Nuestro Trabajo Reciente",
  titleColor: "text-oxfordBlue",
  description:
    "Explora una selección de proyectos que hemos desarrollado para nuestros clientes en diversas industrias.",
};

const { getRecentProjects } = usePortfolio();

const { data: projects, pending: projectsPending } = await useAsyncData(
  "recent-projects",
  async () => {
    const response = await getRecentProjects();

    console.log(response.data);

    if (response.status === "ok") return response.data;

    return [];
  },
  { lazy: true }
);

/*

{
oneImageViewer: true,
item: [
{
  title: '',
  description: '',
  date: '',
  cta_route: '',
  image_url: ''
}
]
}

*/
</script>

<template>
  <!-- <CommonSection :content="portfolio" />

  <PortfolioGallery :content="portfolioSection" /> -->
</template>
