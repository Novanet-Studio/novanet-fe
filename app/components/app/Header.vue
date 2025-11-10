<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { colorMap } from "~/utils/colorMap";
import { animations } from "~/utils/animations";

const props = defineProps<{
  color: string;
  emblemColor: string;
}>();

const active = ref("Inicio");
const isOpen = ref(false);
const route = useRoute();

const { navigationLinks } = useNavigationLinks();

function setActive(linkName: string) {
  active.value = linkName;
}

watch(
  () => route.path,
  (newPath) => {
    let bestMatch = null;
    for (const link of navigationLinks) {
      if (newPath.startsWith(link.link)) {
        if (!bestMatch || link.link.length > bestMatch.link.length) {
          bestMatch = link;
        }
      }
    }
    if (bestMatch) {
      active.value = bestMatch.name;
    }
  },
  { immediate: true }
);

watch(
  isOpen,
  (val) => {
    if (import.meta.client) {
      if (val) document.body.style.setProperty("overflow", "hidden");
      else document.body.style.removeProperty("overflow");
    }
  },
  { immediate: true }
);

onMounted(() => {
  document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape" && isOpen.value) isOpen.value = false;
  });
});
</script>

<template>
  <header
    class="fixed top-0 w-full bg-transparent px-6 pt-8 md:px-9 lg:px-12 lg:pt-12 transition-colors"
    :style="{ color: colorMap[color] || '#fff' }"
  >
    <nav
      class="mx-auto h-full flex flex-column flex-wrap content-center justify-between"
      aria-label="Global"
    >
      <Motion
        :initial="animations.emblem.initial"
        :animate="animations.emblem.animate"
        :transition="{ ...animations.emblem.transition }"
      >
        <div class="flex lg:flex-1">
          <NuxtLink to="/" class="logo" @click="setActive('Inicio')">
            <span class="sr-only">Novanet Studio</span>
            <svg
              class="h-[2.1rem] md:h-[2.5rem] lg:h-[3rem]"
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 50 54.04"
            >
              <path
                d="M37.45 28.95c-6.97 0-12.55 5.58-12.55 12.55s5.58 12.55 12.55 12.55S50 48.47 50 41.5s-5.58-12.55-12.55-12.55m0 16.53c-2.39 0-4.18-1.79-4.18-4.18s1.79-4.18 4.18-4.18 4.18 1.79 4.18 4.18-1.79 4.18-4.18 4.18M37.45 0C30.48 0 24.9 5.58 24.9 12.55S30.48 25.1 37.45 25.1 50 19.52 50 12.55 44.42 0 37.45 0m0 16.53c-2.39 0-4.18-1.79-4.18-4.18s1.79-4.18 4.18-4.18 4.18 1.79 4.18 4.18-1.79 4.18-4.18 4.18M12.55 14.34C5.58 14.34 0 19.92 0 26.89s5.58 12.55 12.55 12.55S25.1 33.86 25.1 26.89s-5.58-12.55-12.55-12.55m0 16.53c-2.39 0-4.18-1.79-4.18-4.18s1.79-4.18 4.18-4.18 4.18 1.79 4.18 4.18-1.79 4.18-4.18 4.18"
                :style="{
                  fill: colorMap[emblemColor] || colorMap[color] || '#fff',
                }"
              />
            </svg>
          </NuxtLink>
        </div>
      </Motion>

      <Motion
        :initial="animations.header.initial"
        :animate="animations.header.animate"
        :transition="{ ...animations.header.transition }"
      >
        <div class="md:hidden">
          <button @click="isOpen = !isOpen">
            <svg
              class="h-8 w-8 fill-current"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </Motion>

      <div class="hidden lg:justify-end md:flex">
        <Motion
          :initial="animations.header.initial"
          :animate="animations.header.animate"
          :transition="{ ...animations.header.transition }"
        >
          <ul class="flex list-none md:justify-end md:gap-10 lg:lg:gap-12">
            <li v-for="(item, index) in navigationLinks" :key="index">
              <NuxtLink
                :to="item.link"
                class="pb-2 text-center md:text-[1.125rem] md:leading-[1.75rem] xl:text-[1.375rem] xl:leading-[1.625rem] 3xl:text-[1.563rem] 3xl:leading-[1.813rem]"
                :class="[
                  active === item.name
                    ? `border-b-2`
                    : 'border-b-2 border-transparent',
                  `hover:border-b-2`,
                ]"
                :style="{
                  borderColor:
                    active === item.name
                      ? colorMap[color] || '#fff'
                      : 'transparent',
                  '--hover-border-color': colorMap[color] || '#fff',
                }"
                @click="setActive(item.name)"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </Motion>
      </div>
    </nav>
  </header>
</template>

<style scoped>
a:hover {
  border-color: var(--hover-border-color);
}
</style>
