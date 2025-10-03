<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from 'vue'
import { animations } from '~/utils/animations'
const props = defineProps<{ content: any }>()

const activeSections = ref<number[]>([])
const animatedSections = ref<number[]>([])

const isAnimated = (index: number) => animatedSections.value.includes(index)

onMounted(() => {
   nextTick(() => {
      props.content.forEach((_: any, idx: number) => {
         const section = document.querySelector(`[data-section-index="${idx}"]`)
         if (section) {
            const observer = new IntersectionObserver(
               ([entry]) => {
                  if (entry.isIntersecting) {
                     if (!activeSections.value.includes(idx)) activeSections.value.push(idx)
                     if (!animatedSections.value.includes(idx)) animatedSections.value.push(idx)
                  } else {
                     activeSections.value = activeSections.value.filter(i => i !== idx)
                  }
               },
               { threshold: 0.5 }
            )
            observer.observe(section)
         }
      })
   })
})
</script>

<template>
   <div class="section__container">
      <section v-for="(item, index) in props.content" :key="index" :data-section-index="index"
         :data-color="item.dataColor" :class="`${item.bgColor} ${item.bgImage} ${item.color}`">
         <div class="flex flex-col gap-4 md:gap-4 lg:gap-6 lg:justify-center">

            <!-- Título -->
            <Motion :key="`mainTitle-${index}`" :initial="animations.mainTitle.initial"
               :animate="isAnimated(index) ? animations.mainTitle.animate : animations.mainTitle.initial"
               :transition="{ ...animations.mainTitle.transition }">
               <h1 class="main__title" :class="item.titleColor">{{ item.title }} </h1>
            </Motion>

            <!-- Descripción -->
            <Motion :key="`desc-${index}`" :initial="animations.description.initial"
               :animate="isAnimated(index) ? animations.description.animate : animations.description.initial"
               :transition="{ ...animations.description.transition }">
               <p class="description">
                  {{ item.description }}
               </p>
            </Motion>

            <!-- CTA -->
            <Motion :key="`cta-${index}`" :initial="animations.cta.initial"
               :animate="isAnimated(index) ? animations.cta.animate : animations.cta.initial"
               :transition="{ ...animations.cta.transition }">
               <div v-if="item.buttonText">
                  <NuxtLink :href="item.buttonLink" :class="item.buttonType"
                     class="cta__primary transition duration-200">
                     {{ item.buttonText }}
                     <span>&nbsp;→</span>
                  </NuxtLink>
               </div>
            </Motion>

            <Motion :key="`form-${index}`" :initial="animations.form.initial"
               :animate="isAnimated(index) ? animations.form.animate : animations.form.initial"
               :transition="{ ...animations.form.transition }">
               <CommonForm v-if="item.showForm" :content="item || {}" />
            </Motion>

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
            <Motion :key="`mainImage-${index}`" :initial="animations.mainImage.initial"
               :animate="isAnimated(index) ? animations.mainImage.animate : animations.mainImage.initial"
               :transition="{ ...animations.mainImage.transition }">
               <NuxtImg :src="item.image"
                  class="flex w-[34rem] -ml-20 xxs:max-xs:w-[24rem] xxs:max-xs:-ml-6 xxs:max-xs:w-[28rem] xxs:max-xs:-ml-6 md:ml-8 md:w-[43rem] ipadair:w-[32rem] ipadair:ml-[72vh] lg:ml-20 lg:w-[54rem] xl:w-[60rem] xl:-ml-64 m4:w-[48rem] m4:-ml-8 2xl:w-[50rem]" />
            </Motion>
         </div>


      </section>
   </div>
</template>
