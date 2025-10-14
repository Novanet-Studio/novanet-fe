<script setup lang="ts">
import { computed } from "vue";

import { formatDate } from "~/utils/functions";

const props = defineProps<{
  content: any;
}>();

const { getAllArticles } = useBlog();
const { data: articles, pending: articlesPending } = await useAsyncData(
  "all-articles-gallery",
  async () => {
    const response = await getAllArticles();
    return response.status === "ok" ? response.data : [];
  },
  { lazy: true }
);

const formattedArticles = computed(() => {
  if (!articles.value) return [];

  return articles.value.map((article: any) => ({
    title: article.titulo,
    cta_route: `/blog/${article.tag
      .slice(0, article.tag.indexOf(","))
      .replaceAll(" ", "-")}/${article.slug}`,
    date: formatDate(article.fecha),
    portrait: article.imagen[0]?.url,
  }));
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
      'bg-columbiaBlue text-oxfordBlue py-16 md:py-24 snap-start justify-center',
    ]"
  >
    <div v-if="articlesPending" class="container mx-auto px-6 text-center">
      <p class="text-lg">Cargando artículos...</p>
    </div>

    <div
      v-else-if="formattedArticles.length > 0"
      class="container mx-auto px-6"
    >
      <h2 class="text-3xl lg:text-4xl font-bold text-azure mb-6">
        Todos los artículos
      </h2>

      <div
        class="max-h-[65vh] overflow-y-scroll no-scrollbar grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12"
      >
        <article
          v-for="article in formattedArticles"
          :key="article.slug"
          class="group"
        >
          <NuxtLink :to="article.cta_route" class="flex flex-col gap-2">
            <div class="text-left">
              <p class="text-gray-500 text-base">{{ article.date }}</p>
              <h3
                class="text-lg font-bold text-oxfordBlue group-hover:text-azure transition-colors duration-300"
              >
                {{ article.title }}
              </h3>
            </div>

            <div
              class="rounded-lg overflow-hidden shadow-lg transform group-hover:scale-[1.02] group-hover:shadow-2xl transition-all duration-300"
            >
              <NuxtImg
                v-if="article.portrait"
                :src="article.portrait"
                :alt="`Imagen del artículo ${article.title}`"
                class="w-full h-full object-cover"
                loading="lazy"
              />

              <div
                v-else
                class="w-full h-full bg-gray-200 flex items-center justify-center"
              >
                <svg
                  class="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"
                  ></path>
                </svg>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
    </div>

    <div v-else class="container mx-auto px-6 text-center">
      <p class="text-lg text-red-500">
        No se encontraron artículos para mostrar.
      </p>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
