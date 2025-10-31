<script setup lang="ts">
import { useToast } from "~/composables/useToast";

const { toastState } = useToast();
</script>

<template>
  <Transition name="toast">
    <div v-if="toastState && toastState.show" :class="[
      'fixed top-5 right-5 p-4 rounded-md shadow-lg text-white max-w-sm',

      'z-[9999]',
      toastState.type === 'success' ? 'bg-chartreuse' : 'bg-raspberry',
    ]">
      <p :class="[toastState.type === 'success' ? '' : 'error']">
        {{ toastState.type === "success" ? "&check;" : "&#10006;" }}
        {{ toastState.message }}
      </p>
    </div>
  </Transition>
</template>

<style scoped>
p {
  color: var(--color-oxfordBlue)
}

p.error {
  color: white
}

.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
