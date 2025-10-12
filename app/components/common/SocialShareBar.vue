<script setup lang="ts">
const { content } = defineProps<{ content: any }>();
</script>

<template>
  <div :class="content.class">
    <i> Compartir</i>

    <span class="flex gap-1">
      <SocialShare network="whatsapp" :label="false" />
      <SocialShare network="twitter" :label="false" />
      <SocialShare network="telegram" :label="false" />
      <SocialShare network="facebook" :label="false" />
      <SocialShare network="linkedin" :label="false" />
    </span>
  </div>
</template>
