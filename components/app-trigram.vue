<template>
  <div
    id="trigram"
    :class="{ active: isActive }"
    class="header__trigram"
    @click.prevent="toggle"
  >
    <slot>
      <button type="button" title="Menu">☰</button>
    </slot>
  </div>
</template>

<script lang="ts" setup>
const isPanelOpen = usePanel();
const isActive = computed(() => isPanelOpen.value);

const toggle = () => {
  isPanelOpen.value = !isPanelOpen.value;
};
</script>
