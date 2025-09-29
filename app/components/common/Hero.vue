<script setup lang="ts">
const props = defineProps<{ content: any }>()
</script>

<template>
   <section :data-color="item.dataColor" v-for="(item, index) in props.content" :key="index"
      :class="item.bgColor + ' ' + item.class">
      <div class="flex flex-col gap-6 lg:justify-center">
         <!-- Título -->

         <h1 :class="item.titleClass">{{ item.title }} </h1>

         <!-- Descripción -->
         <p class="description">
            {{ item.description }}
         </p>

         <!-- CTA -->
         <div v-if="item.buttonText">
            <NuxtLink :href="item.buttonLink" :class="item.buttonType"
               class="cta transition duration-200 flex justify-between p-3 w-fit lg:p-6 ">
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
      <div v-if="item.image" class="lg:flex lg:flex-col lg:justify-end lg:h-full lg:w-2/4">
         <NuxtImg :src="item.image" class="flex w-[40rem] -ml-28 md:w-[43rem] lg:w-[60rem] lg:-ml-64" />
      </div>
   </section>
</template>
