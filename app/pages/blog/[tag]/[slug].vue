<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { formatDate } from "~/utils/functions";

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

  if (article.value) {
    let metadata: any = [
      {
        property: "og:title",
        content: `${article.value.titulo} | Novanet Studio`,
      },
      { name: "twitter:title", content: article.value.titulo },
    ];

    if (article.value.descripcionCorta) {
      metadata = [
        ...metadata,
        {
          property: "og:description",
          content: article.value.descripcionCorta,
        },
        {
          name: "description",
          content: article.value.descripcionCorta,
        },
        {
          name: "twitter:description",
          content: article.value.descripcionCorta,
        },
      ];
    }

    if (article.value.miniatura?.url)
      metadata.push(
        {
          property: "og:image",
          content: article.value.imagen[0]?.url,
        },
        { name: "twitter:image", content: article.value.imagen[0]?.url }
      );

    return {
      title: `${article.value.titulo} | Novanet Studio`,
      meta: metadata,
    };
  }

  return { title: "Artículo no encontrado" };
});

const articleDetailStyles = {
  bgClass: "bg-columbiaBlue",
  titleClass: "text-oxfordBlue",
  dateClass: "text-oxfordBlue",
  textClass: "text-oxfordBlue",
  linkClass: "text-oxfordBlue",
  article: true,
};

const articleDetailData = computed(() => {
  if (!article.value) return null;

  const fromSection = route.query.from as string | undefined;

  const backUrl = fromSection ? `/blog#${fromSection}` : "/blog";

  const imageUrl = article.value.imagen[0]?.url;

  return {
    title: article.value.titulo,
    date: formatDate(article.value.fecha),
    portrait: imageUrl ? `cloudinary:${imageUrl}` : undefined,
    fullContent: article.value.descripcion,
    backLink: {
      url: backUrl,
      text: "Volver al Blog",
    },
  };
});
</script>

<template>
  <div class="section__container">
    <section
      id="article-detail"
      data-color="columbiaBlue"
      class="bg-columbiaBlue w-full flex justify-center items-center pt-20 pb-20 xs:pt-24 xs:pb-16 md:!pb-20 lg:!pt-28 lg:!pb-24 3xl:!pt-32 3xl:!pb-20"
    >
      <div v-if="pending" class="text-center">
        <p class="text-oxfordBlue text-2xl">Cargando artículo...</p>
      </div>

      <CommonDetail
        v-else-if="articleDetailData"
        :data="articleDetailData"
        :styles="articleDetailStyles"
      />

      <div v-else class="text-center bg-white p-10 rounded-lg shadow-xl">
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
    </section>
  </div>
</template>
