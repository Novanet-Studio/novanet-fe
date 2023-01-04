<template>
  <container-wrapper>
    <custom-header
      icon="t"
      :view="`Portafolio / ${project?.attributes?.titulo}`"
      bg="header--magenta"
      title-class="nav__title"
    />
    <main class="main">
      <section class="section">
        <div class="project">
          <nuxt-img
            class="project__image"
            :src="project?.attributes.miniatura.data.attributes.url"
            :alt="project?.attributes.miniatura.data.attributes.alternativeText"
          />
          <div class="project__info">
            <time class="date">{{ project?.attributes.ano }}</time>
            <h1>{{ project?.attributes.titulo }}</h1>
            <div v-html="markdown.render(project!.attributes.descripcion)" />
            <ul class="project__gallery">
              <li
                v-for="imagen in project?.attributes.imagenes.data"
                :key="imagen.id"
              >
                <button @click="galleryClick(imagen)" class="project__button">
                  <nuxt-img
                    class="project__thumbnail"
                    :src="imagen.attributes.url"
                    :alt="imagen.attributes.alternativeText"
                    background="#ededed"
                  />
                </button>
                <app-modal
                  v-if="showModal"
                  @close="showModal = false"
                  :image="content"
                  class="modal__item"
                />
              </li>
            </ul>
          </div>

          <template v-if="currentUrl">
            <app-share
              :url="currentUrl"
              :titulo="project!.attributes.titulo"
              :descripcion="project!.attributes.descripcion"
              :imagen="project!.attributes.miniatura.data.attributes.url"
            />
          </template>
        </div>
      </section>
    </main>
  </container-wrapper>
</template>

<script lang="ts" setup>
import MarkdownIt from 'markdown-it';

definePageMeta({
  layout: 'page',
});

const graphql = useStrapiGraphQL();
const projectId = useProjectId();
const currentUrl = useCurrentUrl();
const route = useRoute();

const markdown = new MarkdownIt();
const showModal = ref(false);
const content = ref();
const project = ref<Project.Project>();

useHead({
  title: project.value?.attributes?.titulo,
  meta: [
    {
      name: 'description',
      content: project.value?.attributes?.descripcion.substring(0, 168),
    },
  ],
});

const galleryClick = (image: Project.ImageRaw) => {
  showModal.value = true;
  content.value = image;
};

try {
  const result = await graphql<Project.ProjectsResponse>(
    `
      query Project($slug: String!) {
        proyectos(filters: { slug: { eq: $slug } }) {
          data {
            id
            attributes {
              ano
              ciudad
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
              imagenes {
                data {
                  id
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              categoria {
                data {
                  attributes {
                    nombre
                  }
                }
              }
            }
          }
        }
      }
    `,
    {
      slug: route.params.slug,
    },
  );

  project.value = result.data.proyectos.data[0];
} catch (error: any) {
  console.error(
    'An error occurred while fetching project data: ' + error.message,
  );
}
</script>
