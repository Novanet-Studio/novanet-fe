<script lang="ts" setup>

//Array with home page content
const home = [
  {
    name: "Principal",
    title: "Novanet Studio",
    class:
      "bg-azure text-columbia-blue bg-emblem-columbia-blue bg-no-repeat bg-[length:22.5rem] bg-bottom justify-end lg:bg-[bottom_right_7rem] lg:bg-[length:65.5rem] md:bg-[length:47.50rem]",
    description:
      "Creatividad, innovación y colaboración para conectar a las empresas con sus usuarios y fortalecer sus objetivos empresariales.",
    buttonText: "Conoce más",
    buttonLink: "#",
    image: "images/principal-nina-mirando-izquierda.webp",
    buttonType: "bg-oxford-blue text-columbia-blue hover:bg-black hover:text-white",
    descriptionClass: ' w-[80%] lg:w-[90%] md:w-[90%]',
    containerClass:'lg:flex lg:justify-center '

  },
  {
    name: "Creatividad",
    title: "Creatividad",
    class:
      "background-emblem-1 bg-oxford-blue text-columbia-blue bg-no-repeat bg-[length:22.5rem] justify-end bg-bottom lg:bg-[length:65.5rem] md:bg-[length:47.50rem]",
    description:
      "Nos apasiona generar ideas innovadoras y hacer de lo común algo que sorprenda en el mercado y conecte con la audiencia de manera efectiva..",
    buttonText: "Conoce más",
    buttonLink: "#",
    image: "images/mujer-joven-sentada-sonriendo.webp",
    buttonType:
      "bg-azure text-columbia-blue hover:bg-black hover:text-white",
    descriptionClass: 'w-[80%] lg:w-[90%] md:w-[90%]',
    containerClass:'lg:flex lg:justify-center '
  },
  {
    name: "Innovación",
    title: "Innovación",
    class:
      "background-emblem-2 bg-azure text-columbia-blue bg-emblem-columbia-blue bg-no-repeat bg-[length:22.5rem] justify-end bg-[bottom_right_6rem] lg:bg-[length:65.5rem] md:bg-[length:47.50rem]",
    description:
      "Estamos comprometidos con la búsqueda constante de nuevas tecnologías y enfoques para ofrecer soluciones avanzadas y eficientes a nuestros clientes.",
    buttonText: "Conoce más",
    buttonLink: "#",
    image: "images/nino-casco-realidad-virtual.webp",
    buttonType: "bg-oxford-blue text-columbia-blue hover:bg-black hover:text-white",
    customClass: "justify-end lg:flex-row lg:items-center",
    descriptionClass: 'w-[80%] lg:w-[90%] md:w-[90%]',
    containerClass:'lg:flex lg:justify-center'
  },
  {
    name: "Colaboración",
    title: "Colaboración",
    class:
      "bg-columbia-blue text-oxford-blue bg-azure-reverse bg-no-repeat bg-[length:22.5rem] justify-end bg-[top_center] lg:bg-[top_right_7rem] lg:bg-[length:65.5rem] md:bg-[length:47.50rem]",
    description:
      "Estamos comprometidos con la búsqueda constante de nuevas tecnologías y enfoques para ofrecer soluciones avanzadas y eficientes a nuestros clientes.",
    buttonText: "Conoce más",
    buttonLink: "#",
    image: "images/grupo-personas-juntando-manos.webp",
    buttonType: " bg-oxford-blue text-columbia-blue hover:bg-black hover:text-white",
    descriptionClass: 'w-[80%] lg:w-[90%] md:w-[90%]',
    containerClass:'lg:flex lg:justify-center '
  },
];
</script>

<template>
  <!-- Componente iterado por los items del array del contenido -->
  <CommonHero :content="home" />
</template>
