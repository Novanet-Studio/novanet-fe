<template>
  <custom-header icon="q" :view="`Blog / ${articleItem?.titulo}`" bg="header--green" title-class="nav__link--title" />
  <main class="main">
    <section class="section">
      <article class="article">
        <div class="article__image-share">
          <template v-if="articleItem?.imagen?.url">
            <nuxt-img class="article__image" :src="articleItem?.imagen.url" :alt="articleItem?.imagen.alternativeText"
              background="#ededed" />
          </template>
          <app-share class="article__share" :url="currentUrl" :titulo="articleItem!.titulo"
            :descripcion="articleItem!.descripcion" :imagen="articleItem!.imagen.url" />
        </div>
        <div class="article__info">
          <h1 class="article__title">{{ articleItem?.titulo }}</h1>
          <div v-html="markdown.render(articleItem?.descripcion ?? '')" />
        </div>
      </article>
    </section>
  </main>
</template>

<script lang="ts" setup>
import MarkdownIt from 'markdown-it';
import './article.scss';

definePageMeta({
  layout: 'page',
});

const graphql = useStrapiGraphQL();
const articleId = useArticleId();
const currentUrl = useCurrentUrl();
const markdown = new MarkdownIt();

const articleItem = ref<Project.Article>();

useHead({
  meta: [{
    name: 'description',
    content: articleItem?.value?.descripcion.substring(0, 158) ?? '',
  }]
})

try {
  const response = await graphql<Project.ArticleResponse>(`
    query Articles($id: ID!) {
      articulo(id: $id) {
        id
        titulo
        descripcion
        tag
        fecha
        imagen {
          url
          alternativeText
        }
      }
    }
  `, {
    id: articleId.value,
  });

  articleItem.value = response.data.articulo;
  console.log(articleItem.value);
} catch (error) {
  console.error('An error ocurred while fetching article data: ', error);
}
</script>
