<template>
  <custom-header icon="t" view="Portafolio" bg="header--magenta" title-class="nav__title" />
  <main class="main">
    <section class="section">
      <p>
        {{ portfolio?.data.portafolio.descripcion }}
      </p>
    </section>

    <section class="section">
      <div class="categories">
        <nuxt-link class="categories__items" v-for="category in categories?.data.categorias" :key="category.id"
          :to="{ path: `/portafolio/${category.slug}` }">
          <div class="categories__icon icon" :data-icon="category.icono" />
          <h3 class="categories__title">{{ category.nombre }}</h3>
        </nuxt-link>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import '../portafolio.scss';

const graphql = useStrapiGraphQL();

const portfolio = ref<Project.PortfolioResponse>();
const categories = ref<Project.CategoryResponse>();

definePageMeta({
  layout: 'page',
});

useHead({
  title: 'Portafolio',
  meta: [
    {
      name: 'description',
      content: portfolio.value?.data.portafolio.descripcion.substring(
        0,
        168,
      ),
    },
  ],
});

try {
  portfolio.value = await graphql<Project.PortfolioResponse>(`
    query Portfolio {
      portafolio {
        descripcion
      }
    }
  `);

  categories.value = await graphql<Project.CategoryResponse>(`
    query Categories {
      categorias {
        id
        icono
        nombre
        slug
      }
    }
  `);
} catch (error) {
  console.log('An error occurred while fetching data: ', error);
}
</script>
