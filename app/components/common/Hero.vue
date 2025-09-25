<script setup lang="ts">
const props = defineProps<{ content: any }>()
</script>

<template>
   <section v-for="(item, index) in props.content" :key="index" :class="item.class">
      <div class=" flex flex-col gap-3 " :class="item.containerClass">
         <!-- Título -->
         <div :class="item.divHero">
            <h1 :class="item.titleClass">{{ item.title }} </h1>

            <!-- Descripción -->
            <p class="description" :class="item.descriptionClass">
               {{ item.description }}
            </p>
         </div>
         <!-- CTA -->
         <div v-if="item.buttonText">
            <NuxtLink :href="item.buttonLink" :class="item.buttonType"
               class="transition duration-200 flex justify-between p-3 pr-3 pl-3 w-28 lg:w-80 md:w-56 lg:p-6 ">
               {{ item.buttonText }}
               <span>🡒</span>
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
      <div v-if="item.image" class="lg:flex lg:flex-col lg:justify-end lg:h-full lg:w-2/4">
         <NuxtImg :src="item.image" class="flex align mx-auto w-[30rem] lg:w-[60rem] md:w-[43rem]" />
      </div>
   </section>
</template>
