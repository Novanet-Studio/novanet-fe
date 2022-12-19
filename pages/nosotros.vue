<template>
  <custom-header
    icon="f"
    view="Nosotros"
    bg="header--green"
    title-class="nav__title"
  />
  <main class="main">
    <section class="section">
      <h2>{{ aboutUs?.data.nosotro.principal.titulo }}</h2>
      <p>
        {{ aboutUs?.data.nosotro.principal.descripcion }}
      </p>
    </section>
    <section class="section">
      <h2 class="green">{{ aboutUs?.data.nosotro.proposito.titulo }}</h2>
      <p>{{ aboutUs?.data.nosotro.proposito.descripcion }}</p>
    </section>
    <section class="section">
      <h2 class="green">{{ aboutUs?.data.nosotro.objetivo.titulo }}</h2>
      <p>
        {{ aboutUs?.data.nosotro.objetivo.descripcion }}
      </p>
    </section>
    <section class="section">
      <h2 class="green">{{ aboutUs?.data.nosotro.trabaja.titulo }}</h2>
      <p>{{ aboutUs?.data.nosotro.trabaja.descripcion }}</p>
    </section>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'page',
});

const graphql = useStrapiGraphQL();
const aboutUs = ref<Project.AboutUsResponse>();

useHead({
  title: 'Nosotros',
  meta: [
    {
      name: 'description',
      content: aboutUs.value?.data?.nosotro?.principal.descripcion.substring(
        0,
        168,
      ),
    },
  ],
});

try {
  aboutUs.value = await graphql<Project.AboutUsResponse>(`
    query AboutUs {
      nosotro {
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

        trabaja {
          titulo
          descripcion
        }
      }
    }
  `);
} catch (error) {
  console.log('An error occurred while getting about-us data: ', error);
}
</script>
