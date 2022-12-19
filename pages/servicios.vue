<template>
  <custom-header icon="m" view="Servicios" bg="header--blue" title-class="nav__title" />
  <main class="main">
    <section class="section">
      <p>
        {{ services?.data.servicio.descripcion }}
      </p>
    </section>

    <section class="section">
      <div class="services">
        <div class="services__items" v-for="service in services?.data.servicio.servicios">
          <div class="services__heading">
            <nuxt-img class="services__image" :src="service.imagen.url" :alt="service.imagen.alternativeText"
              quality="1" v-if="service.imagen.url" />
            <div class="services__info">
              <h2 class="services__title">
                {{ service.titulo }}
              </h2>
              <p>{{ service.descripcion }}</p>
            </div>
          </div>
          <v-tabs :options="{ useUrlFragment: false }">
            <v-tab v-for="(item) in service.especialidad" :key="item.id" :name="item.titulo">
              <div :data-icon="item?.icono" class="services__icon icon"></div>
              <div v-html="markdown.render(item.descripcion)" />
            </v-tab>
          </v-tabs>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { Tabs as VTabs, Tab as VTab } from 'vue3-tabs-component';
import MarkdownIt from 'markdown-it';
import '~/assets/scss/_vue-tabs.scss';
import './servicios.scss';

definePageMeta({
  layout: 'page',
});

const graphql = useStrapiGraphQL();
const services = ref<Project.ServicesResponse>();

const markdown = new MarkdownIt();

useHead({
  title: 'Servicios',
  meta: [
    {
      name: 'description',
      content: services.value?.data?.servicio?.descripcion.substring(
        0,
        168,
      ),
    },
  ],
});

try {
  services.value = await graphql<Project.ServicesResponse>(`
    query Services {
      servicio {
        descripcion
        servicios {
          id
          titulo
          descripcion
          imagen {
            url
            alternativeText
          }
          especialidad {
            id
            titulo
            descripcion
            icono
          }
        }
      }
    }
  `);
} catch (error) {
  console.log('An error occurred while getting services data: ', error);
}
</script>
