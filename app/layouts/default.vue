<script setup lang="ts">
import { useSectionColor } from '~/composables/useSectionColor'
const { currentColor } = useSectionColor()
</script>

<template>
   <AppHeader :color="currentColor" />
   <main>
      <slot />
   </main>
   <AppFooter :color="currentColor" />
</template>