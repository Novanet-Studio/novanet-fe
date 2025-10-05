<script lang="ts" setup>

//Array with home page content
const home = [
  // Sección principal
  {
    bgColor: 'bg-azure',
    bgImage: 'background-emblem-main',
    buttonLink: "#",
    buttonText: "Conoce más",
    buttonType: "bg-oxfordBlue text-columbiaBlue hover:bg-raspberry hover:text-white",
    color: "text-columbiaBlue",
    dataColor: 'azure',
    description:
      "Creatividad, innovación y colaboración para conectar a las empresas con sus usuarios y fortalecer sus objetivos empresariales.",
    image: "images/novanet-studio-nina-mirando-izquierda.webp",
    justifyEndImage: true,
    name: "Principal",
    title: "Novanet Studio",
    titleColor: 'text-columbiaBlue',
  },
  // Sección creatividad
  {
    bgColor: 'bg-oxfordBlue',
    bgImage: 'background-emblem-creatividad',
    buttonLink: "#",
    buttonText: "Conoce más",
    buttonType: "bg-azure text-columbiaBlue hover:bg-chartreuse hover:text-oxfordBlue",
    color: "text-columbiaBlue",
    dataColor: 'oxfordBlue',
    description:
      "Nos apasiona generar ideas innovadoras y hacer de lo común algo que sorprenda en el mercado y conecte con la audiencia de manera efectiva..",
    image: "images/novanet-studio-mujer-joven-sentada-sonriendo.webp",
    justifyEndImage: true,
    name: "Creatividad",
    title: "Creatividad",
    titleColor: 'text-columbiaBlue',
  },
  // Sección innovación
  {
    bgColor: 'bg-azure',
    bgImage: 'background-emblem-innovacion',
    buttonLink: "#",
    buttonText: "Conoce más",
    buttonType: "bg-oxfordBlue text-columbiaBlue hover:bg-raspberry hover:text-white",
    color: "text-columbiaBlue",
    dataColor: 'azure',
    description:
      "Estamos comprometidos con la búsqueda constante de nuevas tecnologías y enfoques para ofrecer soluciones avanzadas y eficientes a nuestros clientes.",
    image: "images/novanet-studio-nino-casco-realidad-virtual.webp",
    justifyEndImage: true,
    name: "Innovación",
    title: "Innovación",
    titleColor: 'text-oxfordBlue',
  },
  // Sección colaboración
  {
    bgColor: 'bg-columbiaBlue',
    bgImage: 'background-emblem-colaboracion',
    buttonLink: "#",
    buttonText: "Conoce más",
    buttonType: "bg-oxfordBlue text-columbiaBlue hover:bg-azure hover:text-columbiaBlue",
    color: "text-oxfordBlue",
    dataColor: 'columbiaBlue',
    description:
      "Creemos en el poder de trabajar en equipo, tanto con nuestros clientes como dentro de nuestra empresa, para alcanzar resultados excepcionales.",
    image: "images/novanet-studio-grupo-personas-juntando-manos.webp",
    justifyEndImage: true,
    name: "Colaboración",
    title: "Colaboración",
    titleColor: 'text-oxfordBlue',
  },
  // Sección contacto
  {
    bgColor: 'bg-oxfordBlue',
    bgImage: 'background-emblem-contacto',
    buttonType: "bg-azure text-columbiaBlue hover:bg-chartreuse hover:text-oxfordBlue",
    color: 'text-columbiaBlue',
    dataColor: 'oxfordBlue',
    description: 'Envíanos un mensaje a través de este formulario. Juntos desarrollaremos las tácticas y acciones para posicionarte donde quieres estar.',
    formButtonText: 'Enviar mensaje',
    formFieldBorder: 'border-b-[1px] border-columbiaBlue focus:border-raspberry',
    justifyEndImage: true,
    image: "images/novanet-studio-piezas-azules-rompecabezas.webp",
    name: "Contacto",
    showForm: true,
    title: "¡Queremos conectar contigo!",
    titleColor: 'text-azure',
    buttonText: null,
    buttonLink: null,
  },
];
</script>

<template>
  <!-- Componente iterado por los items del array del contenido -->
  <CommonHero :content="home" />
</template>
