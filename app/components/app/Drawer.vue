<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

import { useNavigationLinks } from '~/composables/useNavigationLinks'
import { colorMap } from '~/utils/colorMap'
import { animations } from '~/utils/animations'
const props = defineProps<{ color: string }>()
const active = ref('Inicio')
const isOpen = ref(false)

const { navigationLinks } = useNavigationLinks()

function drawer() {
   isOpen.value = !isOpen.value
}

function setActive(linkName: string) {
   active.value = linkName
}

watch(isOpen, (val) => {
   if (process.client) {
      if (val) document.body.style.setProperty("overflow", "hidden")
      else document.body.style.removeProperty("overflow")
   }
}, { immediate: true })

onMounted(() => {
   document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen.value) isOpen.value = false
   })
})
</script>

<template>
   <!-- Mobile toggle -->
   <Motion :initial="animations.header.initial" :animate="animations.header.animate"
      :transition="{ ...animations.header.transition }">
      <div class="absolute top-8 right-6 md:hidden">
         <button @click="drawer" aria-label="Toggle Menu">
            <svg class="h-8 w-8 fill-current text-black" fill="none" stroke-linecap="round" stroke-linejoin="round"
               stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
               <path :style="{ color: colorMap[color] || '#fff' }" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
         </button>
      </div>
   </Motion>

    <transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
        leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
        <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
          <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
        </div>
      </transition>

   <!-- Menu (Móvil) -->
   <aside
      class="flex flex-col fixed w-2/5 top-0 right-0 h-screen pt-8 pl-6 pr-4 bg-eerieBlack overflow-auto transform ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : 'translate-x-full transition-transform'">
      <div class="close">
         <button class="flex w-full justify-end" @click="isOpen = false">
            <Icon name="fa7-solid:close" class="text-raspberry text-xl md:text-2xl lg:text-2xl" />
         </button>
      </div>

      <ul class="flex flex-col gap-5 text-[1rem] leading-[1.125rem] mt-20 text-columbiaBlue hover:bottom-1">
         <li v-for="(item, index) in navigationLinks" :key="index">
            <NuxtLink :to="item.link" :class="[
               'flex justify-start focus:outline-none',
               $route.path === item.link ? 'underline decoration-azure underline-offset-8 text-azure' : '',
            ]" @click="isOpen = false">
               {{ item.name }}
            </NuxtLink>
         </li>
      </ul>

      <!-- Social Media Icons (Mobile) -->
      <div class="flex gap-2 w-full h-9 mt-auto justify-end text-columbiaBlue">
         <a href="https://maps.app.goo.gl/rzpD2iuE3SB6jsXEA" target="_blank" rel="noopener noreferrer">
            <Icon name="material-symbols:location-on" class="text-xl md:text-2xl lg:text-2xl" />
         </a>
         <a href="https://www.instagram.com/novanetstudio/" target="_blank" rel="noopener noreferrer">
            <Icon name="fa6-brands:instagram" class="text-xl md:text-2xl lg:text-2xl" />
         </a>
         <a href="https://wa.me/message/QA5DVPVFSXYCJ1" target="_blank" rel="noopener noreferrer">
            <Icon name="fa6-brands:whatsapp" class="text-xl md:text-2xl lg:text-2xl" />
         </a>
         <a href="https://www.facebook.com/NovanetStudio" target="_blank" rel="noopener noreferrer">
            <Icon name="fa6-brands:facebook" class="text-xl md:text-2xl lg:text-2xl" />
         </a>
      </div>
   </aside>
</template>