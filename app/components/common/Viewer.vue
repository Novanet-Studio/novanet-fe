<script setup lang="ts">
import { ref, computed } from "vue";

interface ViewerItem {
  title: string;
  description: string;
  date?: string;
  cta_route: string;
  image_url: string;
}

interface ViewerContent {
  oneImageViewer?: boolean;
  items: ViewerItem[];

  sectionTitle?: string;
  containerClass?: string;
  titleColorClass?: string;
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

const currentItem = computed(() => {
  if (!props.content.items || totalItems.value === 0) {
    return null;
  }
  return props.content.items[currentIndex.value];
});

const nextItem = () => {
  currentIndex.value = (currentIndex.value + 1) % totalItems.value;
};

const prevItem = () => {
  currentIndex.value =
    (currentIndex.value - 1 + totalItems.value) % totalItems.value;
};

const carouselStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
}));
</script>

<template>
  <div
    v-if="currentItem"
    class="w-full min-h-screen flex items-start lg:items-center lg:py-16"
    :class="content.containerClass || 'bg-white text-oxfordBlue'"
  >
    <div
      class="container mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 items-start px-6"
    >
      <div class="flex flex-col gap-4 text-left">
        <h2
          v-if="content.sectionTitle"
          class="text-4xl font-bold mb-4"
          :class="content.subtitleColorClass || 'text-azure'"
        >
          {{ content.sectionTitle }}
        </h2>

        <p
          v-if="currentItem.date"
          class="text-sm"
          :class="content.textColorClass || 'text-gray-500'"
        >
          {{ currentItem.date }}
        </p>

        <h3
          class="text-3xl font-bold"
          :class="content.titleColorClass || 'text-oxfordBlue'"
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
              'cta__primary transition duration-200',
              content.buttonClass || '',
            ]"
          >
            Ver más &rarr;
          </NuxtLink>
        </div>
      </div>

      <div class="w-full">
        <div class="relative">
          <div v-if="content.oneImageViewer">
            <NuxtImg
              :src="currentItem.image_url"
              :alt="currentItem.title"
              class="w-full h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>

          <div v-else class="overflow-hidden rounded-lg shadow-2xl">
            <div
              class="flex transition-transform duration-500 ease-in-out"
              :style="carouselStyle"
            >
              <div
                v-for="(item, index) in content.items"
                :key="index"
                class="w-full flex-shrink-0"
              >
                <NuxtImg
                  :src="item.image_url"
                  :alt="item.title"
                  class="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="!content.oneImageViewer && totalItems > 1"
          class="flex items-center gap-4 mt-4"
        >
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
