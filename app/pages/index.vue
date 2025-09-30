<script lang="ts" setup>

//Array with home page content
const home = [
  {
    name: "Principal",
    title: "Novanet Studio",
    class:
      "background-emblem-columbia-blue text-columbiaBlue",
    bgColor: 'bg-azure',
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
    class:
      "background-emblem-azure-top-botom text-columbiaBlue",
    bgColor: 'bg-oxfordBlue',
    description:
      "Nos apasiona generar ideas innovadoras y hacer de lo común algo que sorprenda en el mercado y conecte con la audiencia de manera efectiva..",
    buttonText: "Conoce más",
    buttonLink: "#",
    image: "images/novanet-studio-mujer-joven-sentada-sonriendo.webp",
    buttonType:
      "bg-azure text-columbiaBlue hover:bg-black hover:text-white",    
    dataColor: 'oxfordBlue',
  },
  {
    name: "Innovación",
    title: "Innovación",
    class:
      "background-emblem-columbia-blue-top-bottom text-columbiaBlue",
    bgColor: 'bg-azure',
    description:
      "Estamos comprometidos con la búsqueda constante de nuevas tecnologías y enfoques para ofrecer soluciones avanzadas y eficientes a nuestros clientes.",
    buttonText: "Conoce más",
    buttonLink: "#",
    image: "images/novanet-studio-nino-casco-realidad-virtual.webp",
    buttonType: "bg-oxfordBlue text-columbiaBlue hover:bg-black hover:text-white",
    customClass: "justify-end lg:flex-row lg:items-center",    
    dataColor: 'azure',
  },
  {
    name: "Colaboración",
    title: "Colaboración",
    class:
      "background-emblem-azure-top text-oxfordBlue",
    bgColor: 'bg-columbiaBlue',
    description:
      "Estamos comprometidos con la búsqueda constante de nuevas tecnologías y enfoques para ofrecer soluciones avanzadas y eficientes a nuestros clientes.",
    buttonText: "Conoce más",
    buttonLink: "#",
    image: "images/novanet-studio-grupo-personas-juntando-manos.webp",
    buttonType: "bg-oxfordBlue text-columbiaBlue hover:bg-black hover:text-white",    
    dataColor: 'columbiaBlue',
  },
];
</script>

<template>
  <!-- Componente iterado por los items del array del contenido -->
  <CommonHero :content="home" />
</template>
