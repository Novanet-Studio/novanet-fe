<template>
  <transition name="fade" appear>
    <div class="layout">
      <div class="container">
        <slot />
        <app-footer />
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
useHead({
  meta: [
    {
      key: 'author',
      name: 'author',
      // content: this.$static.metadata.author,
    },
    {
      key: 'twitter:site',
      name: 'twitter:site',
      // content: this.$static.metadata.twitter.site,
    },
    {
      key: 'twitter:creator',
      name: 'twitter:creator',
      // content: this.$static.metadata.twitter.creator,
    },
  ],
});
</script>
