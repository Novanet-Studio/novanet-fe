<script lang="ts" setup>

//Array with about us page content
const nosotros = [
   // Sección nosotros
   {
      bgColor: 'bg-oxfordBlue',
      bgImage: 'background-emblem-nosotros',
      buttonLink: '#',
      buttonText: 'Conoce más',
      buttonType: "bg-chartreuse text-oxfordBlue hover:bg-azure hover:text-oxfordBlue",
      color: "text-columbiaBlue",
      dataColor: 'oxfordBlue',
      description: 'Somos una agencia de marketing digital especializada en diseño y desarrollo orientado a los usuarios. Ofrecemos soluciones creativas e innovadoras para conectar empresas con su público.',
      title: 'Nosotros',
      titleColor: 'text-chartreuse',
   },
   // Sección Misión
   {
      bgColor: 'bg-columbiaBlue',
      bgImage: 'background-emblem-mision',
      color: "text-oxfordBlue",
      dataColor: 'columbiaBlue',
      description:
         "Ofrecer soluciones que permitan a nuestros clientes conectar con sus usuarios de manera auténtica y consolidar sus emprendimientos en el mundo digital.",
      image: "images/novanet-studio-heroina-brazo-extendido.webp",
      name: "Mision",
      title: "Misión",
      titleColor: 'text-azure',
   },
   // Sección Visión
   {
      bgColor: 'bg-white',
      bgImage: 'background-emblem-vision',
      color: "text-oxfordBlue",
      dataColor: 'white',
      description:
         "Aspiramos a ser reconocidos como líderes en el campo del marketing digital y la comunicación visual, ofreciendo soluciones de vanguardia que inspiren, motiven y transformen.",
      image: "images/novanet-studio-acrobata-tope-piramide-humana.webp",
      name: "Vision",
      title: "Visión",
      titleColor: 'text-azure',
      reverseDirection: true,
   },
   // Sección contacto
  {
    bgColor: 'bg-azure',
    bgImage: 'background-emblem-nosotros-contacto',
    buttonType: "bg-oxfordBlue text-columbiaBlue hover:bg-raspberry hover:text-columbiaBlue",
    color: 'text-columbiaBlue',
    dataColor: 'oxfordBlue',
    description: 'Envíanos un mensaje a través de este formulario. Juntos desarrollaremos las tácticas y acciones para posicionarte donde quieres estar.',
    formButtonText: 'Enviar mensaje',
    formFieldBorder: 'border-b-[1px] border-oxfordBlue focus:border-raspberry',
    image: "images/novanet-studio-manos-juntas.webp",
    name: "Contacto",
    showForm: true,
    title: "¡Queremos conectar contigo!",
    titleColor: 'text-oxfordBlue',
    buttonText: null,
    buttonLink: null,
  },
]

</script>

<template>
   <!-- Componente iterado por los items del array del contenido -->
   <CommonHero :content="nosotros" />
</template>
