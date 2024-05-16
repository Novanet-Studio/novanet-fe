<template>
  <container-wrapper>
    <custom-header
      icon="t"
      view="Portafolio"
      bg="header--magenta"
      title-class="nav__title"
    />
    <main class="main">
      <section class="section">
        <p>
          {{ portfolio?.data.attributes.descripcion }}
        </p>
      </section>

      <div class="section section-filters">
        <button class="button active">Todos</button>
        <button class="button" v-for="category in categories?.data">
          {{ category.attributes.nombre }}
        </button>
      </div>

      <section class="section">
        <div class="categories">
          <nuxt-link
            class="project-item"
            v-for="project in projects?.data"
            :key="project?.id"
            :to="{
              path: `/portafolio/${project?.attributes?.categoria.data.attributes?.slug}/${project?.attributes?.slug}`,
            }"
          >
            <NuxtImg
              v-if="project.attributes.miniatura.data.attributes.url"
              :src="project.attributes.miniatura.data.attributes.url"
              :alt="
                project.attributes.miniatura.data.attributes.alternativeText
              "
              quality="1"
            />
            <div class="overlay">
              <h3 class="overlay-text">
                {{ project.attributes.titulo }}
              </h3>
            </div>
          </nuxt-link>
          <!-- <nuxt-link
            class="categories__items"
            v-for="category in categories?.data"
            :key="category.id"
            :to="{ path: `/portafolio/${category.attributes.slug}` }"
          >
            <div
              class="categories__icon icon"
              :data-icon="category.attributes.icono"
            />
            <h3 class="categories__title">{{ category.attributes.nombre }}</h3>
          </nuxt-link> -->
        </div>
      </section>
    </main>
  </container-wrapper>
</template>

<script lang="ts" setup>
import { animate, stagger } from 'motion';

const graphql = useStrapiGraphQL();

const portfolio = ref<Project.Portfolio>();
const categories = ref<Project.CategoryBody>();
const projects = ref();

definePageMeta({
  layout: 'page',
});

useHead({
  title: 'Portafolio',
  meta: [
    {
      name: 'description',
      content: portfolio.value?.data.attributes.descripcion.substring(0, 168),
    },
  ],
});

function animateElements() {
  animate(
    '.categories > .project-item',
    {
      y: [100, 0],
      opacity: [0, 1],
      visibility: 'visible',
    },
    {
      duration: 1,
      delay: stagger(0.1),
    },
  );
}

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

  const { data: projectsResponse } = await graphql<any>(`
    query Projects {
      proyectos {
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

            categoria {
              data {
                id
                attributes {
                  slug
                }
              }
            }
          }
        }
      }
    }
  `);

  portfolio.value = portfolioResponse.portafolio;
  categories.value = categoriesResponse.categorias;
  projects.value = projectsResponse.proyectos;
} catch (error) {
  console.log('An error occurred while fetching data: ', error);
}

onMounted(() => {
  setTimeout(() => {
    animateElements();
  }, 400);
});
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';
</style>
