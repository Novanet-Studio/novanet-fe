<template>
  <footer class="footer">
    <div class="rrss">
      <a
        class="rrss__link rrss__link--triangle"
        href="https://www.facebook.com/NovanetStudio"
        target="_blank"
        aria-label="Ir al Facebook de Novanet Studio"
        rel="noopener noreferrer"
      >
        <font-awesome-icon :icon="['fab', 'facebook-f']" />
      </a>
      <a
        class="rrss__link rrss__link--square"
        href="https://twitter.com/novanetstudio"
        target="_blank"
        aria-label="Ir al twitter de Novanet Studio"
        rel="noopener noreferrer"
      >
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </a>
      <a
        class="rrss__link rrss__link--circle"
        href="https://www.instagram.com/novanetstudio/"
        target="_blank"
        aria-label="Ir al instagram de Novanet Studio"
        rel="noopener noreferrer"
      >
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>

      <!-- <a
        class="rrss__chat rrss__chat--whatsapp"
        href="https://wa.me/message/QA5DVPVFSXYCJ1"
        target="_blank"
        aria-label="Ir al chat de whatsapp de Novanet Studio"
        rel="noopener noreferrer"
      >
        <font-awesome-icon
          class="mensaje__icono"
          :icon="[
            $static.inicio.edges[0].node.contacto.prefix,
            $static.inicio.edges[0].node.contacto.icono,
          ]"
        />
      </a> -->
      <a
        class="mensaje__whatsapp"
        href="https://wa.me/message/QA5DVPVFSXYCJ1"
        target="_blank"
        aria-label="Ir al chat de whatsapp de Novanet Studio"
        rel="noopener noreferrer"
      >
        Escríbenos por WhatsApp
      </a>
    </div>
    <div class="rrss">
      <p class="mensaje__legal">
        Novanet Studio - Derechos reservados {{ new Date().getFullYear() }}
      </p>
    </div>
  </footer>
</template>

<script>
import "../layouts/default.vue";
</script>
