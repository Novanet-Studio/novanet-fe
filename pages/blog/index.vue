<template>
  <div style="width: 100vw; padding-right: 0">
    <custom-header icon="q" view="Blog" bg="header--green" title-class="nav__title" />
    <main class="main">
      <section class="section">
        <p>
          {{ blog?.data.blog.data.attributes.descripcion }}
        </p>
      </section>

      <section class="section">
        <div class="blog">
          <div v-for="article in articles" :key="article.id">
            <app-card class="blog__articulos" view="blog" :imagen="article?.attributes?.imagen.data[0]"
              :coleccion="article?.attributes?.tag" :data="article" :descripcion="article?.attributes?.descripcion"
              is-blog />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'page',
});

const graphql = useStrapiGraphQL();

const blog = ref<Project.BlogResponse>();
const articles = ref<Project.Article[]>([]);

useHead({
  title: 'Blog',
  meta: [
    {
      name: 'description',
      content: blog.value?.data.blog.data.attributes.descripcion.substring(0, 168),
    },
  ],
});

try {
  blog.value = await graphql<Project.BlogResponse>(`
    query Blog {
      blog {
        data {
          attributes {
            descripcion
          }
        }
      }
    }
  `);

  const { data: articlesData } = await graphql<Project.ArticlesResponse>(`
    query Articles {
      articulos(sort: "fecha:desc") {
        data {
          id
          attributes {
            titulo
            descripcion
            tag
            fecha
            slug
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
  `);

  articles.value = articlesData.articulos.data as Project.Article[];
} catch (error) {
  console.log('An error occurred: ', error);
}
</script>
