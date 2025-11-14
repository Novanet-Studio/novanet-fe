<script lang="ts" setup>
const HOME_MAIN_INFO: {
  title: string;
  description: string;
  image?: string;
} = {
  title: "Novanet Studio",
  description:
    "Creatividad, innovación y colaboración para ayudar a las empresas a conectar con sus usuarios y potenciar sus metas de negocio.",
  image: "images/novanet-studio-og-inicio.webp",
};

const { initObserver } = useSectionObserver();

onMounted(() => {
  nextTick(() => {
    initObserver();
  });
});

useHead(() => {
  return {
    title: HOME_MAIN_INFO.title,
    meta: [
      {
        name: "description",
        content: HOME_MAIN_INFO.description,
      },
      { property: "og:title", content: HOME_MAIN_INFO.title },
      { property: "og:description", content: HOME_MAIN_INFO.description },
      { property: "og:image", content: HOME_MAIN_INFO.image },
      { name: "twitter:card", content: HOME_MAIN_INFO.image },
      { name: "twitter:title", content: HOME_MAIN_INFO.title },
      { name: "twitter:description", content: HOME_MAIN_INFO.description },
      { name: "twitter:image", content: HOME_MAIN_INFO.image },
    ],
  };
});

//Array with home page content
const home = [
  // Sección principal
  {
    alignCenter: true,
    bgColor: "bg-azure",
    bgImage: "background-emblem-main",
    buttonLink: "/nosotros",
    buttonText: "Conócenos",
    buttonType:
      "bg-oxfordBlue text-columbiaBlue hover:bg-raspberry hover:text-white",
    color: "text-columbiaBlue",
    dataColor: "azure",
    description: HOME_MAIN_INFO.description,
    HeroImage: "images/novanet-studio-nina-mirando-izquierda.webp",
    justifyEndImage: true,
    name: "Principal",
    title: HOME_MAIN_INFO.title,
    titleColor: "text-columbiaBlue",
  },
  // Sección creatividad
  {
    alignCenter: true,
    bgColor: "bg-oxfordBlue",
    bgImage: "background-emblem-creatividad",
    buttonLink: "/servicios#Diseno",
    buttonText: "Creemos juntos",
    buttonType:
      "bg-azure text-columbiaBlue hover:bg-chartreuse hover:text-oxfordBlue",
    color: "text-columbiaBlue",
    dataColor: "oxfordBlue",
    description:
      "Nos apasiona generar ideas innovadoras y hacer de lo común algo que sorprenda en el mercado y conecte de forma efectiva con tu audiencia.",
    HeroImage: "images/novanet-studio-mujer-joven-sentada-sonriendo.webp",
    justifyEndImage: true,
    name: "Creatividad",
    title: "Creatividad",
    titleColor: "text-columbiaBlue",
  },
  // Sección innovación
  {
    alignCenter: true,
    bgColor: "bg-azure",
    bgImage: "background-emblem-innovacion",
    buttonLink: "/servicios#Web",
    buttonText: "Innovemos juntos",
    buttonType:
      "bg-oxfordBlue text-columbiaBlue hover:bg-raspberry hover:text-white",
    color: "text-columbiaBlue",
    dataColor: "azure",
    description:
      "Estamos comprometidos con la búsqueda constante de nuevas tecnologías y enfoques para ofrecer soluciones eficientes a nuestros clientes.",
    HeroImage: "images/novanet-studio-nino-casco-realidad-virtual.webp",
    justifyEndImage: true,
    name: "Innovación",
    title: "Innovación",
    titleColor: "text-oxfordBlue",
  },
  // Sección colaboración
  {
    alignCenter: true,
    bgColor: "bg-columbiaBlue",
    bgImage: "background-emblem-colaboracion",
    buttonLink: "/servicios#Asesoria",
    buttonText: "Colaboremos juntos",
    buttonType:
      "bg-oxfordBlue text-columbiaBlue hover:bg-azure hover:text-columbiaBlue",
    color: "text-oxfordBlue",
    dataColor: "columbiaBlue",
    description:
      "Creemos en el poder del trabajo en equipo, tanto con nuestros clientes como en la  empresa, para lograr resultados increíbles.",
    HeroImage: "images/novanet-studio-grupo-personas-juntando-manos.webp",
    justifyEndImage: true,
    name: "Colaboración",
    title: "Colaboración",
    titleColor: "text-oxfordBlue",
  },
  // Sección contacto
  {
    alignCenter: true,
    bgColor: "bg-oxfordBlue",
    bgImage: "background-emblem-contacto",
    buttonType:
      "bg-azure text-columbiaBlue hover:bg-chartreuse hover:text-oxfordBlue",
    color: "text-columbiaBlue",
    dataColor: "oxfordBlue",
    description: "Creemos juntos estrategias para que logres tus metas.",
    formButtonText: "Enviar mensaje",
    formFieldBorder:
      "border-b-[1px] border-columbiaBlue focus:border-raspberry",

    HeroImage: "images/novanet-studio-piezas-azules-rompecabezas.webp",
    HideOn3xs: true,
    justifyContent: true,
    name: "Contacto",
    showForm: true,
    placeHolderColor: "placeholder-columbiaBlue",
    title: "¡Queremos conectar contigo!",
    titleColor: "text-azure",
  },
];
</script>

<template>
  <div class="section__container">
    <CommonSection :content="home" />
  </div>
</template>
