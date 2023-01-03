<template>
  <container-wrapper>
    <custom-header
      icon="p"
      view="¡Mensaje enviado!"
      bg="header--blue"
      title-class="nav__title"
    />
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
            <nuxt-img
              v-for="image in images"
              class="pago__logos"
              :src="image.attributes.url"
              :alt="image.attributes.alternativeText"
              quality="1"
              background="#ededed"
              :key="image.id"
            />
          </div>
        </div>
      </section>
    </main>
  </container-wrapper>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'page',
});

useHead({
  title: 'Mensaje enviado',
  meta: [
    {
      name: 'description',
      content:
        'Gracias por contactarnos. Te estaremos respondiendo lo más pronto posible.',
    },
  ],
});

const graphql = useStrapiGraphQL();
const images = ref<Project.ImageRaw[]>([]);

try {
  const { data: servicesResponse } = await graphql<Project.ServiceResponse>(`
    query Services {
      servicio {
        data {
          attributes {
            servicios {
              imagen {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  images.value = servicesResponse.servicio.data.attributes.servicios.map(
    (service) => service.imagen.data,
  );
} catch (error) {}
</script>
