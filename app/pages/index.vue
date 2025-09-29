<script lang="ts" setup>

//Array with home page content
const home = [
  {
    name: "Principal",
    title: "Novanet Studio",
    class:
      "text-columbiaBlue bg-emblem-columbia-blue bg-no-repeat bg-bottom justify-end lg:bg-[bottom_right_7rem] lg:bg-[length:65.5rem] md:bg-[length:47.50rem]",
    bgColor: 'bg-azure',
    description:
      "Creatividad, innovación y colaboración para conectar a las empresas con sus usuarios y fortalecer sus objetivos empresariales.",
    buttonText: "Conoce más",
    buttonLink: "#",
    image: "images/novanet-studio-nina-mirando-izquierda.webp",
    buttonType: "bg-oxfordBlue text-columbiaBlue hover:bg-black hover:text-white",
    descriptionClass: '',
    dataColor: 'azure',
  },
  {
    name: "Creatividad",
    title: "Creatividad",
    class:
      "background-emblem-1 text-columbiaBlue bg-no-repeat justify-end bg-bottom lg:bg-[length:65.5rem] md:bg-[length:47.50rem]",
    bgColor: 'bg-oxfordBlue',
    description:
      "Nos apasiona generar ideas innovadoras y hacer de lo común algo que sorprenda en el mercado y conecte con la audiencia de manera efectiva..",
    buttonText: "Conoce más",
    buttonLink: "#",
    image: "images/novanet-studio-mujer-joven-sentada-sonriendo.webp",
    buttonType:
      "bg-azure text-columbiaBlue hover:bg-black hover:text-white",
    descriptionClass: '',
    dataColor: 'oxfordBlue',
  },
  {
    name: "Innovación",
    title: "Innovación",
    class:
      "background-emblem-2 text-columbiaBlue bg-emblem-columbia-blue bg-no-repeat justify-end bg-[bottom_right_6rem] lg:bg-[length:65.5rem] md:bg-[length:47.50rem]",
    bgColor: 'bg-azure',
    description:
      "Estamos comprometidos con la búsqueda constante de nuevas tecnologías y enfoques para ofrecer soluciones avanzadas y eficientes a nuestros clientes.",
    buttonText: "Conoce más",
    buttonLink: "#",
    image: "images/novanet-studio-nino-casco-realidad-virtual.webp",
    buttonType: "bg-oxfordBlue text-columbiaBlue hover:bg-black hover:text-white",
    customClass: "justify-end lg:flex-row lg:items-center",
    descriptionClass: '',
    dataColor: 'azure',
  },
  {
    name: "Colaboración",
    title: "Colaboración",
    class:
      "text-oxfordBlue bg-azure-reverse bg-no-repeat justify-end bg-[top_center] lg:bg-[top_right_7rem] lg:bg-[length:65.5rem] md:bg-[length:47.50rem]",
    bgColor: 'bg-columbiaBlue',
    description:
      "Estamos comprometidos con la búsqueda constante de nuevas tecnologías y enfoques para ofrecer soluciones avanzadas y eficientes a nuestros clientes.",
    buttonText: "Conoce más",
    buttonLink: "#",
    image: "images/novanet-studio-grupo-personas-juntando-manos.webp",
    buttonType: " bg-oxfordBlue text-columbiaBlue hover:bg-black hover:text-white",
    descriptionClass: '',
    dataColor: 'columbiaBlue',
  },
];
</script>

<template>
  <!-- Componente iterado por los items del array del contenido -->
  <CommonHero :content="home" />
</template>
