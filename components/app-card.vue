<template>
  <div class="card">
    <button @click="action">
      <transition name="fade" appear>
        <nuxt-img class="card__image" :src="imagen.attributes.url" :alt="imagen.attributes.alternativeText"
          background="#ededed" />

      </transition>
      <div class="card__info">
        <time class="date" v-if="data.attributes.fecha">{{ toDate(data.attributes.fecha) }}</time>
        <h3 class="card__title">{{ data.attributes.titulo }}</h3>
        <p class="card__description" v-if="descripcion">
          {{ maxWords(descripcion) + '...' }}
        </p>
      </div>
    </button>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  view: string;
  imagen: Project.ImageRaw;
  coleccion: string;
  descripcion?: string;
  data: Project.Project | Project.Article;
  isBlog?: boolean;
};

const props = defineProps<Props>();

const router = useRouter();
const projectId = useProjectId();
const articleId = useArticleId();

const toDate = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString('es-ES');
};

const maxWords = (description: string) => {
  // Number of allowed characters
  const maxLength = 120;

  //trim the string to the maximum length
  let trimmedDescription = description.substring(0, maxLength);

  //re-trim if we are in the middle of a word
  trimmedDescription = trimmedDescription.substring(
    0,
    Math.min(trimmedDescription.length, trimmedDescription.lastIndexOf(' ')),
  );

  return trimmedDescription;
};

const action = () => {
  if (props.data.id) {
    projectId.value = props.data.id;
  }

  if (props.isBlog) {
    articleId.value = props.data.id;
    router.push(`/${props.view}/${props.data.attributes.slug}`);
    return;
  }

  router.push(`/${props.view}/${props.coleccion}/${props.data.attributes.slug}`);
}
</script>

<style lang="scss">
.fade-enter-active {
  transition: opacity 0.6s;
}

.fade-enter {
  opacity: 0;
}
</style>