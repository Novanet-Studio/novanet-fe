<script setup lang="ts">
const props = defineProps<{
  layers: any[];
  hasAnimated: boolean;
  imageClasses?: any;
  containerClass?: string;
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
  <div :class="['w-full grid place-items-center', props.containerClass]">
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
      class="col-start-1 row-start-1 w-full flex justify-center"
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
        :class="['max-w-none h-auto', layer.cssClass, props.imageClasses]"
        :style="{
          ...getMaskStyle(layer.mask),
          mixBlendMode: layer.blendMode || 'normal',
        }"
      />
    </Motion>
  </div>
</template>
