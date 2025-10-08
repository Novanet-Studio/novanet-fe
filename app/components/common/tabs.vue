<script setup lang="ts">
import { ref } from 'vue'
import { marked } from 'marked'
const props = defineProps<{ content: any }>()

const activeTab = ref(0)
</script>

<template>   
      <div class="tab-headers">
         <button v-for="(tab, idx) in content.tabs" :key="tab.label"
            :class="[`tab-header text-left 2xs:text-base`, { active: activeTab === idx }, { [content.tabColorActive]: activeTab === idx }, content.tabColor]" @click="activeTab = idx">
            {{ tab.label }}            
         </button>
      </div>
      <transition name="fade" mode="out-in">
         <div class="tab-content" :key="activeTab">
             <div v-html="marked(content.tabs[activeTab].content)" />
         </div>
      </transition>
</template>
``