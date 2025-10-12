<script setup lang="ts">
import { ref, computed, watch, nextTick } from "vue";
const props = defineProps<{ content: any }>();

const { getCategoriesWithProjects } = usePortfolio();

const { data: categories, pending } = await useAsyncData(
  "categories-with-projects",
  async () => {
    const response = await getCategoriesWithProjects();
    return response.status === "ok" ? response.data : null;
  },
  { lazy: true }
);

const activeTabKey = ref<string | null>(null);
const tabRefs = ref<{ [key: string]: HTMLElement }>({});
const markerStyle = ref({});

const tabs = computed(() => {
  if (!categories.value) return [];

  const allProjects = categories.value.flatMap((category: any) =>
    category.proyecto.map((project: any) => ({
      ...project,
      categorySlug: category.slug,
    }))
  );

  const uniqueProjects = Array.from(
    new Map(allProjects.map((p: any) => [p.id, p])).values()
  );

  const allTab = {
    key: "todos",
    label: "Todos",
    description:
      "Explora una selección de nuestros proyectos más destacados en todas las áreas, desde identidad corporativa hasta desarrollo web y gestión de redes sociales.",
    projects: uniqueProjects.map((p: any) => ({
      link: `/portafolio/${p.categorySlug}/${p.slug}`,
      title: p.titulo,
      portrait: p.miniatura?.url,
    })),
  };

  const categoryTabs = categories.value.map((category: any) => ({
    key: category.slug,
    label: category.nombre,
    description: category.descripcion,
    projects: category.proyecto.map((project: any) => ({
      link: `/portafolio/${category.slug}/${project.slug}`,
      title: project.titulo,
      portrait: project.miniatura?.url,
    })),
  }));

  return [allTab, ...categoryTabs];
});

const activePanel = computed(() => {
  if (!activeTabKey.value || tabs.value.length === 0) return null;

  return tabs.value.find((tab) => tab.key === activeTabKey.value);
});

function updateMarkerPosition() {
  const activeTabElement = tabRefs.value[activeTabKey.value!];

  if (!activeTabElement) return;

  markerStyle.value = {
    left: `${activeTabElement.offsetLeft}px`,
    width: `${activeTabElement.offsetWidth}px`,
  };
}

watch(tabs, (newTabs) => {
  if (!activeTabKey.value && newTabs.length > 0) {
    activeTabKey.value = newTabs[0].key;
  }
});

watch(
  activeTabKey,
  async () => {
    await nextTick();

    updateMarkerPosition();
  },
  { immediate: true }
);

onMounted(() => {
  activeTabKey.value = "todos";

  updateMarkerPosition();
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
      v-if="pending"
      class="flex justify-center items-center w-full overflow-hidden max-h-[70dvh]"
    >
      <p class="text-lg">Cargando portafolio...</p>
    </div>

    <main
      v-else-if="tabs.length > 0"
      class="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 overflow-hidden max-h-[70dvh]"
    >
      <div class="relative">
        <nav class="flex items-center gap-x-8" aria-label="Tabs">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            :ref="el => (tabRefs[tab.key] = el as HTMLElement)"
            @click="activeTabKey = tab.key"
            :class="[
              'pb-3 px-1 text-lg text-azure font-semibold transition-colors duration-200 ease-out focus:outline-none',
              activeTabKey === tab.key ? 'font-bold' : '',
            ]"
          >
            {{ tab.label }}
          </button>
        </nav>

        <div
          class="absolute bottom-[1px] h-[2px] bg-azure transition-all duration-300 ease-in-out"
          :style="markerStyle"
        ></div>
      </div>

      <div v-if="activePanel" class="mt-4 space-y-4">
        <p class="text-gray-600 max-w-4xl text-base">
          <span class="font-bold text-oxfordBlue"
            >{{ activePanel.label }}:</span
          >
          {{ activePanel.description }}
        </p>

        <div v-if="activePanel.projects && activePanel.projects.length > 0">
          <div
            class="pb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[45dvh] lg:max-h-[50dvh] overflow-y-scroll"
            style="scrollbar-width: none"
          >
            <article
              v-for="project in activePanel.projects"
              :key="project.link"
              class="max-h-[25vh] group rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-cadetGray/30"
            >
              <NuxtLink :to="project.link">
                <NuxtImg
                  v-if="project.portrait"
                  :src="project.portrait"
                  :alt="`Imagen del proyecto ${project.title}`"
                  class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  loading="lazy"
                />
              </NuxtLink>
            </article>
          </div>
        </div>

        <div v-else>
          <p>No hay proyectos en esta categoría.</p>
        </div>
      </div>
    </main>

    <div v-else class="flex justify-center items-center w-full max-h-[70dvh]">
      <p class="text-lg text-red-500">
        No se encontraron proyectos para mostrar.
      </p>
    </div>
  </section>
</template>
