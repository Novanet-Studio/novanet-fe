<script>
export default {
  name: "NuxtTutorial",
  data() {
    return {
      active: "Inicio", // Guarda el enlace activo
      navigationLinks: [
        {
          name: "Inicio",
          link: "/",
          activeClass: "border-b-2 border-black text-5xl",
          baseClass: "pb-2 hover:border-b-2 hover:border-black text-center w-[6.5rem]",

        },
        {
          name: "Nosotros",
          link: "/nosotros",
          activeClass: "border-b-2 border-black text-5xl",
          baseClass: "pb-2 hover:border-b-2 hover:border-black text-center w-[6.5rem]",
        },
        {
          name: "Servicios",
          link: "/servicios",
          activeClass: "border-b-2 border-black text-5xl",
          baseClass: "pb-2 hover:border-b-2 hover:border-black text-center w-[6.5rem]",
        },
        {
          name: "Portafolio",
          link: "/portafolio",
          activeClass: "border-b-2 border-black text-5xl",
          baseClass: "pb-2 hover:border-b-2 hover:border-black text-center w-[6.5rem]",
        },
        {
          name: "Blog",
          link: "/blog",
          activeClass: "border-b-2 border-black text-5xl",
          baseClass: "pb-2 hover:border-b-2 hover:border-black text-center w-[6.5rem]",
        },
      ],
      isOpen: false,
    };
  },

  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
    setActive(linkName) {
      this.active = linkName; // Cambia el enlace activo al hacer clic
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  },
};

</script>

<template>
  <header class="fixed top-0 w-screen bg-transparent px-6 h-1/6 md:px-9 lg:px-20 lg:pt-20">
    <nav class="mx-auto h-full flex flex-column flex-wrap content-center justify-between" aria-label="Global">
      <!-- Logo -->
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="logo" @click="setActive('Inicio')">

          <span class="sr-only">Your Company</span>
          <img class="h-[1.875rem] lg:h-[3.5rem] md:h-[3rem]" src="~/assets/images/novanet-emblema.svg" />
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
      <div class="hidden flex-1 text-p3 list-none lg:flex lg:justify-end md:block">
        <ul class="flex md:justify-end md:gap-10 lg:gap-32">
          <li v-for="(item, index) in navigationLinks" :key="index">
            <NuxtLink :to="item.link" :class="[
              active === item.name ? item.activeClass : '',
              item.baseClass
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
        class="transform top-0 right-0 w-48 bg-oxford-blue fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
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

        <ul class="text-columbia-blue text-s3 flex flex-col gap-5 pt-[8.5rem] pr-[1.6rem] hover:bottom-1">
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
