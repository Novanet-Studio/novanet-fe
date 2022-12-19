<template>
  <custom-header icon="q" view="Blog" bg="header--green" title-class="nav__title" />
  <main class="main">
    <section class="section">
      <p>
        {{ blog?.data.blog.descripcion }}
      </p>
    </section>

    <section class="section">
      <div class="blog">
        <div v-for="article in articles?.data.articulos" :key="article.id">
          <app-card class="blog__articulos" view="blog" :imagen="article.imagen" :coleccion="article.tag"
            :alias="article" :descripcion="article.descripcion" is-blog />
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import './blog.scss';

definePageMeta({
  layout: 'page',
});

const graphql = useStrapiGraphQL();

const blog = ref<Project.BlogResponse>();
const articles = ref<Project.ArticlesResponse>();

useHead({
  title: 'Blog',
  meta: [
    {
      name: 'description',
      content: blog.value?.data.blog.descripcion.substring(0, 168),
    },
  ],
});

try {
  blog.value = await graphql<Project.BlogResponse>(`
    query Blog {
      blog {
        descripcion
      }
    }
  `);

  articles.value = await graphql<Project.ArticlesResponse>(`
    query Articles {
      articulos(sort: "fecha:desc") {
        id
        titulo
        descripcion
        tag
        fecha
        slug
        imagen {
          url
          alternativeText
        }
      }
    }
  `);
} catch (error) {
  console.log('An error occurred: ' + error);
}
</script>
