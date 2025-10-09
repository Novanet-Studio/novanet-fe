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

const scrollToSection = (sectionId: string) => {
   const el = document.getElementById(sectionId)
   if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
   }
}
</script>

<template>
   <div class="section__container">
      <section :id="item.name ? item.name : ''" v-for="(item, index) in props.content" :key="index"
         :data-section-index="index" :data-color="item.dataColor" :class="[
            item.bgColor,
            item.bgImage,
            item.color,
            item.reverseDirection ? 'direction-reverse' : '',
            item.justifyContent ? 'justify-center' : '',
         ]">
         <div :class="[`flex flex-col gap-4 md:gap-4 lg:gap-6`, item.showTabs ? 'xl:w-[66.6666666%]' : 'lg:w-2/4']">

            <!-- CTA Navegación -->
            <Motion v-if="item.navButtonBack" :key="`cta-${index}`" :initial="animations.cta.initial"
               :animate="isAnimated(index) ? animations.cta.animate : animations.cta.initial"
               :transition="{ ...animations.cta.transition }">
               <div v-if="item.navButtonBack">
                  <a :href="`#${item.targetSection}`"
                     :class="[`cta__navigation transition duration-200`, item.buttonType]"
                     @click.prevent="scrollToSection(item.targetSection)">
                     <span>↑&nbsp;</span>
                     Volver arriba
                  </a>
               </div>
            </Motion>

            <!-- Título -->
            <Motion :key="`mainTitle-${index}`" :initial="animations.mainTitle.initial"
               :animate="isAnimated(index) ? animations.mainTitle.animate : animations.mainTitle.initial"
               :transition="{ ...animations.mainTitle.transition }">
               <div class="flex flex-wrap">
                  <h1 :class="[`main__title`, item.titleColor]">{{ item.title }} </h1>
                  <div v-if="item.serviceIcon" v-html="item.serviceIcon" class="icon-svg w-9 ml-2"></div>
               </div>

            </Motion>

            <!-- Descripción -->
            <Motion v-if="item.description" :key="`desc-${index}`" :initial="animations.description.initial"
               :animate="isAnimated(index) ? animations.description.animate : animations.description.initial"
               :transition="{ ...animations.description.transition }">
               <p v-if="item.description" class="description">
                  {{ item.description }}
               </p>
            </Motion>

            <!-- CTA Primario -->
            <Motion v-if="item.buttonText" :key="`cta-${index}`" :initial="animations.cta.initial"
               :animate="isAnimated(index) ? animations.cta.animate : animations.cta.initial"
               :transition="{ ...animations.cta.transition }">
               <div v-if="item.buttonText">
                  <NuxtLink :href="item.buttonLink" :class="[`cta__primary transition duration-200`, item.buttonType]">
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

            <!--  Tabs-->
            <Motion v-if="item.tabs" :key="`tabs-${index}`" :initial="animations.ThirdElement.initial"
               :animate="isAnimated(index) ? animations.ThirdElement.animate : animations.ThirdElement.initial"
               :transition="{ ...animations.ThirdElement.transition }">
               <div class="tabs">
                  <CommonTabs v-if="item.tabs" :content="item" />
               </div>
            </Motion>

            <!-- Lista -->
            <Motion v-if="item.list" :key="`list-${index}`" :initial="animations.ThirdElement.initial"
               :animate="isAnimated(index) ? animations.ThirdElement.animate : animations.ThirdElement.initial"
               :transition="{ ...animations.ThirdElement.transition }">
               <div class="lista">
                  <a v-if="item.list" v-for="(listItem, listIndex) in item.list" :key="listIndex"
                     :href="`#${listItem.targetSection}`"
                     :class="[`flex flex-wrap pr-4 hover:text-oxfordBlue hover:font-bold transition-all`, item.listColor]"
                     @click.prevent="scrollToSection(listItem.targetSection)">
                     {{ listItem.text }}
                     <div v-if="listItem.icon" v-html="listItem.icon" class="icon-svg ml-2"></div>
                  </a>
               </div>
            </Motion>
         </div>

         <!-- Imagen principal -->
         <div v-if="item.HeroImage"
            :class="[`flex lg:flex-col lg:h-full xl:w-2/4`, item.justifyEndImage ? 'justify-end' : 'justify-center']">
            <Motion v-if="item.HeroImage" :key="`mainImage-${index}`" :initial="animations.mainImage.initial"
               :animate="isAnimated(index) ? animations.mainImage.animate : animations.mainImage.initial"
               :transition="{ ...animations.mainImage.transition }">
               <NuxtImg :src="item.HeroImage" class="max-2xs:w-[90%] md:w-[100%] lg:w-[120%] xl:w-[100%]" />
            </Motion>
         </div>

         <!-- Imagen servicios -->
         <div v-if="item.serviceImage" class="flex xl:flex-col xl:pr-10 xl:w-[33.3333333%] xl:justify-center xl:h-full">
            <Motion v-if="item.serviceImage" :key="`serviceImage-${index}`" :initial="animations.mainImage.initial"
               :animate="isAnimated(index) ? animations.mainImage.animate : animations.mainImage.initial"
               :transition="{ ...animations.mainImage.transition }">
               <NuxtImg :src="item.serviceImage"
                  class="pb-4 max-2xs:hidden 2xs:max-xl:-scale-x-100 2xs:w-[60%] 2xs:ml-0 md:w-[100%] lg:w-[120%] xl:w-[100%] xl:justify-center" />
            </Motion>
         </div>
      </section>
   </div>
</template>
