<template>
  <container-wrapper>
    <custom-header icon="p" view="¡Mensaje enviado!" bg="header--blue" title-class="nav__title" />
    <main class="main">
      <section class="section">
        <h2 class="blue">¡Gracias por contactarnos!</h2>
        <p>
          Te estarmos respondiendo lo más pronto posible. Juntos desarrollaremos
          las tácticas y acciones para posicionarte donde quieres estar.
        </p>
      </section>
      <section class="section">
        <div class="pago">
          <div>
            <nuxt-img class="pago__logos" src="/novanet-inicio-diseno.jpg"
              alt="Forma triangular del servicio de diseño gráfico" background="#ededed" quality="100" />
          </div>
          <div>
            <nuxt-img class="pago__logos" src="/novanet-inicio-web.jpg"
              alt="Forma triangular del servicio de tecnologías web" background="#ededed" quality="100" />
          </div>
          <div>
            <nuxt-img class="pago__logos" src="/novanet-inicio-asesoria.jpg"
              alt="Forma triangular del servicio de asesoría" background="#ededed" quality="100" />
          </div>
        </div>
      </section>
    </main>
  </container-wrapper>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'page'
});

useHead({
  title: 'Mensaje enviado',
  meta: [
    {
      name: 'description',
      content: 'Gracias por contactarnos. Te estaremos respondiendo lo más pronto posible.',
    }
  ]
});
</script>
