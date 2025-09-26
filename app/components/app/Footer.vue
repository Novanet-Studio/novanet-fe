<script setup>
defineProps({ color: String })
const colorMap = {
  default: '#fff',
  azure: '#222',
  oxfordBlue: '#007bff',
  columbiaBlue: '#6ca0dc',
  // add more as needed
}
</script>


<template>
  <footer
    class="fixed bottom-0 flex flex-col justify-between items-center px-6 pb-2 w-full md:flex-row md:pb-5 lg:px-12 lg:pb-12 transition-colors"
    :style="{ color: colorMap[color] || '#fff' }">
    <div class="w-full pb-2">
      <p class="text-sm">
        <span class="font-bold">Novanet Studio</span> | Creatividad | Innovación | Colaboración
      </p>
    </div>
    <div class="flex gap-1 h-9 w-full lg:gap-2">
      <a><img class="text-red size-6 lg:size-9 md:size-8" src="~/assets/images/novanet-icono-mapa.svg"
          :style="{ color: colorMap[color] || '#fff' }" /></a>
      <a><img class="size-6 lg:size-9 md:size-8" src="~/assets/images/novanet-icono-facebook.svg"
          :style="{ color: colorMap[color] || '#fff' }" /></a>
      <a><img class="size-6 lg:size-9 md:size-8" src="~/assets/images/novanet-icono-whatsapp.svg"
          :style="{ color: colorMap[color] || '#fff' }" /></a>
      <a><img class="size-6 lg:size-9 md:size-8" src="~/assets/images/novanet-icono-instagram.svg"
          :style="{ color: colorMap[color] || '#fff' }" /></a>
    </div>
  </footer>
</template>