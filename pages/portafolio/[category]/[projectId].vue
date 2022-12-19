<template>
  <custom-header icon="t" :view="`Portafolio / ${project.titulo}`" bg="header--magenta" title-class="nav__title" />
  <main class="main">
    <section class="section">
      <div class="project">
        <nuxt-img class="project__image" :src="project.miniatura.url" :alt="project.miniatura.alternativeText" />
        <div class="project__info">
          <time class="date">{{ project.Ano }}</time>
          <h1>{{ project.titulo }}</h1>
          <div v-html="markdown.render(project.descripcion)" />
          <ul class="project__gallery">
            <li v-for="imagen in project.imagenes" :key="imagen.id">
              <button @click="() => {
  showModal = true
  content = imagen
}
" class="project__button">
                <nuxt-img class="project__thumbnail" :src="imagen.url" :alt="imagen.alternativeText"
                  background="#ededed" />
              </button>
              <app-modal v-if="showModal" @close="showModal = false" :image="content" class="modal__item" />
            </li>
          </ul>
        </div>

        <app-share :url="currentUrl" :titulo="project.titulo" :descripcion="project.descripcion"
          :imagen="project.miniatura.url" />
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import MarkdownIt from 'markdown-it';
import '~/components/project.scss';

definePageMeta({
  layout: 'page',
});

const graphql = useStrapiGraphQL();
const projectId = useProjectId();
const currentUrl = useCurrentUrl();

const markdown = new MarkdownIt();
const showModal = ref(false);
const content = ref();
const project = ref<Project.ProjectResponse>();

useHead({
  title: '', // Project title
  meta: [
    {
      name: 'description',
      content: '' // substring based on the project description
    }
  ],
});

try {
  const result = await graphql<Project.ProjectResponse>(`
    query Projects($id: ID!) {
      proyectos(where: { id: $id }) {
        id
        Ano
        ciudad
        titulo
        slug
        descripcion
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
  ,`, {
    id: projectId.value,
  });

  project.value = result.data.proyectos[0];
} catch (error) {
  console.error('An error occurred while fetching project data: ' + error);
}
</script>
