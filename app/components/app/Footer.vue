<script setup lang="ts">
const props = defineProps<{ color: string }>();

import { colorMap } from "~/utils/colorMap";
import { animations } from "~/utils/animations";
</script>

<template>
  <Motion
    :initial="animations.footer.initial"
    :animate="animations.footer.animate"
    :transition="{ ...animations.footer.transition }"
  >
    <footer
      class="fixed bottom-0 flex flex-col justify-between items-center px-6 pb-2 w-full md:flex-row md:pb-5 lg:px-12 lg:pb-12 transition-colors auto"
      :style="{ color: colorMap[color] || '#fff' }"
    >
      <div class="w-full pb-2 md:w-[70%]">
        <p class="text-[0.875rem] leading-[1.25rem] md:text-[1.125rem] md:leading-[1.75rem] xl:text-[1.375rem] xl:leading-[1.625rem] 3xl:text-[1.563rem] 3xl:leading-[1.813rem]">
          <b>Novanet Studio</b> | Creatividad | Innovación | Colaboración
        </p>
      </div>

      <div class="hidden md:flex md:h-9 md:w-[30%] md:gap-3 md:justify-end">
        <a
          href="https://maps.app.goo.gl/rzpD2iuE3SB6jsXEA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            name="material-symbols:location-on"
            class="text-xl md:text-2xl lg:text-2xl"
            :style="{ color: colorMap[color] || '#fff' }"
          />
        </a>
        <a
          href="https://www.instagram.com/novanetstudio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            name="fa6-brands:instagram"
            class="text-xl md:text-2xl lg:text-2xl"
            :style="{ color: colorMap[color] || '#fff' }"
          />
        </a>
        <a
          href="https://wa.me/message/QA5DVPVFSXYCJ1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            name="fa6-brands:whatsapp"
            class="text-xl md:text-2xl lg:text-2xl"
            :style="{ color: colorMap[color] || '#fff' }"
          />
        </a>
        <a
          href="https://www.facebook.com/NovanetStudio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            name="fa6-brands:facebook"
            class="text-xl md:text-2xl lg:text-2xl"
            :style="{ color: colorMap[color] || '#fff' }"
          />
        </a>
      </div>
    </footer>
  </Motion>
</template>
