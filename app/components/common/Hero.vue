<script setup lang="ts">
import { animations } from '~/utils/animations'
const props = defineProps<{ content: any }>()
</script>

<template>
   <div class="section__container">
      <section :data-color="item.dataColor" v-for="(item, index) in props.content" :key="index"
         :class="`${item.bgColor} ${item.bgImage} ${item.color}`">
         <div class="flex flex-col gap-4 md:gap-4 lg:gap-6 lg:justify-center">

            <!-- Título -->
            <h1>{{ item.title }} </h1>

            <!-- Descripción -->
            <p class="description">
               {{ item.description }}
            </p>

            <!-- CTA -->
            <div v-if="item.buttonText">
               <NuxtLink :href="item.buttonLink" :class="item.buttonType"
                  class="cta__primary transition duration-200 flex justify-between p-3 w-fit lg:p-6 ">
                  {{ item.buttonText }}
                  <span>&nbsp;→</span>
               </NuxtLink>
            </div>

            <div v-if="item.linkText" class=" flex justify-center">
               <NuxtLink :href="item.linkUrl" :class="item.linkClass" class=" p-2 lg:p-10 text-azure">
                  {{ item.linkText }}
               </NuxtLink>
               <NuxtLink :href="item.linkUrl2" :class="item.linkClass" class="p-2  lg:p-10 text-azure">
                  {{ item.linkText2 }}
               </NuxtLink>
               <NuxtLink :href="item.linkUrl3" :class="item.linkClass" class="p-2  lg:p-10 text-azure">
                  {{ item.linkText3 }}
               </NuxtLink>
            </div>
         </div>

         <!-- Imagen -->
         <div v-if="item.image" class="lg:flex lg:flex-col lg:justify-end xl:h-full xl:w-2/4">
            <NuxtImg :src="item.image"
               class="flex w-[34rem] -ml-20 xxs:max-xs:w-[24rem] xxs:max-xs:-ml-6 xs:w-[28rem] xs:-ml-6 md:ml-8 md:w-[43rem] lg:ml-20 lg:w-[54rem] xl:w-[60rem] xl:-ml-64 m4:w-[48rem] m4:-ml-8 2xl:w-[50rem]" />
         </div>
      </section>
   </div>
</template>
