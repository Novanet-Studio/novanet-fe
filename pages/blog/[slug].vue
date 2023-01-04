<template>
  <container-wrapper>
    <custom-header
      icon="q"
      :view="`Blog / ${articleItem?.attributes?.titulo}`"
      bg="header--green"
      title-class="nav__link--title"
    />
    <main class="main">
      <section class="section">
        <article class="article">
          <div class="article__image-share">
            <template
              v-if="articleItem?.attributes.imagen.data[0].attributes.url"
            >
              <nuxt-img
                class="article__image"
                :src="articleItem?.attributes.imagen.data[0].attributes.url"
                :alt="
                  articleItem?.attributes.imagen.data[0].attributes
                    .alternativeText
                "
                background="#ededed"
              />
            </template>
            <app-share
              class="article__share"
              :url="currentUrl"
              :titulo="articleItem!.attributes.titulo"
              :descripcion="articleItem!.attributes.descripcion"
              :imagen="articleItem!.attributes.imagen.data[0].attributes.url"
              v-if="articleItem?.attributes?.titulo"
            />
          </div>
          <div class="article__info">
            <h1 class="article__title">{{ articleItem?.attributes.titulo }}</h1>
            <div
              v-html="
                markdown.render(articleItem?.attributes.descripcion ?? '')
              "
            />
          </div>
        </article>
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
const route = useRoute();
const currentUrl = useCurrentUrl();
const markdown = new MarkdownIt();

const articleItem = ref<Project.Article>();

useHead({
  title: articleItem.value?.attributes.titulo,
  meta: [
    {
      name: 'description',
      content: articleItem?.value?.attributes.descripcion.substring(0, 158),
    },
  ],
});

try {
  const response = await graphql<Project.ArticlesResponse>(
    `
      query Articles($slug: String!) {
        articulos(filters: { slug: { eq: $slug } }) {
          data {
            id
            attributes {
              titulo
              descripcion
              tag
              fecha
              imagen {
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
    `,
    {
      slug: route.params.slug,
    },
  );

  const data = response.data.articulos.data as Project.Article[];
  articleItem.value = data[0];
} catch (error) {
  console.error('An error ocurred while fetching article data: ', error);
}
</script>
