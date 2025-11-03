<script setup lang="ts">
interface DetailData {
  title: string;
  date: string;
  portrait?: string;
  topContentImage?: string;
  shortDescription?: string;
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
    <div :class="[
      styles.article
        ? 'flex flex-col gap-1 md:flex-row-reverse md:gap-5 lg:flex-col lg:gap-3 lg:h-[75vh] xl:h-[66vh]'
        : 'flex flex-col gap-1 lg:gap-3 lg:h-[75vh] xl:h-[66vh]',
    ]">
      <div :class="[
        styles.article
          ? 'flex flex-col gap-2 justify-center'
          : 'flex flex-col gap-2',
      ]">

        <Motion :key="data.backLink.text" :initial="animations.FifthElement.initial"
          :animate="animations.FifthElement.animate" :transition="{ ...animations.FifthElement.transition }">
          <NuxtLink :to="data.backLink.url" class="cta__navigation pb-6" :class="styles.linkClass">
            <span>←&nbsp;</span>
            {{ data.backLink.text }}
          </NuxtLink>
        </Motion>

        <Motion :key="data.date" :initial="animations.FourthElement.initial" :animate="animations.FourthElement.animate"
          :transition="{ ...animations.FourthElement.transition }">
          <time
            class="text-[1rem] leading-[1.25rem] md:text-[1.125rem] md:leading-[1.75rem] 3xl:text-[1.563rem] 3xl:leading-[1.813rem]"
            :class="styles.dateClass">
            {{ data.date }}
          </time>
        </Motion>

        <Motion :key="data.title" :initial="animations.mainTitle.initial" :animate="animations.mainTitle.animate"
          :transition="{ ...animations.mainTitle.transition }">
          <div class="flex flex-wrap">
            <h1 class="main__title" :class="styles.titleClass">
              {{ data.title }}
            </h1>
          </div>
        </Motion>

        <Motion :key="data.title" :initial="animations.description.initial" :animate="animations.description.animate"
          :transition="{ ...animations.description.transition }">
          <p v-if="data.shortDescription" class="description__short text-columbiaBlue">
            {{ data.shortDescription }}
          </p>
        </Motion>
      </div>

      <Motion :key="data.portrait" :initial="animations.mainTitle.initial" :animate="animations.mainTitle.animate"
        :transition="{ ...animations.mainTitle.transition }">

        <div :class="[styles.article ? 'md:w-[80%]' : '']">
          <NuxtImg v-if="data.portrait" :src="data.portrait" :alt="`Imagen del proyecto ${data.title}`"
            class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            loading="lazy" />
        </div>
      </Motion>
      <slot name="sidebar-extra" />
    </div>


    <Motion :key="data.title" :initial="animations.description.initial" :animate="animations.description.animate"
      :transition="{ ...animations.description.transition }">
      <div class="w-full portrait-lg:!h-[82vh] lg:h-[75vh] xl:h-[72vh] 2xl:h-[74vh]">
        <div v-html="markdownToHtml({
          markdown: data.fullContent,
          portrait: data.topContentImage,
        })
          " :class="[
            'detail flex flex-col gap-4 w-full h-full overflow-y-auto pr-0 custom-scrollbar-y lg:pr-6',
            styles.textClass,
          ]" />
      </div>
    </Motion>
  </div>
</template>
