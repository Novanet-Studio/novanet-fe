<script setup lang="ts">
import { computed } from "vue";
import { formatDate } from "~/utils/functions";

const { hasBeenAnimated } = useSectionObserver();

const props = defineProps<{ content: any; others?: any }>();
const emblemModifierSource = props.others?.emblemModifierSource || {};

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

  const mappedItems = articles.value.map((article: any) => {
    const fromSectionId = props.content.name;

    const imageUrl = article.imagen[0]?.url;

    return {
      title: article.titulo,
      description: article.descripcionCorta,
      date: formatDate(article.fecha),
      cta_route: `/blog/${article.tag
        .slice(0, article.tag.indexOf(","))
        .replaceAll(" ", "-")}/${article.slug}?from=${fromSectionId}`,
      portrait: imageUrl ? `${imageUrl}` : undefined,
    };
  });

  return {
    ...props.content,
    sectionName: props.content.name,
    items: mappedItems,
  };
});
</script>

<template>
  <section
    :id="props.content.name ? props.content.name : ''"
    :key="props.content.name ? props.content.name : ''"
    :data-color="props.content.dataColor"
    :data-emblem-color="
      emblemModifierSource[props.content.name] || props.content.dataColor
    "
    :class="[
      props.content.bgColor,
      props.content.bgImage,
      props.content.color,
      props.content.alignCenter ? 'items-center' : '',
      props.content.reverseDirection ? 'direction-reverse' : '',
      'justify-center',
      { 'animate-background': hasBeenAnimated(props.content.name) },
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
