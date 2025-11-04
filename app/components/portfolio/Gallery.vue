<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted } from "vue";
import { useSectionObserver } from "~/composables/useSectionObserver";
import { animations } from "~/utils/animations";

const props = defineProps<{ content: any; others?: any }>();
const emblemModifierSource = props.others?.emblemModifierSource || {};

const { initObserver, hasBeenAnimated } = useSectionObserver();

const { getCategoriesWithProjects } = usePortfolio();

const { data: categories, pending } = await useAsyncData(
  "categories-with-projects",
  async () => {
    const response = await getCategoriesWithProjects();
    return response.status === "ok" ? response.data : null;
  },
  { lazy: true }
);

watch(pending, (isPending) => {
  if (!isPending) {
    nextTick(() => {
      initObserver();
    });
  }
});

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

  const fromSectionId = props.content.name;

  const allTab = {
    key: "todos",
    label: "Todos",
    description:
      "Explora una selección de nuestros proyectos más destacados en todas las áreas, desde identidad corporativa hasta desarrollo web y gestión de redes sociales.",
    projects: uniqueProjects.map((p: any) => ({
      link: `/portafolio/${p.categorySlug}/${p.slug}?from=${fromSectionId}`,
      title: p.titulo,
      portrait: p.miniatura?.url,
    })),
  };

  const categoryTabs = categories.value.map((category: any) => ({
    key: category.slug,
    label: category.nombre,
    description: category.descripcion,
    projects: category.proyecto.map((project: any) => ({
      link: `/portafolio/${category.slug}/${project.slug}?from=${fromSectionId}`,
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
    :data-emblem-color="
      emblemModifierSource[props.content.name] || props.content.dataColor
    "
    :data-section-index="2"
    :class="[
      props.content.bgColor,
      props.content.bgImage,
      props.content.color,
      props.content.reverseDirection ? 'direction-reverse' : '',
      props.content.justifyContent ? 'justify-center' : '',
      { 'animate-background': hasBeenAnimated(props.content.name) },
    ]"
  >
    <div v-if="pending" class="w-full flex overflow-hidden">
      <p class="text-lg">Cargando portafolio...</p>
    </div>

    <div v-else-if="tabs.length > 0" class="w-full overflow-hidden">
      <nav class="flex gap-x-8" aria-label="Tabs">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          :ref="(el) => (tabRefs[tab.key] = el as HTMLElement)"
          @click="activeTabKey = tab.key"
          :class="[
            'lista pb-3 text-azure text-left transition-colors duration-200 ease-out focus:outline-none',
            activeTabKey === tab.key ? 'font-bold' : '',
          ]"
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
            {{ tab.label }}
          </Motion>
        </button>
      </nav>
      <div
        class="absolute bottom-[1px] h-[2px] bg-azure transition-all duration-300 ease-in-out"
        :style="markerStyle"
      ></div>

      <div v-if="activePanel" class="mt-4 space-y-4">
        <p class="description">
          <Motion
            :initial="animations.description.initial"
            :animate="
              hasBeenAnimated(props.content.name)
                ? animations.description.animate
                : animations.description.initial
            "
            :transition="{ ...animations.description.transition }"
          >
            {{ activePanel.description }}
          </Motion>
        </p>

        <div v-if="activePanel.projects && activePanel.projects.length > 0">
          <div
            class="pb-4 grid grid-cols-1 gap-6 overflow-y-scroll custom-scrollbar-y max-h-[62dvh] sm:grid-cols-2 lg:grid-cols-3 lg:max-h-[54dvh]"
          >
            <Motion
              v-for="project in activePanel.projects"
              :key="project.link"
              :initial="animations.mainTitle.initial"
              :animate="
                hasBeenAnimated(props.content.name)
                  ? animations.mainTitle.animate
                  : animations.mainTitle.initial
              "
              :transition="{ ...animations.mainTitle.transition }"
              class="max-h-[25vh] group rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-cadetGray/30"
            >
              <article>
                <NuxtLink :to="project.link">
                  <NuxtImg
                    v-if="project.portrait"
                    provider="cloudinary"
                    :src="project.portrait"
                    :alt="`Imagen del proyecto ${project.title}`"
                    class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    loading="lazy"
                  />
                </NuxtLink>
              </article>
            </Motion>
          </div>
        </div>

        <div v-else>
          <p>No hay proyectos en esta categoría.</p>
        </div>
      </div>
    </div>

    <div v-else class="flex justify-center items-center w-full max-h-[70dvh]">
      <p class="text-lg text-red-500">
        No se encontraron proyectos para mostrar.
      </p>
    </div>
  </section>
</template>
