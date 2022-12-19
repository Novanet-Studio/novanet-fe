<template>
  <div class="nav--main">
    <div
      class="nav__sidebar-backdrop"
      @click="isPanelOpen = false"
      v-if="isPanelOpen"
    ></div>
    <transition name="nav__slide">
      <div v-if="isPanelOpen" class="nav__sidebar-panel">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
const isPanelOpen = usePanel();
</script>
