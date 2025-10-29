<script setup lang="ts">
import { computed } from "vue";
import { formatDate } from "~/utils/functions";

const props = defineProps<{ content: any; others?: any }>();
const emblemModifierSource = props.others?.emblemModifierSource || {};

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
    :data-emblem-color="
      emblemModifierSource[props.content.name] || props.content.dataColor
    "
    :class="[
      props.content.bgColor,
      props.content.bgImage,
      props.content.color,
      props.content.reverseDirection ? 'direction-reverse' : '',
      props.content.alignCenter ? 'items-center' : '',
      props.content.justifyContent ? 'justify-center' : '',
      'snap-start',
    ]"
  >
    <div
      v-if="articlesPending"
      class="w-full flex overflow-hidden max-h-[70dvh] lg:max-h-[70dvh]"
    >
      <p class="text-lg">Cargando artículos...</p>
    </div>

    <div v-else-if="formattedArticles.length > 0">
      <h2 :class="[`main__title pb-8`, props.content.titleColor]">
        Todos los artículos
      </h2>

      <div
        class="max-h-[70vh] overflow-y-scroll overflow-x-hidden custom-scrollbar-y gap-x-8 gap-y-1 grid grid-cols-1 pr-3 sm:grid-cols-2 lg:max-h-[55vh] lg:grid-cols-3 xl:grid-cols-4"
      >
        <article
          v-for="article in formattedArticles"
          :key="article.slug"
          class="group flex flex-col justify-end pb-8"
        >
          <NuxtLink :to="article.cta_route" class="flex flex-col gap-2">
            <div class="text-left">
              <p class="text-gray-500 text-base">{{ article.date }}</p>
              <h2
                class="main__title text-oxfordBlue group-hover:text-azure transition-colors duration-300"
              >
                {{ article.title }}
              </h2>
            </div>

            <div
              class="overflow-hidden shadow-sm transform group-hover:scale-[1.02] group-hover:shadow-md transition-all duration-300"
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
