<script setup lang="ts">
interface DetailData {
  title: string;
  date: string;
  portrait?: string;
  topContentImage?: string;
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
  dateClass: string;
  textClass: string;
  linkClass: string;
  article?: boolean;
}

const props = defineProps<{
  data: DetailData;
  styles: DetailStyleProps;
}>();
</script>

<template>
  <div class="h-full grid grid-cols-1 gap-6 items-start overflow-y-scroll lg:grid-cols-[1fr_2fr] xl:overflow-hidden">
    <div
      :class="[styles.article ? 'flex flex-col gap-1 md:flex-row-reverse md:gap-5 lg:flex-col lg:gap-3 lg:h-[75vh] xl:h-[66vh]' : 'flex flex-col gap-1 lg:gap-3 lg:h-[75vh] xl:h-[66vh]']">
      <div :class="[styles.article ? 'flex flex-col justify-center' : '']">
        <NuxtLink :to="data.backLink.url" class="cta__navigation gap- pb-4" :class="styles.linkClass">
          <span>←&nbsp;</span>
          {{ data.backLink.text }}
        </NuxtLink>

        <p class="font-semibold" :class="styles.dateClass">
          {{ data.date }}
        </p>
        <h1 class="main__title" :class="styles.titleClass">
          {{ data.title }}
        </h1>
      </div>

      <div :class="[styles.article ? 'md:w-[80%] lg:w-full' : '']">
        <NuxtImg v-if="data.portrait" :src="data.portrait" :alt="`Imagen del proyecto ${data.title}`"
          class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
          loading="lazy" />
      </div>
      <slot name="sidebar-extra" />
    </div>

    <div class="w-full lg:h-[75vh] xl:h-[72vh] 2xl:h-[74vh]">
      <div v-html="markdownToHtml({
        markdown: data.fullContent,
        portrait: data.topContentImage,
      })
        " :class="[
          'detail w-full h-full pr-0 overflow-y-auto flex flex-col gap-4 custom-scrollbar-y lg:pr-6',
          styles.textClass,
        ]" />
    </div>
  </div>
</template>
