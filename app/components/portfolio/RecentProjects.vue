<script setup lang="ts">
import { computed } from "vue";
import { createExcerpt } from "~/utils/functions";

const props = defineProps<{ content: any; others?: any }>();
const emblemModifierSource = props.others?.emblemModifierSource || {};

const { getRecentProjects } = usePortfolio();
const { data: projects, pending: projectsPending } = await useAsyncData(
  "recent-projects",
  async () => {
    const response = await getRecentProjects();

    console.log("Recent projects response:", response);

    return response.status === "ok" ? response.data : [];
  },
  { lazy: true }
);

const viewerContent = computed(() => {
  if (!projects.value || projects.value.length === 0) {
    return null;
  }

  const mappedItems = projects.value.map((project: any) => ({
    title: project.titulo,
    description: project.descripcionCorta,
    cta_route: `/portafolio/${project.categoria.slug}/${project.slug}`,
    portrait: project.miniatura.url,
  }));

  return {
    ...props.content,
    items: mappedItems,
  };
});
</script>

<template>
  <section
    :id="props.content.name ? props.content.name : ''"
    :data-section-index="1"
    :data-color="props.content.dataColor"
    :data-emblem-color="
      emblemModifierSource[props.content.name] || props.content.dataColor
    "
    :class="[
      props.content.alignCenter ? 'items-center' : '',
      props.content.bgColor,
      props.content.bgImage,
      props.content.color,
      props.content.reverseDirection ? 'direction-reverse' : '',
      props.content.justifyContent ? 'justify-center' : '',
    ]"
  >
    <div
      v-if="projectsPending"
      class="w-full min-h-screen flex items-center justify-center bg-oxfordBlue"
    >
      <p class="text-white text-lg">Cargando proyectos recientes...</p>
    </div>

    <CommonViewer v-else-if="viewerContent" :content="viewerContent" />

    <div
      v-else
      class="w-full min-h-screen flex items-center justify-center bg-oxfordBlue"
    >
      <p class="text-white text-lg">No hay proyectos recientes para mostrar.</p>
    </div>
  </section>
</template>
