<template>
  <section class="section section--home">
    <h1 class="shapes__titulo">{{ home?.data.inicio.principal }}</h1>
    <div class="shapes" v-if="services?.data?.servicio?.servicios?.length">
      <button
        class="shapes__item"
        v-for="service in services?.data?.servicio?.servicios"
        :id="service.id"
        @click="
          () => {
            showModal = true;
            data.especialidad = service.especialidad;
            data.link = service.link;
            data.titulo = service.titulo;
          }
        "
      >
        <nuxt-img
          class="shapes__img"
          :src="service.imagen.url"
          :alt="service.imagen.alternativeText"
          width="290"
          background="#d6f630"
          quality="1"
          loading="lazy"
        />
        <h4 class="shapes__subtitulo">{{ service.titulo }}</h4>
      </button>
      <app-modal
        v-if="showModal"
        @close="showModal = false"
        :title="data?.titulo ?? ''"
        :item="data?.especialidad ?? []"
        :link="data?.link ?? ''"
        class="modal__index"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import './index.scss';

const home = ref<Project.HomeResponse>();
const services = ref<Project.ServiceResponse>();

useHead({
  title: 'Inicio',
  meta: [
    {
      name: 'description',
      content: home?.value?.data?.inicio?.principal,
    },
  ],
});

const graphql = useStrapiGraphQL();

const showModal = ref<Boolean>(false);
const data = reactive<Partial<Project.Services>>({
  titulo: '',
  especialidad: [],
  link: '',
});

try {
  home.value = await graphql<Project.HomeResponse>(`
    query Home {
      inicio {
        principal
        secundario
        contacto {
          prefix
          icono
          descripcion
        }
      }
    }
  `);

  services.value = await graphql<Project.ServiceResponse>(`
    query Services {
      servicio {
        servicios {
          id
          titulo
          link
          imagen {
            url
            alternativeText
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
  `);
} catch (error) {
  console.error('An error occured while fetching home data! ', error);
}
</script>
