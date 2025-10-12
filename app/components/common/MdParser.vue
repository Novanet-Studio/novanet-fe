<script setup lang="ts">
import { markdownToHtml } from "~/utils/functions";

const props = defineProps<{
  markdownText: string;
  extra?: { class: string };
}>();
</script>

<template>
  <div
    v-html="markdownToHtml(props.markdownText)"
    class="w-full h-full pr-0 lg:pr-2 xl:pr-4 overflow-y-scroll flex flex-col gap-2 lg:gap-4 custom-scrollbar-y text-columbiaBlue"
    :class="props.extra?.class"
  ></div>
</template>
