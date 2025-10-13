<script setup lang="ts">
import { computed } from "vue";
import { createExcerpt, formatDate } from "~/utils/functions";

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

const viewerContent = computed(() => {
  if (!articles.value || articles.value.length === 0) {
    return null;
  }

  console.log(articles);

  const mappedItems = articles.value.map((article: any) => ({
    title: article.titulo,
    description: createExcerpt(article.descripcion, 125),
    date: formatDate(article.fecha),
    cta_route: `/blog/${String(article.tag).trim()}/${article.slug}`,
    portrait: article.imagen[0]?.url,
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
