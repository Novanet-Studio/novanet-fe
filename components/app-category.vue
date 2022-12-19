<template>
  <custom-header
    icon="t"
    :view="`Portafolio / ${$page.categorias.nombre}`"
    bg="header--magenta"
    title-class="nav__title"
  />
  <main class="main">
    <section class="section">
      <div class="categories">
        <div class="categories__items">
          <div
            :data-icon="$page.categorias.icono"
            class="categories__icon icon"
          ></div>
          <h2 class="categories__title">{{ $page.categorias.nombre }}</h2>
        </div>
      </div>
      <p>{{ $page.categorias.descripcion }}</p>
    </section>
    <section class="section">
      <div class="categories categories__internal">
        <div v-for="proyecto in $page.categorias.proyectos" :key="proyecto.id">
          <app-card
            class="categories__items"
            view="portafolio"
            :imagen="proyecto.miniatura"
            :coleccion="$page.categorias.slug"
            :alias="proyecto"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<!-- <page-query>
query Categoria($id: ID!) {
  categorias: strapiCategorias(id: $id)  {
    id
    nombre
    icono
    descripcion
    slug
    proyectos {
      id
      titulo
      miniatura {
        url
        alternativeText
      }
      descripcion
      slug
    }    
  }
}
</page-query> -->

<script lang="ts" setup>
import '../pages/portafolio.scss';

useHead({
  title: 'Categoria', // Set title from response category name
  meta: [
    {
      name: 'description',
      content:
        'Categoria is a free and open source toolkit built on top of the world.', // set substring from response of query
    },
  ],
});
</script>
