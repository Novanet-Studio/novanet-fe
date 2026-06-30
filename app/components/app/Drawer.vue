<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

import { useNavigationLinks } from '~/composables/useNavigationLinks'
import { colorMap } from '~/utils/colorMap'
import { animations } from '~/utils/animations'
import type { COLORS_MAP_KEYS } from '~/types'

const props = defineProps<{
  color: COLORS_MAP_KEYS
  emblemColor: COLORS_MAP_KEYS
}>()
const active = ref('Inicio')
const isOpen = ref(false)

const { navigationLinks } = useNavigationLinks()

function drawer() {
  isOpen.value = !isOpen.value
}

function setActive(linkName: string) {
  active.value = linkName
}

watch(
  isOpen,
  (val) => {
    if (process.client) {
      if (val) document.body.style.setProperty('overflow', 'hidden')
      else document.body.style.removeProperty('overflow')
    }
  },
  { immediate: true },
)

onMounted(() => {
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen.value) isOpen.value = false
  })
})
</script>

<template>
  <!-- Mobile toggle -->
  <Motion
    :initial="animations.header.initial"
    :animate="animations.header.animate"
    :transition="{ ...animations.header.transition }"
  >
    <div class="fixed right-6 top-[5dvh] z-50 md:hidden lg:top-[7dvh]">
      <button @click="drawer" aria-label="Toggle Menu">
        <svg
          class="fill-current text-black h-8 w-8"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            :style="{
              color: colorMap[emblemColor] || colorMap[color] || '#fff',
            }"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
  </Motion>

  <transition
    enter-class="opacity-0"
    enter-active-class="ease-out transition-medium"
    enter-to-class="opacity-100"
    leave-class="opacity-100"
    leave-active-class="ease-out transition-medium"
    leave-to-class="opacity-0"
  >
    <div
      @keydown.esc="isOpen = false"
      v-show="isOpen"
      class="fixed inset-0 z-10 transition-opacity"
    >
      <div
        @click="isOpen = false"
        class="bg-black absolute inset-0 opacity-50"
        tabindex="0"
      ></div>
    </div>
  </transition>

  <!-- Menu (Móvil) -->
  <aside
    class="fixed right-0 top-0 z-50 flex h-screen w-2/5 transform flex-col overflow-auto bg-eerieBlack pl-6 pr-4 pt-8 transition-all duration-300 ease-in-out"
    :class="isOpen ? 'translate-x-0' : 'translate-x-full transition-transform'"
  >
    <div class="close">
      <button class="flex w-full justify-end" @click="isOpen = false">
        <Icon
          name="fa7-solid:close"
          class="text-xl text-raspberry md:text-2xl lg:text-2xl"
        />
      </button>
    </div>

    <ul
      class="mt-8 flex flex-col gap-5 text-[1rem] leading-[1.125rem] text-columbiaBlue hover:bottom-1"
    >
      <li v-for="(item, index) in navigationLinks" :key="index">
        <NuxtLink
          :to="item.link"
          :class="[
            'flex justify-start focus:outline-none',
            $route.path === item.link
              ? 'text-azure underline decoration-azure underline-offset-8'
              : '',
          ]"
          @click="isOpen = false"
        >
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>

    <!-- Social Media Icons (Mobile) -->
    <div class="mt-auto flex flex-col text-columbiaBlue">
      <p class="mb-4 text-[0.875rem] leading-[1.375rem]">
        Creatividad Innovación Colaboración
        <b class="text-azure">Novanet Studio</b>
      </p>

      <div class="flex h-9 w-full gap-2 text-azure">
        <a
          href="https://maps.app.goo.gl/rzpD2iuE3SB6jsXEA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            name="material-symbols:location-on"
            class="text-xl md:text-2xl lg:text-2xl"
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
          />
        </a>
      </div>
    </div>
  </aside>
</template>
