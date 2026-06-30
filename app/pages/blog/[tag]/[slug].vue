<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { formatDate } from '~/utils/functions'

const { initObserver } = useSectionObserver()

const route = useRoute()
const slug = route.params.slug as string

const { getArticleBySlug } = useBlog()

const { data: article, pending } = await useAsyncData(
  `article-${slug}`,
  async () => {
    const response = await getArticleBySlug(slug)
    return response.status === 'ok' && response.data.length > 0
      ? response.data[0]
      : null
  },
)

onMounted(() => {
  nextTick(() => {
    initObserver()
  })
})

useHead(() => {
  if (pending.value) return { title: 'Cargando Artículo...' }

  if (article.value) {
    let metadata: any = [
      {
        property: 'og:title',
        content: `${article.value.titulo} | Novanet Studio`,
      },
      { name: 'twitter:title', content: article.value.titulo },
    ]

    if (article.value.descripcionCorta) {
      metadata = [
        ...metadata,
        {
          property: 'og:description',
          content: article.value.descripcionCorta,
        },
        {
          name: 'description',
          content: article.value.descripcionCorta,
        },
        {
          name: 'twitter:description',
          content: article.value.descripcionCorta,
        },
      ]
    }

    if (article.value.imagen)
      metadata.push(
        { property: 'og:image', content: article.value.imagen },
        { name: 'twitter:image', content: article.value.imagen },
      )

    return {
      title: `${article.value.titulo} | Novanet Studio`,
      meta: metadata,
    }
  }

  return { title: 'Artículo no encontrado' }
})

const articleDetailStyles = {
  bgClass: 'bg-columbiaBlue',
  titleClass: 'text-oxfordBlue',
  dateClass: 'text-oxfordBlue',
  textClass: 'text-oxfordBlue',
  linkClass: 'text-oxfordBlue',
  article: true,
}

const articleDetailData = computed(() => {
  if (!article.value) return null

  const fromSection = route.query.from as string | undefined

  const backUrl = fromSection ? `/blog#${fromSection}` : '/blog'

  const imageUrl = article.value.imagen

  return {
    title: article.value.titulo,
    date: formatDate(article.value.fecha),
    portrait: imageUrl ? `${imageUrl}` : undefined,
    fullContent: article.value.descripcion,
    backLink: {
      url: backUrl,
      text: 'Volver al Blog',
    },
  }
})
</script>

<template>
  <div class="section__container">
    <section
      id="article-detail"
      data-color="oxfordBlue"
      class="flex w-full items-center justify-center bg-columbiaBlue pb-20 pt-20 md:!pb-20 lg:!pb-24 lg:!pt-28 xs:pb-16 xs:pt-24 3xl:!pb-20 3xl:!pt-32"
    >
      <div v-if="pending" class="text-center">
        <p class="text-2xl text-oxfordBlue">Cargando artículo...</p>
      </div>

      <CommonDetail
        v-else-if="articleDetailData"
        :data="articleDetailData"
        :styles="articleDetailStyles"
      />

      <div v-else class="bg-white rounded-lg p-10 text-center shadow-xl">
        <h1 class="text-5xl font-bold text-oxfordBlue">404</h1>
        <p class="text-gray-700 mt-2 text-xl">
          El artículo que buscas no existe.
        </p>
        <NuxtLink
          to="/blog"
          class="mt-6 inline-block rounded bg-oxfordBlue px-6 py-2 font-semibold text-columbiaBlue transition-colors hover:bg-raspberry"
        >
          Volver al blog
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
