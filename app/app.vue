<script setup lang="ts">
const runtime = useRuntimeConfig()
const pixelId = runtime.public.metaPixelId

useHead({
  script: [
    {
      innerHTML:
        'function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"8ad2985e600b71f791445d3b7455dc49"})});',
    },
  ],
})
</script>

<template>
  <noscript v-if="pixelId">
    <img
      height="1"
      width="1"
      style="display:none"
      :src="`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`"
      alt=""
    />
  </noscript>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>