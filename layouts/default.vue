<template>
  <div>
      <Header />
      <!-- <li><NuxtLink to="/">Inicio</NuxtLink></li>
      <li><NuxtLink to="/other/page1">Página 1</NuxtLink></li>
      <li><NuxtLink to="/other/page2">Página 2</NuxtLink></li> -->
      <slot />

      <Footer />
  </div>
</template>
<script setup>
import Header from './header.vue'
import Footer from './footer.vue'
</script>