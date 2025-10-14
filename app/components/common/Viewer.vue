<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";

interface ViewerItem {
  title: string;
  description: string;
  date?: string;
  cta_route: string;
  portrait: string;
}

interface ViewerContent {
  oneImageViewer?: boolean;
  items: ViewerItem[];
  sectionTitle?: string;
  containerClass?: string;
  titleColorClass?: string;
  itemColorClass?: string;
  subtitleColorClass?: string;
  textColorClass?: string;
  buttonClass?: string;
  arrowClass?: string;
}

const props = defineProps<{
  content: ViewerContent;
}>();

const currentIndex = ref(0);
const totalItems = computed(() => props.content.items.length);

const carouselTrackEl = ref<HTMLElement | null>(null);
const itemWidth = ref(0);
const gap = ref(32);

const updateItemWidth = () => {
  if (carouselTrackEl.value?.children[0]) {
    itemWidth.value = (
      carouselTrackEl.value.children[0] as HTMLElement
    ).offsetWidth;
  }
};

onMounted(() => {
  nextTick(() => {
    updateItemWidth();
    window.addEventListener("resize", updateItemWidth);
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", updateItemWidth);
});

const currentItem = computed(() => {
  if (!props.content.items || totalItems.value === 0) return null;
  return props.content.items[currentIndex.value];
});

const nextItem = () => {
  currentIndex.value = (currentIndex.value + 1) % totalItems.value;
};

const prevItem = () => {
  currentIndex.value =
    (currentIndex.value - 1 + totalItems.value) % totalItems.value;
};

const carouselStyle = computed(() => {
  if (itemWidth.value === 0) return { transform: "translateX(0px)" };

  const offset = currentIndex.value * (itemWidth.value + gap.value);
  return {
    transform: `translateX(-${offset}px)`,
  };
});
</script>

<template>
  <div
    v-if="currentItem"
    class="w-full flex items-center lg:py-16"
    :class="content.containerClass || 'bg-columbiaBlue text-oxfordBlue'"
  >
    <div
      class="container mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-12 items-start px-6"
    >
      <div class="flex flex-col gap-2 text-left">
        <h2
          v-if="content.sectionTitle"
          class="text-3xl font-bold mb-6"
          :class="content.titleColorClass || 'text-azure'"
        >
          {{ content.sectionTitle }}
        </h2>

        <p
          v-if="currentItem.date"
          class="text-lg"
          :class="content.textColorClass || 'text-gray-500'"
        >
          {{ currentItem.date }}
        </p>

        <h3
          class="text-2xl lg:text-4xl"
          :class="content.itemColorClass || 'text-oxfordBlue'"
        >
          {{ currentItem.title }}
        </h3>

        <p
          class="text-base leading-relaxed"
          :class="content.textColorClass || 'text-gray-700'"
        >
          {{ currentItem.description }}
        </p>

        <div class="mt-4">
          <NuxtLink
            :to="currentItem.cta_route"
            :class="[
              'inline-block px-8 py-3 font-semibold transition-all duration-300 z-10',
              content.buttonClass ||
                'bg-azure text-oxfordBlue hover:bg-opacity-80',
            ]"
          >
            Leer más &rarr;
          </NuxtLink>
        </div>
      </div>

      <div class="w-full flex flex-col">
        <div class="relative w-full overflow-hidden max-h-[50vh]">
          <div
            ref="carouselTrackEl"
            class="md:max-h-[30vh] lg:max-h-[50vh] flex gap-8 transition-transform duration-500 ease-in-out"
            :style="carouselStyle"
          >
            <div
              v-for="item in content.items"
              :key="item.cta_route"
              :class="[
                'flex-shrink-0 h-full overflow-hidden shadow-xl',
                content.oneImageViewer
                  ? 'w-full'
                  : 'w-1/2 md:w-[40%] lg:w-[45%]',
              ]"
            >
              <NuxtImg
                :src="item.portrait"
                :alt="item.title"
                class="md:max-h-[30vh] lg:max-h-[50vh] w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div v-if="totalItems > 1" class="flex items-center gap-4 mt-8">
          <button
            @click="prevItem"
            :class="[
              'w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:bg-white hover:bg-opacity-10',
              content.arrowClass || 'border-azure text-azure',
            ]"
            aria-label="Anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            @click="nextItem"
            :class="[
              'w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:bg-white hover:bg-opacity-10',
              content.arrowClass || 'border-azure text-azure',
            ]"
            aria-label="Siguiente"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
