<template id="modal-template">
  <transition>
    <div class="modal" name="modal">
      <div class="modal__mask">
        <div class="modal__wrapper">
          <div class="modal__container">
            <button class="modal__boton" @click="$emit('close')">
              <font-awesome :icon="['fa', 'times']" size="1x" />
            </button>
            <div class="modal__converter">
              <div v-if="image?.id">
                <nuxt-img
                  :src="image.attributes.url"
                  :alt="image.attributes.alternativeText"
                  background="#ededed"
                  blur="40"
                />
              </div>

              <div v-if="content">
                <div :class="`class`">
                  <div
                    :data-icon="content.icono"
                    class="services__icon"
                  ></div>
                  <h3 class="services__title">{{ content.titulo }}</h3>
                  <p v-html="content.descripcion"></p>
                  <!-- <vue-markdown v-if="content.descripcion">{{
                  content.descripcion
                }}</vue-markdown> -->
                </div>
              </div>

              <div v-if="item" :class="class">
                <h2 class="modal__index-header">{{ title }}</h2>
                <p class="modal__index-descripcion">{{ description }}</p>
                <v-tabs :options="{ useUrlFragment: false }">
                  <v-tab
                    v-for="element in item"
                    :key="element.id"
                    :name="element.titulo"
                  >
                    <div
                      :data-icon="element?.icono"
                      class="services__icon icon"
                    ></div>
                    <div v-html="markdown.render(element.descripcion)" />
                  </v-tab>
                </v-tabs>

                <div class="modal__index-link">
                  <nuxt-link :to="`/servicios`"
                    >Ver todos los servicios</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { Tabs as VTabs, Tab as VTab } from 'vue3-tabs-component';
import MarkdownIt from 'markdown-it';
const markdown = new MarkdownIt();

type Content = {
  icono: string;
  titulo: string;
  descripcion: string;
};

type Props = {
  image?: Project.ImageRaw;
  content?: Content;
  title?: string;
  description?: string;
  item?: Project.Speciality[];
  link?: string;
  class?: string;
};

defineProps<Props>();
</script>
