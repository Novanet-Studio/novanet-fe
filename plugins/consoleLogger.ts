import { defineNuxtPlugin } from 'nuxt/app'
import { log } from '../app/utils/logger'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('log', log)
})