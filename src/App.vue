<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

</script>

<template>
  <NavBar />
  
  <RouterView />
</template>

<style scoped>

header {
  width: 100%;
}

main {
  /* Prevents content from jumping around and gives it breathing room */
  padding: 2rem;
  max-width: 1440px;
  margin: 0 auto;
}

</style>
