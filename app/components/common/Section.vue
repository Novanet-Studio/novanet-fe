<script setup lang="ts">
import { animations } from '~/utils/animations'
import { useSectionObserver } from '~/composables/useSectionObserver'

import CompositeVisual from '~/components/common/CompositeVisual.vue'
import EmblemBackground from '~/components/common/EmblemBackground.vue'

const props = defineProps<{ content: any; others?: any }>()
const { hasBeenAnimated, scrollToSection } = useSectionObserver()

const emblemModifierSource = props.others?.emblemModifierSource || {}
</script>

<template>
  <section
    :id="item.name"
    v-for="item in props.content"
    :key="item.name"
    :data-color="item.dataColor"
    :data-emblem-color="emblemModifierSource[item.name] || item.dataColor"
    :style="{ contain: item.emblemAnimation ? 'layout' : 'none' }"
    :class="[
      item.bgColor,
      item.bgImage,
      item.color,
      item.flexOrientation ? item.flexOrientation : 'flex-col md:flex-row',
      item.reverseDirection
        ? item.flexOrientation == 'flex-row'
          ? 'flex-col-reverse md:flex-row-reverse'
          : 'flex-col-reverse'
        : '',
      item.alignCenter ? 'items-center' : '',
      item.justifyEndImage ? 'justify-end' : '',
      item.justifyContent ? 'justify-center' : '',
      { 'animate-background': hasBeenAnimated(item.name) },
      ,
    ]"
  >
    <EmblemBackground
      v-if="item.emblemAnimation"
      :imageSrc="item.emblemAnimation.imageSrc"
      :hasAnimated="hasBeenAnimated(item.name)"
      :direction="item.emblemAnimation.direction || 'right'"
      -
      :clipPathShape="item.emblemAnimation.clipPath"
    />
    <div
      :class="[
        `flex flex-col gap-4 lg:gap-6`,
        item.showTabs ? 'lg:w-[66.6666666%]' : 'lg:w-2/4 portrait-lg:w-full',
      ]"
    >
      <Motion
        v-if="item.navButtonBack"
        :key="`cta-back-${item.name}`"
        :initial="animations.cta.initial"
        :animate="
          hasBeenAnimated(item.name)
            ? animations.cta.animate
            : animations.cta.initial
        "
        :transition="{ ...animations.cta.transition }"
      >
        <div v-if="item.navButtonBack">
          <a
            :href="`#${item.targetSection}`"
            :class="[
              `cta__navigation transition duration-200`,
              item.buttonType,
            ]"
            @click.prevent="scrollToSection(item.targetSection)"
          >
            <span>↑&nbsp;</span>
            Volver arriba
          </a>
        </div>
      </Motion>

      <Motion
        :key="`mainTitle-${item.name}`"
        :initial="animations.mainTitle.initial"
        :animate="
          hasBeenAnimated(item.name)
            ? animations.mainTitle.animate
            : animations.mainTitle.initial
        "
        :transition="{ ...animations.mainTitle.transition }"
      >
        <div class="flex flex-wrap">
          <h1 :class="[`main__title`, item.titleColor]">{{ item.title }}</h1>
          <div
            v-if="item.serviceIcon"
            v-html="item.serviceIcon"
            class="icon-svg ml-2 w-9"
          ></div>
        </div>
      </Motion>

      <Motion
        v-if="item.description"
        :key="`desc-${item.name}`"
        :initial="animations.description.initial"
        :animate="
          hasBeenAnimated(item.name)
            ? animations.description.animate
            : animations.description.initial
        "
        :transition="{ ...animations.description.transition }"
      >
        <p v-if="item.description" class="description">
          {{ item.description }}
        </p>
      </Motion>

      <Motion
        v-if="item.buttonText"
        :key="`cta-primary-${item.name}`"
        :initial="animations.cta.initial"
        :animate="
          hasBeenAnimated(item.name)
            ? animations.cta.animate
            : animations.cta.initial
        "
        :transition="{ ...animations.cta.transition }"
      >
        <div v-if="item.buttonText">
          <NuxtLink
            :href="item.buttonLink"
            :class="[`cta__primary transition duration-200`, item.buttonType]"
            @click.prevent="scrollToSection(item.targetSection)"
          >
            {{ item.buttonText }}
            <span>&nbsp;→</span>
          </NuxtLink>
        </div>
      </Motion>

      <Motion
        v-if="item.showForm"
        :key="`form-${item.name}`"
        :initial="animations.ThirdElement.initial"
        :animate="
          hasBeenAnimated(item.name)
            ? animations.ThirdElement.animate
            : animations.ThirdElement.initial
        "
        :transition="{ ...animations.ThirdElement.transition }"
      >
        <CommonForm v-if="item.showForm" :content="item || {}" />
      </Motion>

      <Motion
        v-if="item.tabs"
        :key="`tabs-${item.name}`"
        :initial="animations.ThirdElement.initial"
        :animate="
          hasBeenAnimated(item.name)
            ? animations.ThirdElement.animate
            : animations.ThirdElement.initial
        "
        :transition="{ ...animations.ThirdElement.transition }"
      >
        <div class="tabs">
          <CommonTabs v-if="item.tabs" :content="item" />
        </div>
      </Motion>

      <Motion
        v-if="item.list"
        :key="`list-${item.name}`"
        :initial="animations.ThirdElement.initial"
        :animate="
          hasBeenAnimated(item.name)
            ? animations.ThirdElement.animate
            : animations.ThirdElement.initial
        "
        :transition="{ ...animations.ThirdElement.transition }"
      >
        <div class="lista flex flex-col gap-2 pt-2 md:flex-row md:pt-[unset]">
          <a
            v-if="item.list"
            v-for="(listItem, listIndex) in item.list"
            :key="listIndex"
            :href="`#${listItem.targetSection}`"
            :class="[
              `flex w-fit flex-wrap pr-6 transition-all hover:font-bold hover:text-oxfordBlue`,
              item.listColor,
            ]"
            @click.prevent="scrollToSection(listItem.targetSection)"
          >
            {{ listItem.text }}
            <div
              v-if="listItem.icon"
              v-html="listItem.icon"
              class="icon-svg ml-2"
            ></div>
          </a>
        </div>
      </Motion>
    </div>

    <div
      v-if="item.visualLayers || item.HeroImage"
      :class="[
        `flex lg:h-full lg:flex-col xl:w-2/4 portrait-lg:h-[unset]`,
        item.justifyEndImage ? 'justify-end' : 'justify-center',
      ]"
    >
      <CompositeVisual
        v-if="item.visualLayers"
        :layers="item.visualLayers.images || item.visualLayers"
        :hasAnimated="hasBeenAnimated(item.name)"
        :containerClass="item.visualLayers.cssClass"
        :imageClasses="[
          'justify-self-center 2xs:block 3xs:w-[120%] 2xs:w-[150%] xs:w-[140%] md:!w-[120%] portrait-lg:!w-[150%] lg:!w-[110%] xl:!w-[100%]',
          item.HideOn3xs ? '3xs:hidden' : '',
        ]"
      />

      <Motion
        v-if="item.HeroImage"
        class="grid"
        :key="`mainImage-${item.name}`"
        :initial="animations.mainImage.initial"
        :animate="
          hasBeenAnimated(item.name)
            ? animations.mainImage.animate
            : animations.mainImage.initial
        "
        :transition="{ ...animations.mainImage.transition }"
      >
        <NuxtImg
          :src="item.HeroImage"
          :alt="`Imagen princpal de ${item.name}`"
          :class="[
            'justify-self-center md:!w-[120%] lg:!w-[110%] xl:!w-[100%] 3xs:w-[120%] 2xs:block 2xs:w-[150%] xs:w-[140%] portrait-lg:!w-[150%]',
            item.HideOn3xs ? '3xs:hidden' : '',
          ]"
        />
      </Motion>
    </div>

    <div v-if="item.serviceVisualLayers" class="mr-8">
      <CompositeVisual
        :layers="item.serviceVisualLayers.images || item.serviceVisualLayers"
        :hasAnimated="hasBeenAnimated(item.name)"
        :containerClass="item.serviceVisualLayers.cssClass"
        :imageClasses="['max-h-[80dvh]']"
      />
    </div>
  </section>
</template>
