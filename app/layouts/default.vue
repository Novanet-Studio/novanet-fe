<script setup lang="ts">
import { useRoute } from "vue-router";
import { watch, onMounted } from "vue";
import { useSectionObserver } from "~/composables/useSectionObserver";

const { currentColor, currentEmblemColor, initObserver } = useSectionObserver();
const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    setTimeout(initObserver, 100);
  }
);

onMounted(() => {
  initObserver();
});
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
