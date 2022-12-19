<template>
  <transition name="fade" appear>
    <div class="layout">
      <div class="container">
        <app-header />
        <main class="main">
          <slot />
        </main>
        <app-footer />
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import './default.scss';
</script>
