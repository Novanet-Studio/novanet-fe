<script setup lang="ts">
import { ref } from 'vue'
import { marked } from 'marked'
const props = defineProps<{ content: any }>()

const activeTab = ref(0)
</script>

<template>
   <div
      class="tab-headers text-[1rem] leading-[1.25rem] md:text-[1.125rem] md:leading-[1.375rem] 3xl:text-[1.563rem] 3xl:leading-[1.813rem]">
      <button v-for="(tab, idx) in content.tabs" :key="tab.label"
         :class="[`tab-header text-left 2xs:text-base`, { active: activeTab === idx }, { [content.tabColorActive]: activeTab === idx }, content.tabColor]"
         @click="activeTab = idx">
         {{ tab.label }}
      </button>
   </div>
   <transition name="fade" mode="out-in">
      <div
         class="tab-content text-[1rem] leading-[1.25rem] md:text-[1.125rem] md:leading-[1.375rem] 3xl:text-[1.563rem] 3xl:leading-[1.813rem]"
         :key="activeTab">
         <div v-html="marked(content.tabs[activeTab].content)" />
      </div>
   </transition>
</template>
``