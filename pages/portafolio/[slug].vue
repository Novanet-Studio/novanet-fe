<template>
  <custom-header icon="t" :view="`Portafolio / ${categories?.data.categorias[0].nombre}`" bg="header--magenta"
    title-class="nav__title" />
  <main class="main">
    <section class="section">
      <div class="categories">
        <div class="categories__items">
          <div :data-icon="categories?.data.categorias[0].icono" class="categories__icon icon"></div>
          <h2 class="categories__title">{{ categories?.data.categorias[0].nombre }}</h2>
        </div>
      </div>
      <p>{{ categories?.data.categorias[0].descripcion }}</p>
    </section>
    <section class="section">
      <div class="categories categories__internal">
        <div v-for="project in categories?.data.categorias[0].proyectos" :key="project.id">
          <app-card class="categories__items" view="portafolio" :imagen="project.miniatura"
            :coleccion="categories?.data.categorias[0].slug ?? ''" :alias="project" />
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'page',
});

const graphql = useStrapiGraphQL();
const route = useRoute();

const categories = ref<Project.CategoriesResponse>();

useHead({
  title: categories.value?.data.categorias[0].nombre,
  meta: [
    {
      name: 'description',
      content: categories.value?.data.categorias[0].descripcion?.substring(0, 158),
    }
  ],
});

try {
  categories.value = await graphql<Project.CategoriesResponse>(`
    query Category($slug: String!) {
      categorias(where: { slug: $slug }) {
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
  ,`, {
    slug: route.params.slug,
  });

} catch (error) {
  console.error('An error occurred while fetching project by categories: ', error);
}
</script>
