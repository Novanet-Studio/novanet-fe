<script setup lang="ts">
import { useSectionColor } from '~/composables/useSectionColor'
import { useRoute } from 'vue-router'
import { watch, nextTick } from 'vue'
const { currentColor, initObserver } = useSectionColor()
const route = useRoute()

watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    initObserver()
  }
)
</script>
<template>
  <AppHeader :color="currentColor" />
  <AppDrawer :color="currentColor" />
  <main>
    <slot />
  </main>
  <AppFooter :color="currentColor" />
</template>