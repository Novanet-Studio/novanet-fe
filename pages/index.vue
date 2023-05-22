<template>
  <section class="section section--home">
    <h1 class="shapes__titulo">{{ home?.data.attributes.principal }}</h1>
    <div class="shapes" v-if="services?.data.attributes.servicios.length">
      <button class="shapes__item" v-for="service in services.data.attributes.servicios" :id="service.id"
        @click="clickShapes(service)">
        <nuxt-img class="shapes__img" :src="service.imagen.data.attributes.url"
          :alt="service.imagen.data.attributes.alternativeText" width="290" background="#d6f630" quality="1"
          loading="lazy" />
        <h4 class="shapes__subtitulo">{{ service.titulo }}</h4>
      </button>
      <app-modal v-if="showModal" @close="showModal = false" :title="data?.titulo ?? ''" :description="data?.descripcion ?? ''"
        :item="data?.especialidad ?? []" :link="data?.link ?? ''" class="modal__index" />
    </div>
  </section>
</template>

<script lang="ts" setup>
const home = ref<Project.Home>();
const services = ref<Project.Service>();

useHead({
  title: 'Inicio',
  meta: [
    {
      name: 'description',
      content: home.value?.data.attributes.principal,
    },
  ],
});

const graphql = useStrapiGraphQL();

const showModal = ref<Boolean>(false);
const data = reactive<Partial<Project.Services>>({
  titulo: '',
  descripcion:'',
  especialidad: [],
  link: '',
});

const clickShapes = (service: Project.Services) => {
  showModal.value = true;
  data.especialidad = service.especialidad;
  data.link = service.link;
  data.titulo = service.titulo;
  data.descripcion = service.descripcion
}

try {
  const { data: homeResponse } = await graphql<Project.HomeResponse>(`
    query Home {
      inicio {
        data {
          attributes {
            principal
            contacto {
              prefix
              icono
              descripcion
            }
          }
        }
      }
    }
  `);


  const { data: servicesResponse } = await graphql<Project.ServiceResponse>(`
    query Services {
      servicio {
        data {
          attributes {
            servicios {
              id
              titulo
              descripcion
              link
              imagen {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              especialidad {
                id
                titulo
                icono
                descripcion
              }
            }
          }
        }
      }
    }
  `);

  home.value = homeResponse.inicio;
  services.value = servicesResponse.servicio;
} catch (error) {
  console.error('An error occured while fetching home data! ', error);
}
</script>
