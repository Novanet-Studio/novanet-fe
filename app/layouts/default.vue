<script setup lang="ts">
import { useRoute } from "vue-router";
import { watch, onMounted } from "vue";
import { useSectionObserver } from "~/composables/useSectionObserver";

const { currentColor, currentEmblemColor, initObserver, scrollToSection } =
  useSectionObserver();
const route = useRoute();

const handleHashScroll = (hash: string) => {
  if (hash && hash.length > 1) {
    const sectionId = hash.substring(1);

    setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);
  }
};

onMounted(() => {
  handleHashScroll(route.hash);
});

watch(
  () => route.hash,
  (newHash) => {
    handleHashScroll(newHash);
  }
);

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

    <CommonToast />
  </div>
</template>
