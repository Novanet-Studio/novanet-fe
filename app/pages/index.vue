<script lang="ts" setup>

//Array with home page content
const home = [
  {
    name: "Principal",
    title: "Novanet Studio",
    titleColor: 'text-columbiaBlue',
    color: "text-columbiaBlue",
    bgColor: 'bg-azure',
    bgImage: 'background-emblem-columbia-blue',
    description:
      "Creatividad, innovación y colaboración para conectar a las empresas con sus usuarios y fortalecer sus objetivos empresariales.",
    buttonText: "Conoce más",
    buttonLink: "#",
    image: "images/novanet-studio-nina-mirando-izquierda.webp",
    buttonType: "bg-oxfordBlue text-columbiaBlue hover:bg-raspberry hover:text-white",
    dataColor: 'azure',
  },
  {
    name: "Creatividad",
    title: "Creatividad",
    titleColor: 'text-columbiaBlue',
    color: "text-columbiaBlue",
    bgColor: 'bg-oxfordBlue',
    bgImage: 'background-emblem-azure-top-botom',
    description:
      "Nos apasiona generar ideas innovadoras y hacer de lo común algo que sorprenda en el mercado y conecte con la audiencia de manera efectiva..",
    buttonText: "Conoce más",
    buttonLink: "#",
    image: "images/novanet-studio-mujer-joven-sentada-sonriendo.webp",
    buttonType: "bg-azure text-columbiaBlue hover:bg-chartreuse hover:text-oxfordBlue",
    dataColor: 'oxfordBlue',
  },
  {
    name: "Innovación",
    title: "Innovación",
    titleColor: 'text-oxfordBlue',
    color: "text-columbiaBlue",
    bgColor: 'bg-azure',
    bgImage: 'background-emblem-columbia-blue-top-bottom',
    description:
      "Estamos comprometidos con la búsqueda constante de nuevas tecnologías y enfoques para ofrecer soluciones avanzadas y eficientes a nuestros clientes.",
    buttonText: "Conoce más",
    buttonLink: "#",
    image: "images/novanet-studio-nino-casco-realidad-virtual.webp",
    buttonType: "bg-oxfordBlue text-columbiaBlue hover:bg-raspberry hover:text-white",
    dataColor: 'azure',
  },
  {
    name: "Colaboración",
    title: "Colaboración",
    titleColor: 'text-oxfordBlue',
    color: "text-oxfordBlue",
    bgColor: 'bg-columbiaBlue',
    bgImage: 'background-emblem-azure-top',
    description:
      "Creemos en el poder de trabajar en equipo, tanto con nuestros clientes como dentro de nuestra empresa, para alcanzar resultados excepcionales.",
    buttonText: "Conoce más",
    buttonLink: "#",
    image: "images/novanet-studio-grupo-personas-juntando-manos.webp",
    buttonType: "bg-oxfordBlue text-columbiaBlue hover:bg-azure hover:text-columbiaBlue",
    dataColor: 'columbiaBlue',
  },
  {
    name: "Contacto",
    title: "¡Queremos conectar contigo!",
    titleColor: 'text-azure',
    color: 'text-columbiaBlue',
    bgColor: 'bg-oxfordBlue',
    bgImage: 'background-emblem-azure-botom',
    description: 'Envíanos un mensaje a través de este formulario. Juntos desarrollaremos las tácticas y acciones para posicionarte donde quieres estar.',
    buttonText: null,
    image: "images/novanet-studio-piezas-azules-rompecabezas.webp",
    buttonType: "bg-azure text-columbiaBlue hover:bg-chartreuse hover:text-oxfordBlue",
    dataColor: 'oxfordBlue',
    showForm: true,
    formButtonText: 'Enviar mensaje',    
    formFieldBorder: 'border-b-[1px] border-columbiaBlue focus:border-raspberry',
  },
];
</script>

<template>
  <!-- Componente iterado por los items del array del contenido -->
  <CommonHero :content="home" />
</template>
