<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ content: any }>() // Define props to accept content
const { $log } = useNuxtApp()

const form = ref({
  name: '',
  email: '',
  message: ''
})

function handleSubmit() {
  alert(`Submitted:\nName: ${form.value.name}\nEmail: ${form.value.email}\nMessage: ${form.value.message}`)
  form.value.email = ''
  form.value.message = ''
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <input :class="content.formFieldBorder" placeholder="Email" id="email" v-model="form.email" type="email"
        required />
    </div>
    <div>
      <textarea :class="content.formFieldBorder" placeholder="Mensaje" id="message" v-model="form.message"
        required></textarea>
    </div>
    <button :class="content.buttonType" class="cta__primary" type="submit">{{ content.formButtonText }}</button>
  </form>
</template>