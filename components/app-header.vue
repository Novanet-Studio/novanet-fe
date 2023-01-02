<template>
  <header class="header">
    <div class="header__index">
      <app-trigram />
      <app-sidebar>
        <nav class="nav--main">
          <nuxt-link class="nav__link" to="/nosotros">
            <div data-icon="f" class="nav__icon icon"></div>
            <p class="nav__title">Nosotros</p>
          </nuxt-link>
          <nuxt-link class="nav__link" to="/servicios">
            <div data-icon="m" class="nav__icon icon"></div>
            <p class="nav__title">Servicios</p>
          </nuxt-link>
          <nuxt-link class="nav__link" to="/portafolio">
            <div data-icon="t" class="nav__icon icon"></div>
            <p class="nav__title">Portafolio</p>
          </nuxt-link>
          <nuxt-link class="nav__link" to="/blog">
            <div data-icon="q" class="nav__icon icon"></div>
            <p class="nav__title">Blog</p>
          </nuxt-link>
          <nuxt-link class="nav__link blue" to="/contacto">
            <div data-icon="z" class="nav__icon icon"></div>
            <p class="nav__title">Contacto</p>
          </nuxt-link>
        </nav>
      </app-sidebar>

      <img
        class="header__logo"
        src="~/assets/images/novanet-logo.svg"
        width="192"
        alt="Logo de novanet"
      />
    </div>
  </header>
</template>
