<script lang="ts" setup>

//Array with home page content
const home = [
  {
    name: "Principal",
    title: "Novanet Studio",
    color: "text-columbiaBlue",
    bgColor: 'bg-azure',
    bgImage: 'background-emblem-columbia-blue',
    description:
      "Creatividad, innovación y colaboración para conectar a las empresas con sus usuarios y fortalecer sus objetivos empresariales.",
    buttonText: "Conoce más",
    buttonLink: "#",
    image: "images/novanet-studio-nina-mirando-izquierda.webp",
    buttonType: "bg-oxfordBlue text-columbiaBlue hover:bg-black hover:text-white",
    dataColor: 'azure',
  },
  {
    name: "Creatividad",
    title: "Creatividad",
    color: "text-columbiaBlue",
    bgColor: 'bg-oxfordBlue',
    bgImage: 'background-emblem-azure-top-botom',
    description:
      "Nos apasiona generar ideas innovadoras y hacer de lo común algo que sorprenda en el mercado y conecte con la audiencia de manera efectiva..",
    buttonText: "Conoce más",
    buttonLink: "#",
    image: "images/novanet-studio-mujer-joven-sentada-sonriendo.webp",
    buttonType: "bg-azure text-columbiaBlue hover:bg-black hover:text-white",
    dataColor: 'oxfordBlue',
  },
  {
    name: "Innovación",
    title: "Innovación",
    color: "text-columbiaBlue",
    bgColor: 'bg-azure',
    bgImage: 'background-emblem-columbia-blue-top-bottom',
    description:
      "Estamos comprometidos con la búsqueda constante de nuevas tecnologías y enfoques para ofrecer soluciones avanzadas y eficientes a nuestros clientes.",
    buttonText: "Conoce más",
    buttonLink: "#",
    image: "images/novanet-studio-nino-casco-realidad-virtual.webp",
    buttonType: "bg-oxfordBlue text-columbiaBlue hover:bg-black hover:text-white",
    dataColor: 'azure',
  },
  {
    name: "Colaboración",
    title: "Colaboración",
    color: "text-oxfordBlue",
    bgColor: 'bg-columbiaBlue',
    bgImage: 'background-emblem-azure-top',
    description:
      "Estamos comprometidos con la búsqueda constante de nuevas tecnologías y enfoques para ofrecer soluciones avanzadas y eficientes a nuestros clientes.",
    buttonText: "Conoce más",
    buttonLink: "#",
    image: "images/novanet-studio-grupo-personas-juntando-manos.webp",
    buttonType: "bg-azure text-columbiaBlue hover:bg-black hover:text-white",
    dataColor: 'columbiaBlue',
  },
];
</script>

<template>
  <!-- Componente iterado por los items del array del contenido -->
  <CommonHero :content="home" />
</template>
