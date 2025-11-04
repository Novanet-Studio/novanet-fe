<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import { useSectionObserver } from "~/composables/useSectionObserver";
import { animations } from "~/utils/animations";

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
  sectionName: string;
  sectionTitle?: string;
  titleColor?: string;
  itemColorClass?: string;
  dateColor?: string;
  color?: string;
  buttonClass?: string;
  arrowClass?: string;
}

const props = defineProps<{
  content: ViewerContent;
}>();

const { hasBeenAnimated } = useSectionObserver();

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

const gotoItem = (item: ViewerItem) => {
  const index = props.content.items.findIndex((i) => i === item);
  if (index !== -1) {
    currentIndex.value = index;
  }
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
  <div v-if="currentItem">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_3fr] lg:gap-12">
      <div class="flex flex-col gap-4 lg:gap-4">
        <h1
          v-if="content.sectionTitle"
          :class="[`main__title`, content.titleColor]"
        >
          <Motion
            :initial="animations.mainTitle.initial"
            :animate="
              hasBeenAnimated(props.content.sectionName)
                ? animations.mainTitle.animate
                : animations.mainTitle.initial
            "
            :transition="{ ...animations.mainTitle.transition }"
          >
            {{ content.sectionTitle }}
          </Motion>
        </h1>

        <p
          v-if="currentItem.date"
          :class="content.dateColor || 'text-gray-500'"
        >
          <Motion
            :initial="animations.description.initial"
            :animate="
              hasBeenAnimated(props.content.sectionName)
                ? animations.description.animate
                : animations.description.initial
            "
            :transition="{ ...animations.description.transition }"
          >
            {{ currentItem.date }}
          </Motion>
        </p>

        <h2 :class="[`main__title`, content.titleColor || 'text-oxfordBlue']">
          <Motion
            :initial="animations.description.initial"
            :animate="
              hasBeenAnimated(props.content.sectionName)
                ? animations.description.animate
                : animations.description.initial
            "
            :transition="{ ...animations.description.transition }"
          >
            {{ currentItem.title }}
          </Motion>
        </h2>

        <Motion
          :initial="animations.description.initial"
          :animate="
            hasBeenAnimated(props.content.sectionName)
              ? animations.description.animate
              : animations.description.initial
          "
          :transition="{ ...animations.description.transition }"
        >
          <p :class="[`description__short`, content.color || 'text-gray-700']">
            {{ currentItem.description }}
          </p>
        </Motion>

        <Motion
          :initial="animations.cta.initial"
          :animate="
            hasBeenAnimated(props.content.sectionName)
              ? animations.cta.animate
              : animations.cta.initial
          "
          :transition="{ ...animations.cta.transition }"
        >
          <NuxtLink
            :to="currentItem.cta_route"
            :class="[
              'cta__secondary transition duration-200',
              content.buttonClass ||
                'bg-azure text-oxfordBlue hover:bg-opacity-80',
            ]"
          >
            Ver proyecto
            <span>&nbsp;→</span>
          </NuxtLink>
        </Motion>
      </div>

      <Motion
        :initial="animations.mainImage.initial"
        :animate="
          hasBeenAnimated(props.content.sectionName)
            ? animations.mainImage.animate
            : animations.mainImage.initial
        "
        :transition="{ ...animations.mainImage.transition }"
      >
        <div class="flex flex-col">
          <div class="overflow-hidden max-h-[50vh]">
            <div
              ref="carouselTrackEl"
              class="flex gap-8 md:max-h-[30vh] lg:max-h-[50vh] transition-transform duration-500 ease-in-out"
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
                <NuxtLink v-if="item === currentItem" :to="item.cta_route">
                  <NuxtImg
                    :src="item.portrait"
                    :alt="item.title"
                    class="md:max-h-[30vh] lg:max-h-[50vh] w-full h-auto object-cover"
                  />
                </NuxtLink>

                <NuxtImg
                  v-else
                  @click="gotoItem(item)"
                  :src="item.portrait"
                  :alt="item.title"
                  class="md:max-h-[30vh] lg:max-h-[50vh] w-full h-auto object-cover cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div v-if="totalItems > 1" class="flex items-center gap-4 mt-8">
            <button
              @click="prevItem"
              :class="[
                'w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:bg-white hover:bg-opacity-10',
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
                'w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:bg-white hover:bg-opacity-10',
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
      </Motion>
    </div>
  </div>
</template>
