<template>
  <container-wrapper>
  <custom-header icon="f" view="Nosotros" bg="header--green" title-class="nav__title" />
  <main class="main">
    <section class="section">
      <h2>{{ about?.data.attributes.principal.titulo }}</h2>
      <p>
        {{ about?.data.attributes.principal.descripcion }}
      </p>
    </section>
    <section class="section">
      <h2 class="green">{{ about?.data.attributes.proposito.titulo }}</h2>
      <p>{{ about?.data.attributes.proposito.descripcion }}</p>
    </section>
    <section class="section">
      <h2 class="green">{{ about?.data.attributes.objetivo.titulo }}</h2>
      <p>
        {{ about?.data.attributes.objetivo.descripcion }}
      </p>
    </section>
    <section class="section">
      <h2 class="green">{{ about?.data.attributes.trabajo.titulo }}</h2>
      <p>{{ about?.data.attributes.trabajo.descripcion }}</p>
    </section>
  </main>
</container-wrapper>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'page',
});

const graphql = useStrapiGraphQL();
const about = ref<Project.AboutUs>();

useHead({
  title: 'Nosotros',
  meta: [
    {
      name: 'description',
      content: about.value?.data.attributes.principal.descripcion.substring(
        0,
        168,
      ),
    },
  ],
});

try {
  const response = await graphql<Project.AboutUsResponse>(`
    query AboutUs {
      nosotro {
        data {
          attributes {
            principal {
              titulo
              descripcion
            }

            proposito {
              titulo
              descripcion
            }

            objetivo {
              titulo
              descripcion
            }

            trabajo {
              titulo
              descripcion
            }
          }
        }
      }
    }
  `);

  about.value = response.data.nosotro;
} catch (error) {
  console.log('An error occurred while getting about-us data: ', error);
}
</script>
