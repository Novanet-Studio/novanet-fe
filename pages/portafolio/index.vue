<template>
  <custom-header icon="t" view="Portafolio" bg="header--magenta" title-class="nav__title" />
  <main class="main">
    <section class="section">
      <p>
        {{ portfolio?.data.attributes.descripcion }}
      </p>
    </section>

    <section class="section">
      <div class="categories">
        <nuxt-link class="categories__items" v-for="category in categories?.data" :key="category.id"
          :to="{ path: `/portafolio/${category.attributes.slug}` }">
          <div class="categories__icon icon" :data-icon="category.attributes.icono" />
          <h3 class="categories__title">{{ category.attributes.nombre }}</h3>
        </nuxt-link>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
const graphql = useStrapiGraphQL();

const portfolio = ref<Project.Portfolio>();
const categories = ref<Project.CategoryBody>();

definePageMeta({
  layout: 'page',
});

useHead({
  title: 'Portafolio',
  meta: [
    {
      name: 'description',
      content: portfolio.value?.data.attributes.descripcion.substring(
        0,
        168,
      ),
    },
  ],
});

try {
  const { data: portfolioResponse } = await graphql<Project.PortfolioResponse>(`
    query Portfolio {
      portafolio {
        data {
          attributes {
            descripcion
          }
        }
      }
    }
  `);

  const { data: categoriesResponse } = await graphql<Project.CategoryResponse>(`
    query Categories {
      categorias {
        data {
          id
          attributes {
            icono
            nombre
            slug
          }
        }
      }
    }
  `);

  portfolio.value = portfolioResponse.portafolio;
  categories.value = categoriesResponse.categorias;
} catch (error) {
  console.log('An error occurred while fetching data: ', error);
}
</script>
