<template>
  <header class="header">
    <div class="header__index">
      <!-- <nav class="nav--main">
        <NuxtLink class="nav__link" to="/nosotros/">
          <div data-icon="f" class="nav__icon icon"></div>
          <p class="nav__title">Nosotros</p>
        </NuxtLink>
        <NuxtLink class="nav__link" to="/servicios/">
          <div data-icon="m" class="nav__icon icon"></div>
          <p class="nav__title">Servicios</p>
        </NuxtLink>
        <NuxtLink class="nav__link" to="/portafolio/">
          <div data-icon="t" class="nav__icon icon"></div>
          <p class="nav__title">Portafolio</p>
        </NuxtLink>
        <NuxtLink class="nav__link" to="/blog/">
          <div data-icon="q" class="nav__icon icon"></div>
          <p class="nav__title">Blog</p>
        </NuxtLink>
        <NuxtLink class="nav__link blue" to="/contacto/">
          <div data-icon="z" class="nav__icon icon"></div>
          <p class="nav__title">Contacto</p>
        </NuxtLink>
      </nav> -->

      <nuxt-img
        class="header__logo"
        src="/novanet-logo.svg"
        width="192"
        alt="Logo de novanet"
      />
    </div>
  </header>
</template>

<script>
export default {};
import "../layouts/default.vue";
</script>
