<template>
  <div class="card">
    <button @click="action">
      <transition name="fade" appear>
        <nuxt-img class="card__image" :src="imagen.url" :alt="imagen.alternativeText" background="#ededed" />
      </transition>
      <div class="card__info">
        <time class="date" v-if="alias.fecha">{{ toDate(alias.fecha) }}</time>
        <h3 class="card__title">{{ alias.titulo }}</h3>
        <p class="card__description" v-if="descripcion">
          {{ maxWords(descripcion) + '...' }}
        </p>
      </div>
    </button>
  </div>
</template>

<script lang="ts" setup>
import './card.scss';

interface Alias extends Project.Project {
  fecha?: string;
}

type Image = {
  url: string;
  alternativeText: string;
};

type Props = {
  view: string;
  imagen: Image;
  coleccion: string;
  descripcion?: string;
  alias: Alias;
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
  if (props.alias?.id) {
    projectId.value = props.alias.id;
  }

  if (props.isBlog) {
    console.log('id: ', props.alias.id);
    articleId.value = props.alias.id;
    router.push(`/${props.view}/${props.alias.slug}`);
    return;
  }

  router.push(`/${props.view}/${props.coleccion}/${props.alias.slug}`);
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