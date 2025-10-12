<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

const { getProjectBySlug } = usePortfolio();

const { data: project, pending } = await useAsyncData(
  `project-${slug}`,
  async () => {
    const response = await getProjectBySlug(slug);

    if (response.status === "ok" && response.data.length > 0) {
      return response.data[0];
    }

    return null;
  }
);

useHead(() => {
  if (pending.value) {
    return { title: "Cargando Proyecto | Novanet Studio" };
  }

  if (project.value) {
    return { title: `${project.value.titulo} | Novanet Studio` };
  }

  return { title: "Proyecto no encontrado | Novanet Studio" };
});
</script>

<template>
  <section class="bg-oxfordBlue w-full min-h-screen">
    <div
      v-if="pending"
      class="flex justify-center items-center bg-oxfordBlue w-full h-[65vh] overflow-hidden"
    >
      <p class="text-columbiaBlue text-2xl">Cargando proyecto...</p>
    </div>

    <div
      v-else-if="project"
      class="bg-oxfordBlue text-white w-full h-[65vh] overflow-hidden flex items-center"
    >
      <div class="container mx-auto px-6 py-24 lg:py-32">
        <div
          class="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-4 lg:gap-6 items-start"
        >
          <aside class="h-full flex flex-col gap-3">
            <NuxtLink
              to="/portafolio"
              class="inline-flex items-center gap-2 mt-4 mb-8 text-azure font-semibold hover:underline w-fit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Volver al Portafolio
            </NuxtLink>

            <p class="text-azure font-semibold">
              {{ project.ano }}
            </p>
            <h1 class="text-4xl font-bold text-columbiaBlue">
              {{ project.titulo }}
            </h1>
            <p class="text-columbiaBlue text-base leading-relaxed">
              Agregar descripcion corta
            </p>
          </aside>

          <div class="h-[65vh] overflow-hidden">
            <CommonMdParser :markdownText="project.descripcion" />
          </div>
        </div>
      </div>
    </div>

    <div
      v-else
      class="flex justify-center items-center bg-white w-full h-[65vh] overflow-hidden"
    >
      <div class="text-center">
        <h1 class="font-bold text-oxfordBlue text-5xl">404</h1>
        <p class="text-gray-700 text-xl mt-2">
          El proyecto que buscas no existe o fue movido.
        </p>
        <NuxtLink
          to="/portafolio"
          class="inline-block mt-6 px-6 py-2 bg-azure text-oxfordBlue rounded font-semibold hover:bg-opacity-80 transition-colors"
        >
          Volver al Portafolio
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
