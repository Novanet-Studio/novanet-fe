<script setup lang="ts">
interface DetailData {
  title: string;
  date: string;
  portrait?: string;
  topContectImage?: string;
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
}

const props = defineProps<{
  data: DetailData;
  styles: DetailStyleProps;
}>();
</script>

<template>
  <section :class="styles.bgClass" class="h-full pt-24 pb-20 md:min-h-screen">
    <div
      class="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 items-start overflow-scroll"
    >
      <div
        class="flex flex-col gap-1 lg:gap-3 lg:h-[75vh] xl:h-[66vh] lg:overflow-y-auto"
      >
        <NuxtLink
          :to="data.backLink.url"
          class="cta__navigation gap- pb-4"
          :class="styles.linkClass"
        >
          <span>←&nbsp;</span>
          {{ data.backLink.text }}
        </NuxtLink>

        <p class="font-semibold" :class="styles.dateClass">
          {{ data.date }}
        </p>
        <h1 class="main__title" :class="styles.titleClass">
          {{ data.title }}
        </h1>

        <div>
          <NuxtImg
            v-if="data.portrait"
            :src="data.portrait"
            :alt="`Imagen del proyecto ${data.title}`"
            class="w-full max-w-[66.66%] h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            loading="lazy"
          />
        </div>

        <p class="text-base leading-relaxed mt-2" :class="styles.textClass">
          {{ data.shortDescription }}
        </p>
        <slot name="sidebar-extra" />
      </div>

      <div class="w-full lg:h-[75vh] xl:h-[66vh]">
        <div
          v-html="
            markdownToHtml({
              markdown: data.fullContent,
              portrait: data.topContectImage,
            })
          "
          :class="[
            'detail w-full h-full pr-0 lg:pr-6 overflow-y-auto flex flex-col gap-4 custom-scrollbar-y xl:pt-2',
            styles.textClass,
          ]"
        />
      </div>
    </div>
  </section>
</template>

<style></style>
