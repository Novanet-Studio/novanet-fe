<script setup lang="ts">
const props = defineProps<{ color: string }>()
import { colorMap } from '~/utils/colorMap'

</script>


<template>
  <footer
    class="fixed bottom-0 flex flex-col justify-between items-center px-6 pb-2 w-full md:flex-row md:pb-5 lg:px-12 lg:pb-12 transition-colors"
    :style="{ color: colorMap[color] || '#fff' }">
    <div class="w-full pb-2 md:w-[70%]">
      <p class="text-sm md:text-lg lg:text-xl xl:text-2xl">
        <span class="font-bold">Novanet Studio</span> | Creatividad | Innovación | Colaboración
      </p>
    </div>
    <div class="flex gap-1 h-9 w-full md:w-[30%] md:gap-2 md:justify-end">
      <a>
        <Icon name="material-symbols:location-on" class="text-xl md:text-2xl lg:text-3xl" :style="{ color: colorMap[color] || '#fff' }" />
      </a>
      <a>
        <Icon name="fa6-brands:instagram" class="text-xl md:text-2xl lg:text-3xl" :style="{ color: colorMap[color] || '#fff' }" />
      </a>
      <a>
        <Icon name="fa6-brands:whatsapp" class="text-xl md:text-2xl lg:text-3xl" :style="{ color: colorMap[color] || '#fff' }" />
      </a>
      <a>
        <Icon name="fa6-brands:facebook" class="text-xl md:text-2xl lg:text-3xl" :style="{ color: colorMap[color] || '#fff' }" />
      </a>
    </div>
  </footer>
</template>