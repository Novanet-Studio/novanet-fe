<script setup lang="ts">
import { computed, watch, nextTick } from "vue";
import { formatDate } from "~/utils/functions";
import { useSectionObserver } from "~/composables/useSectionObserver";
import { animations } from "~/utils/animations";

const props = defineProps<{ content: any; others?: any }>();
const emblemModifierSource = props.others?.emblemModifierSource || {};

const { initObserver, hasBeenAnimated } = useSectionObserver();
const { getAllArticles } = useBlog();

const { data: articles, pending: articlesPending } = await useAsyncData(
  "all-articles-gallery",
  async () => {
    const response = await getAllArticles();
    return response.status === "ok" ? response.data : [];
  },
  { lazy: true }
);

watch(articlesPending, (isPending) => {
  if (!isPending) {
    nextTick(() => {
      initObserver();
    });
  }
});

const formattedArticles = computed(() => {
  if (!articles.value) return [];

  const fromSectionId = props.content.name;

  return articles.value.map((article: any) => {
    const tagSlug = article.tag
      .slice(0, article.tag.indexOf(","))
      .replaceAll(" ", "-");

    const imageUrl = article.imagen[0]?.url;

    return {
      title: article.titulo,
      cta_route: `/blog/${tagSlug}/${article.slug}?from=${fromSectionId}`,
      date: formatDate(article.fecha),
      portrait: imageUrl ? `${imageUrl}` : undefined,
    };
  });
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
      { 'animate-background': hasBeenAnimated(props.content.name) },
    ]"
  >
    <div
      v-if="articlesPending"
      class="w-full flex overflow-hidden max-h-[70dvh] lg:max-h-[70dvh]"
    >
      <p class="text-lg">Cargando artículos...</p>
    </div>

    <div v-else-if="formattedArticles.length > 0">
      <h1 :class="[`main__title pb-8`, props.content.titleColor]">
        <Motion
          :initial="animations.mainTitle.initial"
          :animate="
            hasBeenAnimated(props.content.name)
              ? animations.mainTitle.animate
              : animations.mainTitle.initial
          "
          :transition="{ ...animations.mainTitle.transition }"
        >
          Todos los artículos
        </Motion>
      </h1>

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
              <p class="text-gray-500 text-base">
                <Motion
                  :initial="animations.description.initial"
                  :animate="
                    hasBeenAnimated(props.content.name)
                      ? animations.description.animate
                      : animations.description.initial
                  "
                  :transition="{ ...animations.description.transition }"
                  >{{ article.date }}
                </Motion>
              </p>
              <h2
                class="main__title text-oxfordBlue group-hover:text-azure transition-colors duration-300"
              >
                <Motion
                  :initial="animations.mainTitle.initial"
                  :animate="
                    hasBeenAnimated(props.content.name)
                      ? animations.mainTitle.animate
                      : animations.mainTitle.initial
                  "
                  :transition="{ ...animations.mainTitle.transition }"
                >
                  {{ article.title }}
                </Motion>
              </h2>
            </div>

            <div
              class="overflow-hidden shadow-sm transform group-hover:scale-[1.02] group-hover:shadow-md transition-all duration-300"
            >
              <Motion
                :initial="animations.mainImage.initial"
                :animate="
                  hasBeenAnimated(props.content.name)
                    ? animations.mainImage.animate
                    : animations.mainImage.initial
                "
                :transition="{ ...animations.mainImage.transition }"
              >
                <NuxtImg
                  v-if="article.portrait"
                  provider="cloudinary"
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
              </Motion>
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
