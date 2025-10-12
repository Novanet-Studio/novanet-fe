<script setup lang="ts">
import { computed } from "vue";
import { createExcerpt } from "~/utils/functions";

const props = defineProps<{
  content: any;
}>();

const { getRecentArticles } = useBlog();
const { data: articles, pending: articlesPending } = await useAsyncData(
  "recent-articles",
  async () => {
    const response = await getRecentArticles();
    return response.status === "ok" ? response.data : [];
  },
  { lazy: true }
);

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  };
  return new Date(dateString).toLocaleDateString("es-ES", options);
}

const viewerContent = computed(() => {
  if (!articles.value || articles.value.length === 0) {
    return null;
  }

  const mappedItems = articles.value.map((article: any) => ({
    title: article.titulo,
    description: createExcerpt(article.descripcion, 125),
    date: formatDate(article.fecha),
    cta_route: `/blog/${article.slug}`,
    image_url: article.imagen[0]?.url,
  }));

  return {
    ...props.content,
    oneImageViewer: false,
    items: mappedItems,
  };
});
</script>

<template>
  <section
    :id="props.content.name ? props.content.name : ''"
    :data-color="props.content.dataColor"
    :class="[
      props.content.bgColor,
      props.content.bgImage,
      props.content.color,
      props.content.reverseDirection ? 'direction-reverse' : '',
      props.content.justifyContent ? 'justify-center' : '',
    ]"
  >
    <div
      v-if="articlesPending"
      class="w-full min-h-screen flex items-center justify-center bg-columbiaBlue"
    >
      <p class="text-oxfordBlue text-lg">Cargando artículos...</p>
    </div>

    <CommonViewer v-else-if="viewerContent" :content="viewerContent" />

    <div
      v-else
      class="w-full min-h-screen flex items-center justify-center bg-columbiaBlue"
    >
      <p class="text-oxfordBlue text-lg">
        No hay artículos recientes para mostrar.
      </p>
    </div>
  </section>
</template>
