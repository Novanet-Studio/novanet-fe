<template>
  <header class="header header--page" :class="bg">
    <nav class="nav nav--page">
      <button class="nav__link" @click="$router.go(-1)">
        <font-awesome :icon="['fa', 'caret-left']" size="lg" />
      </button>
      <div class="nav__link">
        <div :data-icon="icon" class="nav__icon icon"></div>
        <h1 :class="titleClass">{{ view }}</h1>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
type Props = {
  view: string;
  icon: string;
  bg: string;
  titleClass: string;
};

defineProps<Props>();
</script>
