<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const slug = route.params.slug as string;

const { getProjectBySlug } = usePortfolio();

const { data: project, pending } = await useAsyncData(
  `project-${slug}`,
  async () => {
    const response = await getProjectBySlug(slug);
    return response.status === "ok" && response.data.length > 0
      ? response.data[0]
      : null;
  }
);

useHead(() => {
  if (pending.value) return { title: "Cargando Proyecto..." };
  if (project.value) {
    let metadata: any = [
      {
        property: "og:title",
        content: `${project.value.titulo} | Novanet Studio`,
      },
    ];

    if (project.value.descripcionCorta) {
      metadata = [
        ...metadata,
        {
          property: "og:description",
          content: project.value.descripcionCorta,
        },
        {
          name: "description",
          content: project.value.descripcionCorta,
        },
      ];
    }

    if (project.value.miniatura?.url)
      metadata.push({
        property: "og:image",
        content: project.value.miniatura.url,
      });

    return {
      title: `${project.value.titulo} | Novanet Studio`,
      meta: metadata,
    };
  }

  return { title: "Proyecto no encontrado" };
});

const projectDetailStyles = {
  bgClass: "bg-oxfordBlue",
  titleClass: "text-columbiaBlue",
  dateClass: "text-azure",
  textClass: "text-columbiaBlue",
  linkClass: "text-azure",
};

const projectDetailData = computed(() => {
  if (!project.value) return null;

  const fromSection = route.query.from as string | undefined;

  const backUrl = fromSection ? `/portafolio#${fromSection}` : "/portafolio";

  const imageUrl = project.value.miniatura.url;

  return {
    title: project.value.titulo,
    date: `${project.value.ano}`,
    topContentImage: imageUrl ? `cloudinary:${imageUrl}` : undefined,
    shortDescription: project.value.descripcionCorta,
    fullContent: project.value.descripcion,
    backLink: {
      url: backUrl,
      text: "Volver al portafolio",
    },
  };
});
</script>

<template>
  <div class="section__container">
    <section
      id="project-detail"
      data-color="oxfordBlue"
      class="bg-oxfordBlue w-full flex justify-center items-center pt-20 pb-20 xs:pt-24 xs:pb-16 md:!pb-20 portrait-lg:!pt-32 lg:!pt-28 lg:!pb-24 3xl:!pt-32 3xl:!pb-20"
    >
      <div v-if="pending" class="text-center">
        <p class="text-columbiaBlue text-2xl">Cargando proyecto...</p>
      </div>

      <CommonDetail
        v-else-if="projectDetailData"
        :data="projectDetailData"
        :styles="projectDetailStyles"
      />

      <div v-else class="text-center bg-white p-10 rounded-lg shadow-xl">
        <h1 class="font-bold text-oxfordBlue text-5xl">404</h1>
        <p class="text-gray-700 text-xl mt-2">
          El proyecto que buscas no existe.
        </p>
        <NuxtLink
          to="/portafolio"
          class="inline-block mt-6 px-6 py-2 bg-azure text-white rounded font-semibold hover:bg-opacity-80"
        >
          Volver al portafolio
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
