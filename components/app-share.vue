<template>
  <div class="share">
    <p class="share__text">Compartir:</p>
    <custom-share-network class="pinterest" network="pinterest" :url="url" :title="titulo" :description="descripcion"
      :media="imagen">
      <font-awesome :icon="['fab', 'pinterest']" />
    </custom-share-network>

    <custom-share-network class="whatsapp" network="whatsapp" :url="url" :title="titulo" :description="descripcion">
      <font-awesome :icon="['fab', 'whatsapp']" />
    </custom-share-network>

    <custom-share-network class="telegram" network="telegram" :url="url" :title="titulo" :description="descripcion">
      <font-awesome :icon="['fab', 'telegram']" />
    </custom-share-network>

    <custom-share-network class="twitter" network="twitter" :url="url" :title="titulo" :description="descripcion"
      twitter-user="novanetstudio">
      <font-awesome :icon="['fab', 'twitter']" />
    </custom-share-network>

    <custom-share-network class="facebook" network="facebook" :url="url" :title="titulo" :description="descripcion">
      <font-awesome :icon="['fab', 'facebook']" />
    </custom-share-network>
  </div>
</template>

<script lang="ts" setup>
import '../layouts/default.scss';

type Props = {
  url: string;
  titulo: string;
  descripcion: string;
  imagen: string;
};

defineProps<Props>();
</script>
