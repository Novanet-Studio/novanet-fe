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
        <button
          class="button"
          :class="{
            active: categoryActive === 'all',
          }"
          @click="filterByCategory('all')"
        >
          Todos
        </button>
        <button
          class="button"
          :class="{
            active: categoryActive === category.attributes.slug,
          }"
          v-for="category in categories?.data"
          @click="filterByCategory(category.attributes.slug)"
        >
          {{ category.attributes.nombre }}
        </button>
      </div>

      <section class="section" :key="page">
        <div class="categories" :key="categoryActive" ref="scrollComponent">
          <nuxt-link
            class="project-item"
            v-for="project in projectsResult"
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
              loading="lazy"
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
          <!-- <skeleton-loading
            :show="isLoading"
            v-for="(n, index) in 4"
            :key="n"
            :style="{
              opacity: 1 - index / 4,
            }"
          /> -->
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
const scrollComponent = ref<HTMLDivElement | null>(null);
const page = ref<number>(1);

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

const {
  categoryActive,
  projectsResult,
  fetchProjects,
  filterByCategory,
  pageCount,
} = useProjects();

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

function animateWithTimeout(time = 600) {
  setTimeout(() => {
    animateElements();
  }, time);
}

function handleScroll() {
  const element = scrollComponent.value;

  if (
    element &&
    element?.getBoundingClientRect()?.bottom < window.innerHeight
  ) {
    if (page.value <= pageCount.value) {
      page.value += 1;
      fetchProjects(page.value, 10);
    }
  }
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

  watch(categoryActive, () => {
    setTimeout(() => {
      animateElements();
    }, 400);
  });

  portfolio.value = portfolioResponse.portafolio;
  categories.value = categoriesResponse.categorias;
} catch (error) {
  console.log('An error occurred while fetching data: ', error);
}

watch(page, () => {
  animateWithTimeout();
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  animateWithTimeout();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';
</style>
