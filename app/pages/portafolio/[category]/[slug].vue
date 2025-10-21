<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { createExcerpt } from "~/utils/functions";

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
  if (project.value)
    return { title: `${project.value.titulo} | Novanet Studio` };
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
  return {
    title: project.value.titulo,
    date: `${project.value.ano}`,
    topContentImage: project.value.miniatura.url,
    shortDescription: createExcerpt(project.value.descripcion, 180),
    fullContent: project.value.descripcion,
    backLink: {
      url: "/portafolio",
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
      class="bg-oxfordBlue w-full min-h-screen flex justify-center items-center"
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
