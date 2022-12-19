<template>
  <custom-header
    icon="q"
    :view="`Blog / ${$page.articulos.tag}`"
    bg="header--green"
    title-class="nav__link--title"
  />
  <main class="main">
    <section class="section">
      <article class="article">
        <div class="article__image-share">
          <nuxt-img
            class="article__image"
            :src="$page.articulos.imagen.url"
            :alt="$page.articulos.imagen.alternativeText"
            background="#ededed"
          />
          <app-share
            class="article__share"
            :url="currentUrl"
            :titulo="$page.articulos.titulo"
            :descripcion="$page.articulos.descripcion"
            :imagen="$page.articulos.imagen"
          />
        </div>
        <div class="article__info">
          <h1 class="article__title">{{ $page.articulos.titulo }}</h1>
          <!-- <vue-markdown class="article__description">{{
              $page.articulos.descripcion
            }}</vue-markdown> -->
        </div>
      </article>
    </section>
  </main>
</template>

<!-- <page-query>
query Proyectos($id: ID!) {
  articulos: strapiArticulos(id: $id)  {
    id
    titulo
    descripcion
    tag
    createdAt
    imagen {
      url
      alternativeText
    }
  }
}
</page-query> -->

<script lang="ts" setup>
import './article.scss';

// import Header from '~/components/HeaderPage';
// import Share from '~/components/Share';
// import VueMarkdown from '@adapttive/vue-markdown';

definePageMeta({
  layout: 'page',
});

// this.$ogp({
//   title: this.$page.articulos.titulo,
//   description: this.$page.articulos.descripcion.substring(0, 158),
//   image: this.$page.articulos.imagen.url,
// }),

useHead({
  title: '', // here goes the article title,
  meta: [
    {
      name: 'description',
      content: 'description', // here goes a substring of article description/content
    },
  ],
});

const route = useRoute();
const currentOrigin = ref('');
const currentPath = ref('');
const currentUrl = ref('');

onMounted(() => {
  currentOrigin.value = window.location.origin;
  currentPath.value = route.fullPath;
  currentUrl.value = currentOrigin.value + currentPath.value;
});
</script>
