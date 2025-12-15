<script setup lang="ts">
const props = defineProps<{
  layers: any[];
  hasAnimated: boolean;
}>();

const getMaskStyle = (maskUrl?: string) => {
  if (!maskUrl) return {};
  return {
    maskImage: `url(${maskUrl})`,
    WebkitMaskImage: `url(${maskUrl})`,
    maskSize: "contain",
    WebkitMaskSize: "contain",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskPosition: "center",
  };
};
</script>

<template>
  <div
    class="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center"
  >
    <Motion
      v-for="layer in layers"
      :key="layer.id"
      :initial="layer.animation?.initial || { opacity: 0, y: 20 }"
      :animate="
        hasAnimated
          ? layer.animation?.animate || { opacity: 1, y: 0 }
          : layer.animation?.initial
      "
      :transition="layer.animation?.transition || { duration: 0.5 }"
      class="absolute inset-0 flex items-center justify-center"
      :style="{ zIndex: layer.zIndex }"
    >
      <div
        v-if="layer.type === 'shape'"
        :class="['w-full h-full', layer.bgColor, layer.cssClass]"
        :style="getMaskStyle(layer.mask)"
      ></div>

      <NuxtImg
        v-else-if="layer.type === 'image'"
        :src="layer.src"
        :class="['max-w-none h-auto', layer.cssClass]"
        :style="{
          ...getMaskStyle(layer.mask),
          mixBlendMode: layer.blendMode || 'normal',
        }"
      />
    </Motion>
  </div>
</template>
