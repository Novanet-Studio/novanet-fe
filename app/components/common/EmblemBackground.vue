<script setup lang="ts">
import { easeInOut } from "motion-v";

const props = defineProps<{
  imageSrc: string;
  hasAnimated: boolean;
  direction?: "left" | "right" | "top" | "bottom";
  clipPathShape?: string;
}>();

// Default clip-path shape (círculo con hueco)
const defaultClipPath = `shape(from 50% 0%, curve by -50% 50% with -27.77% 0%/-50% 22.23%, smooth by 50% 50% with 22.23% 50%, smooth by 50% -50% with 50% -22.23%, smooth by -50% -50% with -22.23% -50%, move to 50% 65.87%, curve by -16.67% -16.67% with -9.52% 0%/-16.67% -7.15%, smooth by 16.67% -16.67% with 7.15% -16.67%, smooth by 16.67% 16.67% with 16.67% 7.15%, smooth by -16.67% 16.67% with -7.15% 16.67%)`;

const isLandscape = ref(false);

const updateDeviceState = () => {
  if (typeof window !== "undefined") {
    isLandscape.value =
      window.innerWidth >= 1024 && window.innerHeight < window.innerWidth;
  }
};

onMounted(() => {
  updateDeviceState();
  window.addEventListener("resize", updateDeviceState);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateDeviceState);
});

// Container animation (shape movement)
const containerInitial = computed(() => {
  const positions = {
    right: { x: "100%", opacity: 0 },
    left: { x: "-100%", opacity: 0 },
    top: { y: "-100%", opacity: 0 },
    bottom: { y: "100%", opacity: 0 },
  };
  return positions[props.direction || "right"];
});

const containerAnimate = computed(() => {
  // In landscape/desktop, we want the circle's center to be on the right edge (translateX(50%))
  // so the right half is hidden.
  return {
    x: "50%",
    y: 0,
    opacity: 1,
  };
});

const containerTransition = {
  duration: 2,
  delay: 1.5,
  ease: easeInOut,
};

// Background animation (image movement - opposite direction)
const backgroundInitial = computed(() => {
  // We start shifted to one side
  const positions = {
    right: { backgroundPosition: "0% 50%" },
    left: { backgroundPosition: "100% 50%" },
    top: { backgroundPosition: "50% 100%" },
    bottom: { backgroundPosition: "50% 0%" },
  };
  return positions[props.direction || "right"];
});

const backgroundAnimate = computed(() => {
  // Move to the opposite side to create the parallax effect
  const positions = {
    right: { backgroundPosition: "100% 50%" },
    left: { backgroundPosition: "0% 50%" },
    top: { backgroundPosition: "50% 0%" },
    bottom: { backgroundPosition: "50% 100%" },
  };
  return positions[props.direction || "right"];
});

const backgroundTransition = {
  duration: 2,
  delay: 1.5,
  ease: easeInOut,
};
</script>

<template>
  <div class="emblem-boundary">
    <div class="emblem-container">
      <Motion
        :initial="containerInitial"
        :animate="hasAnimated ? containerAnimate : containerInitial"
        :transition="containerTransition"
        class="emblem-motion-wrapper"
      >
        <Motion
          class="emblem-background"
          :style="{
            backgroundImage: `url(/${imageSrc})`,
            clipPath: clipPathShape || defaultClipPath,
          }"
          :initial="backgroundInitial"
          :animate="hasAnimated ? backgroundAnimate : backgroundInitial"
          :transition="backgroundTransition"
        />
      </Motion>
    </div>
  </div>
</template>

<style scoped>
.emblem-boundary {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.emblem-container {
  position: absolute;
  bottom: 5rem;
  right: 0;
  width: 13rem;
  height: 13rem;
  /* Overflow visible here to allow the wrapper to shift 50% and being cut by boundary */
  overflow: visible;
}

.emblem-motion-wrapper {
  width: 100%;
  height: 100%;
  will-change: transform, opacity;
}

.emblem-background {
  width: 100%;
  height: 100%;
  background-size: 200%;
  background-repeat: no-repeat;
  will-change: background-position;
}

/* Responsive sizes */
@media (width <= 24.375rem) {
  .emblem-container {
    width: 40dvh;
    height: 40dvh;
    bottom: 2rem;
  }
}

@media (width >= 24.375rem) {
  .emblem-container {
    width: 40dvh;
    height: 40dvh;
    bottom: 5rem;
  }
}

@media (width >= 48rem) {
  .emblem-container {
    width: 40dvh;
    height: 40dvh;
  }
}

@media (width >= 64rem) and (orientation: portrait) {
  .emblem-container {
    width: 40dvh;
    height: 40dvh;
  }
}

@media (width >= 64rem) and (orientation: landscape) {
  .emblem-container {
    top: 0;
    right: 0;
    bottom: 0;
    width: 100dvh;
    height: 100dvh;
  }
}
</style>
