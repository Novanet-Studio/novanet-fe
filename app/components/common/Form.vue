<script setup lang="ts">
import { ref, reactive } from "vue";
import { useToast } from "~/composables/useToast";

const props = defineProps<{ content: any }>();

const { showToast } = useToast();

const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 500;

const isSubmitting = ref(false);

const form = ref({
  email: "",
  message: "",
});

const errors = reactive({
  email: "",
  message: "",
});

function validateForm(): boolean {
  errors.email = "";
  errors.message = "";

  if (!form.value.email) {
    errors.email = "El correo electrónico es obligatorio.";
  } else if (
    !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(form.value.email)
  ) {
    errors.email = "Por favor, introduce un correo electrónico válido.";
  }

  if (!form.value.message) {
    errors.message = "El mensaje es obligatorio.";
  } else if (form.value.message.length < MIN_MESSAGE_LENGTH) {
    errors.message = `El mensaje debe tener al menos ${MIN_MESSAGE_LENGTH} caracteres.`;
  } else if (form.value.message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `El mensaje no puede exceder los ${MAX_MESSAGE_LENGTH} caracteres.`;
  }

  return !errors.email && !errors.message;
}

const encode = (data: Record<string, any>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

async function handleSubmit() {
  if (!validateForm()) {
    showToast("Por favor, corrige los errores en el formulario.", "error");
    return;
  }

  isSubmitting.value = true;

  try {
    const formData = encode({
      "form-name": "contact-form",
      ...form.value,
    });

    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
    }

    showToast("¡Mensaje enviado con éxito!", "success");

    form.value.email = "";
    form.value.message = "";
  } catch (error) {
    showToast(
      "Hubo un problema al enviar el mensaje. Inténtalo de nuevo.",
      "error"
    );
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <form
    name="contact-form"
    @submit.prevent="handleSubmit"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    novalidate
  >
    <input type="hidden" name="form-name" value="contact-form" />

    <p class="hidden">
      <label
        >Don’t fill this out if you’re human: <input name="bot-field"
      /></label>
    </p>

    <div>
      <input
        :class="[
          content.formFieldBorder,
          content.placeHolderColor,
          { 'border-raspberry !border-b-2': errors.email },
          'resize-none outline-none focus:bg-azure/5',
        ]"
        placeholder="Email"
        name="email"
        id="email"
        v-model="form.email"
        type="email"
      />
      <p v-if="errors.email" class="text-raspberry text-sm mb-1">
        {{ errors.email }}
      </p>
    </div>
    <div>
      <textarea
        :class="[
          content.formFieldBorder,
          content.placeHolderColor,
          { 'border-raspberry !border-b-2': errors.message },
          'resize-none outline-none focus:bg-azure/5',
        ]"
        placeholder="Mensaje"
        name="message"
        id="message"
        v-model="form.message"
        rows="2"
      ></textarea>
      <p v-if="errors.message" class="text-raspberry text-sm mb-1">
        {{ errors.message }}
      </p>
    </div>
    <button :class="[`cta__primary`, content.buttonType]" type="submit">
      {{ content.formButtonText }}
    </button>
  </form>
</template>
