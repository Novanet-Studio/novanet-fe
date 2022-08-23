<template>
  <section class="section section--home">
    <h1 class="shapes__titulo">{{ query.data.inicio.principal }}</h1>
  </section>
</template>

<script setup lang="ts">
const graphql = useStrapiGraphQL();
// Option 1: use inline query
const query = await graphql(`
  query {
    inicio {
      principal
    }
  }
`);

import "./index.scss";
</script>
