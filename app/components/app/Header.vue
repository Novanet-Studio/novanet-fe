<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { colorMap } from '~/utils/colorMap'

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
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="logo" @click="setActive('Inicio')">
          <span class="sr-only">Your Company</span>
          <!-- <img class="h-[1.875rem] lg:h-[3.5rem] md:h-[3rem]" src="~/assets/images/novanet-emblema.svg"
            :style="{ fill: colorMap[color] || '#fff' }" /> -->
          <svg class="h-[2.1rem] md:h-[2.5rem] lg:h-[3rem]" viewBox="0 0 50 56" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_492_1223)">
              <path
                d="M37.4514 29.9976C30.4821 29.9976 24.9028 35.775 24.9028 43.0008C24.9028 50.2266 30.4782 56.004 37.4514 56.004C44.4245 56.004 49.9999 50.2266 49.9999 43.0008C49.9999 35.775 44.4245 29.9976 37.4514 29.9976ZM37.4514 47.1287C35.0597 47.1287 33.2698 45.2699 33.2698 42.7956C33.2698 40.3213 35.0636 38.4625 37.4514 38.4625C39.8392 38.4625 41.6329 40.3213 41.6329 42.7956C41.6329 45.2699 39.8392 47.1287 37.4514 47.1287Z"
                :style="{ fill: colorMap[color] || '#fff' }" />
              <path
                d="M37.4514 0C30.4821 0 24.9028 5.77743 24.9028 13.0032C24.9028 20.229 30.4782 26.0065 37.4514 26.0065C44.4245 26.0065 49.9999 20.229 49.9999 13.0032C49.9999 5.78145 44.4245 0 37.4514 0ZM37.4514 17.1311C35.0597 17.1311 33.2698 15.2724 33.2698 12.798C33.2698 10.3237 35.0636 8.46498 37.4514 8.46498C39.8392 8.46498 41.6329 10.3237 41.6329 12.798C41.6329 15.2724 39.8392 17.1311 37.4514 17.1311Z"
                :style="{ fill: colorMap[color] || '#fff' }" />
              <path
                d="M12.5485 14.862C5.5754 14.862 0 20.6394 0 27.8612C0 35.083 5.5754 40.8644 12.5485 40.8644C19.5217 40.8644 25.0971 35.087 25.0971 27.8612C25.0971 20.6354 19.5217 14.858 12.5485 14.858M12.5485 31.9891C10.1569 31.9891 8.36698 30.1303 8.36698 27.656C8.36698 25.1817 10.1607 23.3229 12.5485 23.3229C14.9363 23.3229 16.7301 25.1817 16.7301 27.656C16.7301 30.1303 14.9363 31.9891 12.5485 31.9891Z"
                :style="{ fill: colorMap[color] || '#fff' }" />
            </g>
            <defs>
              <clipPath id="clip0_492_1223">
                <rect width="50" height="56" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </NuxtLink>
      </div>

      <!-- Mobile toggle -->
      <div class="md:hidden">
        <button @click="isOpen = !isOpen">
          <svg class="h-8 w-8 fill-current text-black" fill="none" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Navbar (Desktop) -->
      <div class="hidden lg:justify-end md:flex">
        <ul class="flex list-none md:justify-end md:gap-10 lg:lg:gap-12">
          <li v-for="(item, index) in navigationLinks" :key="index">
            <NuxtLink :to="item.link" class="pb-2 text-center md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.7rem]" :class="[
              active === item.name ? `border-b-2 border-black` : '',
              `hover:border-b-2 hover:border-black`
            ]" @click="setActive(item.name)">
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
        leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
        <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
          <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
        </div>
      </transition>

      <!-- Menu (Móvil) -->
      <aside
        class="transform top-0 right-0 w-48 bg-oxfordBlue fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : 'translate-x-full'">
        <div class="close">
          <button class="absolute top-0 right-0 mt-[2.9rem] mr-[1.6rem]" @click="isOpen = false">
            <svg width="23" height="23" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="9.60805" stroke="#007FFF" stroke-width="0.783908" />
              <path
                d="M12.5078 5.13281H13.6797L10.5625 9.32812L13.8203 13.6875H12.6484L10 10.0547L7.35156 13.6875H6.17969L9.4375 9.30469L6.34375 5.13281H7.51562L10 8.57812L12.5078 5.13281Z"
                fill="#007FFF" />
            </svg>
          </button>
        </div>

        <ul class="text-columbiaBlue text-s3 flex flex-col gap-5 pt-[8.5rem] pr-[1.6rem] hover:bottom-1">
          <li v-for="(item, index) in navigationLinks" :key="index">
            <NuxtLink :to="item.link" :class="[
              'flex justify-end focus:outline-none',
              $route.path === item.link ? 'border-b-2 border-azure text-azure' : '',
            ]" @click="isOpen = false">
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </aside>
    </nav>
  </header>
</template>
