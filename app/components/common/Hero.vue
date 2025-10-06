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
         :data-color="item.dataColor" :class="[
            item.bgColor,
            item.bgImage,
            item.color,
            item.reverseDirection ? 'direction-reverse' : ''
         ]">
         <div class="flex flex-col gap-4 md:gap-4 lg:gap-6 lg:justify-center xl:w-2/4">

            <!-- Título -->
            <Motion :key="`mainTitle-${index}`" :initial="animations.mainTitle.initial"
               :animate="isAnimated(index) ? animations.mainTitle.animate : animations.mainTitle.initial"
               :transition="{ ...animations.mainTitle.transition }">
               <h1 class="main__title" :class="item.titleColor">{{ item.title }} </h1>
            </Motion>

            <!-- Descripción -->
            <Motion v-if="item.description" :key="`desc-${index}`" :initial="animations.description.initial"
               :animate="isAnimated(index) ? animations.description.animate : animations.description.initial"
               :transition="{ ...animations.description.transition }">
               <p v-if="item.description" class="description">
                  {{ item.description }}
               </p>
            </Motion>

            <!-- CTA -->
            <Motion v-if="item.buttonText" :key="`cta-${index}`" :initial="animations.cta.initial"
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

            <!-- Formulario -->
            <Motion v-if="item.showForm" :key="`form-${index}`" :initial="animations.ThirdElement.initial"
               :animate="isAnimated(index) ? animations.ThirdElement.animate : animations.ThirdElement.initial"
               :transition="{ ...animations.ThirdElement.transition }">
               <CommonForm v-if="item.showForm" :content="item || {}" />
            </Motion>

            <!-- Lista -->
            <Motion v-if="item.showList" :key="`list-${index}`" :initial="animations.ThirdElement.initial"
               :animate="isAnimated(index) ? animations.ThirdElement.animate : animations.ThirdElement.initial"
               :transition="{ ...animations.ThirdElement.transition }">
               <div class="lista">
                  <NuxtLink v-if="item.list" v-for="(listItem, listIndex) in item.list" :key="listIndex"
                     :href="listItem.url" class=" flex flex-wrap pr-10 hover:text-oxfordBlue hover:font-bold transition-all"
                     :class="item.listColor">
                     {{ listItem.text }}
                     <div v-if="listItem.icon" v-html="listItem.icon" class="icon-svg w-9 ml-2"></div>
                  </NuxtLink>
               </div>
            </Motion>
         </div>


         <!-- Imagen -->
         <div v-if="item.image" class="lg:flex lg:flex-col xl:h-full xl:w-2/4"
            :class="item.justifyEndImage ? 'justify-end' : 'justify-center'">
            <Motion v-if="item.image" :key="`mainImage-${index}`" :initial="animations.mainImage.initial"
               :animate="isAnimated(index) ? animations.mainImage.animate : animations.mainImage.initial"
               :transition="{ ...animations.mainImage.transition }">
               <NuxtImg :src="item.image"
                  class="3xs:w-[110%] 3xs:-ml-6 2xs:w-[120%] 2xs:-ml-12 md:w-[100%] md:ml-6 lg:w-[42%] lg:ml-[600px] xl:w-[100%] xl:ml-0 2xl:ml-14" />
            </Motion>
         </div>
      </section>
   </div>
</template>
