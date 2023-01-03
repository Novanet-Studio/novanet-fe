<template>
  <container-wrapper>
    <custom-header icon="t" :view="`Portafolio / ${categories[0].attributes.nombre}`" bg="header--magenta"
      title-class="nav__title" />

    <main class="main">
      <section class="section">
        <div class="categories">
          <div class="categories__items">
            <div :data-icon="categories[0].attributes.icono" class="categories__icon icon"></div>
            <h2 class="categories__title">{{ categories[0].attributes.nombre }}</h2>
          </div>
        </div>
        <p>{{ categories[0].attributes.descripcion }}</p>
      </section>
      <section class="section">
        <div class="categories categories__internal">
          <div v-for="project in categories[0].attributes.proyecto.data" :key="project.id">
            <app-card class="categories__items" view="portafolio" :imagen="project.attributes.miniatura.data"
              :coleccion="categories[0].attributes.slug ?? ''" :data="project" />
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

const graphql = useStrapiGraphQL();
const route = useRoute();

const categories = ref<Project.Category[]>([]);

useHead({
  title: categories?.value[0]?.attributes.nombre,
  meta: [
    {
      name: 'description',
      content: categories?.value[0]?.attributes.descripcion?.substring(0, 158),
    }
  ],
});

try {
  const { data: categoriesResponse } = await graphql<Project.CategoriesResponse>(`
    query Category($slug: String!) {
      categorias(filters: { slug: { eq: $slug } }) {
        data {
          id
          attributes {
            nombre
            icono
            descripcion
            slug
            proyecto {
              data {
                id
                attributes {
                  titulo
                  descripcion
                  slug
                  miniatura {
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
      }
    }
  ,`, {
    slug: route.params.slug,
  });

  categories.value = categoriesResponse.categorias.data;

} catch (error) {
  console.error('An error occurred while fetching project by categories: ', error);
}
</script>
