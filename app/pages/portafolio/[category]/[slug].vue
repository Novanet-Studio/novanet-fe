<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const { initObserver } = useSectionObserver()

const route = useRoute()
const slug = route.params.slug as string

const { getProjectBySlug } = usePortfolio()

const { data: project, pending } = await useAsyncData(
  `project-${slug}`,
  async () => {
    const response = await getProjectBySlug(slug)
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
  if (pending.value) return { title: 'Cargando Proyecto...' }
  if (project.value) {
    let metadata: any = [
      {
        property: 'og:title',
        content: `${project.value.titulo} | Novanet Studio`,
      },
    ]

    if (project.value['descripcion-corta']) {
      metadata = [
        ...metadata,
        {
          property: 'og:description',
          content: project.value['descripcion-corta'],
        },
        {
          name: 'description',
          content: project.value['descripcion-corta'],
        },
      ]
    }

    if (project.value.miniatura)
      metadata.push({
        property: 'og:image',
        content: project.value.miniatura,
      })

    return {
      title: `${project.value.titulo} | Novanet Studio`,
      meta: metadata,
    }
  }

  return { title: 'Proyecto no encontrado' }
})

const projectDetailStyles = {
  bgClass: 'bg-oxfordBlue',
  titleClass: 'text-columbiaBlue',
  dateClass: 'text-azure',
  textClass: 'text-columbiaBlue',
  linkClass: 'text-azure',
}

const projectDetailData = computed(() => {
  if (!project.value) return null

  const fromSection = route.query.from as string | undefined

  const backUrl = fromSection ? `/portafolio#${fromSection}` : '/portafolio'

  const imageUrl = project.value.miniatura

  return {
    title: project.value.titulo,
    date: `${project.value.ano}`,
    topContentImage: imageUrl ? `${imageUrl}` : undefined,
    shortDescription: project.value['descripcion-corta'],
    fullContent: project.value.descripcion,
    backLink: {
      url: backUrl,
      text: 'Volver al portafolio',
    },
  }
})
</script>

<template>
  <div class="section__container">
    <section
      id="project-detail"
      data-color="columbiaBlue"
      class="flex w-full items-center justify-center bg-oxfordBlue pb-20 pt-20 md:!pb-20 lg:!pb-24 lg:!pt-28 xs:pb-16 xs:pt-24 3xl:!pb-20 3xl:!pt-32 portrait-lg:!pt-32"
    >
      <ClientOnly>
        <div v-if="pending" class="text-center">
          <p class="text-2xl text-columbiaBlue">Cargando proyecto...</p>
        </div>

        <CommonDetail
          v-else-if="projectDetailData"
          :data="projectDetailData"
          :styles="projectDetailStyles"
        />

        <div v-else class="bg-white rounded-lg p-10 text-center shadow-xl">
          <h1 class="text-5xl font-bold text-oxfordBlue">404</h1>
          <p class="text-gray-700 mt-2 text-xl">
            El proyecto que buscas no existe.
          </p>
          <NuxtLink
            to="/portafolio"
            class="text-white hover:bg-opacity-80 mt-6 inline-block rounded bg-azure px-6 py-2 font-semibold"
          >
            Volver al portafolio
          </NuxtLink>
        </div>
      </ClientOnly>
    </section>
  </div>
</template>
