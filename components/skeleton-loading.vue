<template>
  <div class="skeleton-loading" v-if="show">
    <div class="skeleton-loading__item animate-pulse">
      <div class="skeleton-loading__image animate-pulse"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped>
.skeleton-loading {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  gap: 1rem;
}

.skeleton-loading__item {
  width: 100%;
  min-width: 288px;
  max-width: 100%;
  height: 192px;
  background-color: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
}

.skeleton-loading__image {
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
  animation: loading 1s infinite;
}

@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
