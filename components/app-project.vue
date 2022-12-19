<template>
  <custom-header
    icon="t"
    :view="`Portafolio / ${$page.proyectos.categorias.nombre}`"
    bg="header--magenta"
    title-class="nav__title"
  />
  <main class="main">
    <section class="section">
      <div class="project">
        <nuxt-img
          class="project__image"
          :src="$page.proyectos.miniatura.url"
          :alt="$page.proyectos.miniatura.alternativeText"
        />
        <div class="project__info">
          <time class="date">{{ $page.proyectos.Ano }}</time>
          <h1>{{ $page.proyectos.titulo }}</h1>
          <!-- <vue-markdown class="article__description">{{
              $page.proyectos.descripcion
            }}</vue-markdown> -->
          <ul class="project__gallery">
            <li v-for="imagen in $page.proyectos.imagenes" :key="imagen.id">
              <button
                @click="
                  showModal = true;
                  content = imagen;
                "
                class="project__button"
              >
                <nuxt-img
                  class="project__thumbnail"
                  :src="imagen.url"
                  :alt="imagen.alternativeText"
                  background="#ededed"
                />
              </button>
              <app-modal
                v-if="showModal"
                @close="showModal = false"
                :image="content"
                clase="modal__item"
              />
            </li>
          </ul>
        </div>

        <app-share
          :url="currentUrl"
          :titulo="$page.proyectos.titulo"
          :descripcion="$page.proyectos.descripcion"
          :imagen="$page.proyectos.miniatura.url"
        />
        <!-- {{ console.log(currentUrl) }} -->
      </div>
    </section>
  </main>
</template>

<!-- <page-query>
query Proyectos($id: ID!) {
  proyectos: strapiProyectos(id: $id)  {
    id   
    Ano
    ciudad
    titulo
    descripcion
    slug
    miniatura {
      url
      alternativeText
    }
    imagenes {
      id
      url
      alternativeText
    }
    categorias {
      nombre
    }
  }
}
</page-query> -->

<script lang="ts" setup>
import './project.scss';

useHead({
  title: '', // here goes the project title,
  meta: [
    {
      name: 'description',
      content: 'description', // here goes a substring of article description/content
    },
  ],
});

const route = useRoute();

const showModal = ref(false);
const content = ref(null);
const currentOrigin = ref('');
const currentPath = ref('');
const currentUrl = ref('');

onMounted(() => {
  currentOrigin.value = window.location.origin;
  currentPath.value = route.fullPath;
  currentUrl.value = currentOrigin.value + currentPath.value;
});
</script>
