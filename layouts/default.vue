<template>
  <transition name="fade" appear>
    <div class="layout">
      <div class="container">
        <Header />
        <main class="main">
          <slot />
        </main>
        <Footer />
      </div>
    </div>
  </transition>
</template>

<script>
export default {};

import "./default.scss";
</script>
