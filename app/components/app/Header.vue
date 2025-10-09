<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { colorMap } from '~/utils/colorMap'
import { animations } from '~/utils/animations'

const props = defineProps<{ color: string }>()
const active = ref('Inicio')
const isOpen = ref(false)
const route = useRoute()

const navigationLinks = reactive([
  {
    name: "Inicio",
    link: "/",
  },
  {
    name: "Nosotros",
    link: "/nosotros",
  },
  {
    name: "Servicios",
    link: "/servicios",
  },
  {
    name: "Portafolio",
    link: "/portafolio",
  },
  {
    name: "Blog",
    link: "/blog",
  },
])

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
  <header class="fixed top-0 w-full bg-transparent px-6 pt-8 md:px-9 lg:px-12 lg:pt-12 transition-colors"
    :style="{ color: colorMap[color] || '#fff' }">
    <nav class="mx-auto h-full flex flex-column flex-wrap content-center justify-between" aria-label="Global">

      <!-- Logo -->
      <Motion :initial="animations.header.initial" :animate="animations.header.animate"
        :transition="{ ...animations.header.transition }">
        <div class="flex lg:flex-1">
          <NuxtLink to="/" class="logo" @click="setActive('Inicio')">
            <span class="sr-only">Novanet Studio</span>
            <svg class="h-[2.1rem] md:h-[2.5rem] lg:h-[3rem]" xmlns="http://www.w3.org/2000/svg" id="Layer_1"
              version="1.1" viewBox="0 0 50 54.04">
              <path
                d="M37.45 28.95c-6.97 0-12.55 5.58-12.55 12.55s5.58 12.55 12.55 12.55S50 48.47 50 41.5s-5.58-12.55-12.55-12.55m0 16.53c-2.39 0-4.18-1.79-4.18-4.18s1.79-4.18 4.18-4.18 4.18 1.79 4.18 4.18-1.79 4.18-4.18 4.18M37.45 0C30.48 0 24.9 5.58 24.9 12.55S30.48 25.1 37.45 25.1 50 19.52 50 12.55 44.42 0 37.45 0m0 16.53c-2.39 0-4.18-1.79-4.18-4.18s1.79-4.18 4.18-4.18 4.18 1.79 4.18 4.18-1.79 4.18-4.18 4.18M12.55 14.34C5.58 14.34 0 19.92 0 26.89s5.58 12.55 12.55 12.55S25.1 33.86 25.1 26.89s-5.58-12.55-12.55-12.55m0 16.53c-2.39 0-4.18-1.79-4.18-4.18s1.79-4.18 4.18-4.18 4.18 1.79 4.18 4.18-1.79 4.18-4.18 4.18"
                :style="{ fill: colorMap[color] || '#fff' }" />
            </svg>
          </NuxtLink>
        </div>
      </Motion>

      <!-- Mobile toggle -->
      <Motion :initial="animations.header.initial" :animate="animations.header.animate"
        :transition="{ ...animations.header.transition }">
        <div class="md:hidden">
          <button @click="isOpen = !isOpen">
            <svg class="h-8 w-8 fill-current text-black" fill="none" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </Motion>

      <!-- Navbar (Desktop) -->
      <div class="hidden lg:justify-end md:flex">
        <Motion :initial="animations.header.initial" :animate="animations.header.animate"
          :transition="{ ...animations.header.transition }">
          <ul class="flex list-none md:justify-end md:gap-10 lg:lg:gap-12">
            <li v-for="(item, index) in navigationLinks" :key="index">
              <NuxtLink :to="item.link" class="pb-2 text-center text-sm md:text-lg lg:text-2xl" :class="[active === item.name ? `border-b-2 border-black` : '',
                `hover:border-b-2 hover:border-black`
              ]" @click="setActive(item.name)">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </Motion>
      </div>


      <transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
        leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
        <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
          <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
        </div>
      </transition>

      <!-- Menu (Móvil) -->
      <aside
        class="flex flex-col pt-8 pl-6 pr-4 transform top-0 right-0 w-2/5 bg-eerieBlack fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : 'translate-x-full'">
        <div class="close">
          <button class="flex w-full justify-end" @click="isOpen = false">
            <svg width="23" height="23" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="9.60805" stroke="#007FFF" stroke-width="0.783908" />
              <path
                d="M12.5078 5.13281H13.6797L10.5625 9.32812L13.8203 13.6875H12.6484L10 10.0547L7.35156 13.6875H6.17969L9.4375 9.30469L6.34375 5.13281H7.51562L10 8.57812L12.5078 5.13281Z"
                fill="#007FFF" />
            </svg>
          </button>
        </div>

        <ul class="flex flex-col gap-5 text-columbiaBlue hover:bottom-1">
          <li v-for="(item, index) in navigationLinks" :key="index">
            <NuxtLink :to="item.link" :class="[
              'flex justify-start focus:outline-none',
              $route.path === item.link ? 'border-b-2 border-azure text-azure' : '',
            ]" @click="isOpen = false">
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
        <!-- Social Media Icons (Mobile) -->
        <div class="flex gap-1 h-9 w-full justify-start">
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
    </nav>
  </header>
</template>
