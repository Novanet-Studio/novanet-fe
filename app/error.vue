<script setup lang="ts">
import { useSectionObserver } from "~/composables/useSectionObserver";
import { animations } from "~/utils/animations";

const ERROR_MAIN_INFO: {
   title: string;
   description: string;
   image?: string;
} = {
   title: "Página no encontrada",
   description:
      "Lo sentimos. No encontramos la página que estás buscando",
   image: "images/novanet-studio-og-inicio.webp",
};

useHead(() => {
   return {
      title: ERROR_MAIN_INFO.title + " | Novanet Studio",
      meta: [
         {
            name: "description",
            content: ERROR_MAIN_INFO.description,
         },
         { property: 'og:title', content: ERROR_MAIN_INFO.title },
         { property: 'og:description', content: ERROR_MAIN_INFO.description },
         { property: 'og:image', content: ERROR_MAIN_INFO.image },
         { name: 'twitter:card', content: ERROR_MAIN_INFO.image },
         { name: 'twitter:title', content: ERROR_MAIN_INFO.title },
         { name: 'twitter:description', content: ERROR_MAIN_INFO.description },
         { name: 'twitter:image', content: ERROR_MAIN_INFO.image },
      ],
   };
});

const error: {
   alignCenter: boolean
   bgColor: string,
   bgImage: string,
   color: string,
   dataColor: string,
   description: string,
   HeroImage: string,
   justifyContent: boolean
   justifyEndImage?: boolean,
   name: string,
   title: string,
   titleColor: string,
}[] = [
      {
         alignCenter: true,
         bgColor: "bg-chartreuse",
         bgImage: "background-emblem-blog",
         color: "text-OxfordBlue",
         dataColor: "azure",
         description: ERROR_MAIN_INFO.description,
         HeroImage: "images/novanet-studio-404-joven-binoculares.webp",
         justifyContent: true,
         name: "Error",
         title: "Página no encontrada",
         titleColor: "text-oxfordBlue",
      },
   ];

const currentColor = "columbiaBlue";
const emblemColor = "chartreuse";
</script>

<template>
   <div>
      <AppHeader :color="currentColor" :emblem-color="emblemColor" />
      <AppDrawer :color="currentColor" />
      <main>
         <div class="section__container">
            <section :id="item.name" v-for="item in error" :key="item.name" :data-color="item.dataColor"
               :data-emblem-color="emblemColor" :class="[
                  item.bgColor,
                  item.bgImage,
                  item.color,
                  item.alignCenter ? 'items-center' : '',
                  item.justifyEndImage ? 'justify-end' : '',
                  item.justifyContent ? 'justify-center' : '',
               ]">
               <div :class="[`flex flex-col gap-4 lg:gap-6 portrait-lg:w-full lg:w-2/4`]">

                  <Motion :key="`mainTitle-${item.name}`" :initial="animations.mainTitle.initial"
                     :animate="animations.mainTitle.animate" :transition="{ ...animations.mainTitle.transition }">
                     <div class="flex flex-wrap">
                        <h1 :class="[`main__title`, item.titleColor]">{{ item.title }}</h1>
                     </div>
                  </Motion>

                  <Motion v-if="item.description" :key="`desc-${item.name}`" :initial="animations.description.initial"
                     :animate="animations.description.animate" :transition="{ ...animations.description.transition }">
                     <p v-if="item.description" class="description">
                        {{ item.description }}
                     </p>
                  </Motion>
               </div>

               <div v-if="item.HeroImage" :class="[
                  `flex lg:flex-col portrait-lg:h-[unset] lg:h-full xl:w-2/4 justify-center`]">
                  <Motion v-if="item.HeroImage" class="grid" :key="`mainImage-${item.name}`"
                     :initial="animations.mainImage.initial" :animate="animations.mainImage.animate"
                     :transition="{ ...animations.mainImage.transition }">
                     <NuxtImg :src="item.HeroImage" :alt="`Imagen princpal de ${item.name}`"
                        :class="[
                           'justify-self-center 2xs:block 3xs:w-[120%] 2xs:w-[150%] xs:w-[140%] md:!w-[120%] portrait-lg:!w-[150%] lg:!w-[110%] xl:!w-[100%]']" />
                  </Motion>
               </div>
            </section>
         </div>
      </main>
      <AppFooter :color="currentColor" />
   </div>
</template>
