<script setup lang="ts">
interface DetailData {
  title: string;
  subtitle: string;
  shortDescription: string;
  fullContent: string;
  backLink: {
    url: string;
    text: string;
  };
}

interface DetailStyleProps {
  bgClass: string;
  titleClass: string;
  subtitleClass: string;
  textClass: string;
  linkClass: string;
}

const props = defineProps<{
  data: DetailData;

  styles: DetailStyleProps;
}>();
</script>

<template>
  <div class="w-full min-h-screen flex items-center" :class="styles.bgClass">
    <div class="container mx-auto px-6 py-16 md:py-24">
      <div
        class="h-[60vh] grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-start"
      >
        <aside class="flex flex-col gap-3 lg:sticky lg:top-24">
          <NuxtLink
            :to="data.backLink.url"
            class="inline-flex items-center gap-2 mb-6 font-semibold hover:underline w-fit"
            :class="styles.linkClass"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            {{ data.backLink.text }}
          </NuxtLink>

          <p class="font-semibold" :class="styles.subtitleClass">
            {{ data.subtitle }}
          </p>
          <h1 class="text-4xl lg:text-5xl font-bold" :class="styles.titleClass">
            {{ data.title }}
          </h1>
          <p class="text-base leading-relaxed mt-2" :class="styles.textClass">
            {{ data.shortDescription }}
          </p>

          <slot name="sidebar-extra" />
        </aside>

        <div class="h-[60vh]">
          <div
            v-html="markdownToHtml(data.fullContent)"
            class="w-full h-full pr-0 lg:pr-2 overflow-y-scroll flex flex-col gap-2 lg:gap-4 custom-scrollbar-y text-columbiaBlue"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
