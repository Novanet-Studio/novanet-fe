<script setup>
import { useSectionColor } from '~/composables/useSectionColor'
const { currentColor } = useSectionColor()
const headerFooterColor = currentColor
</script>

<template>
   <AppHeader :color="headerFooterColor" />
   <main>
      <slot />
   </main>
   <AppFooter :color="headerFooterColor" />
</template>
