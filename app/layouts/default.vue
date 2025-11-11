<script setup lang="ts">
import { useSectionObserver } from "~/composables/useSectionObserver";

const { currentColor, currentEmblemColor } = useSectionObserver();
</script>

<template>
  <div>
    <AppHeader :color="currentColor" :emblem-color="currentEmblemColor" />
    <AppDrawer :color="currentColor" />
    <main>
      <slot />
    </main>
    <AppFooter :color="currentColor" />
  </div>
</template>
