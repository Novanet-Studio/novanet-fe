<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { createExcerpt } from "~/utils/functions";

const route = useRoute();

const slug = route.params.slug as string;

const { getArticleBySlug } = useBlog();

const { data: article, pending } = await useAsyncData(
  `article-${slug}`,
  async () => {
    const response = await getArticleBySlug(slug);

    return response.status === "ok" && response.data.length > 0
      ? response.data[0]
      : null;
  }
);

useHead(() => {
  if (pending.value) return { title: "Cargando Artículo..." };
  if (article.value)
    return { title: `${article.value.titulo} | Blog Novanet Studio` };
  return { title: "Artículo no encontrado" };
});

const articleDetailStyles = {
  bgClass: "bg-columbiaBlue",
  titleClass: "text-oxfordBlue",
  dateClass: "text-oxfordBlue",
  textClass: "text-oxfordBlue",
  linkClass: "text-oxfordBlue",
};

const articleDetailData = computed(() => {
  if (!article.value) return null;

  return {
    title: article.value.titulo,
    date: formatDate(article.value.fecha),
    shortDescription: createExcerpt(article.value.descripcion, 180),
    fullContent: article.value.descripcion,
    backLink: {
      url: "/blog",
      text: "Volver al Blog",
    },
  };
});
</script>

<template>
  <div class="section__container">
    <section class="bg-columbiaBlue" data-color="oxfordBlue">
      <div
        v-if="pending"
        class="bg-columbiaBlue w-full min-h-screen flex justify-center items-center"
      >
        <p class="text-oxfordBlue text-2xl">Cargando artículo...</p>
      </div>

      <CommonDetail
        v-else-if="articleDetailData"
        :data="articleDetailData"
        :styles="articleDetailStyles"
      />

      <div
        v-else
        class="bg-white w-full min-h-screen flex justify-center items-center"
      >
        <div class="text-center">
          <h1 class="font-bold text-oxfordBlue text-5xl">404</h1>
          <p class="text-gray-700 text-xl mt-2">
            El artículo que buscas no existe.
          </p>
          <NuxtLink
            to="/blog"
            class="inline-block mt-6 px-6 py-2 bg-oxfordBlue text-columbiaBlue rounded font-semibold hover:bg-raspberry transition-colors"
          >
            Volver al blog
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
