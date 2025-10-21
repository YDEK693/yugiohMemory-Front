<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="app" class="p-4">
    <nav class="mb-6 space-x-4">
      <router-link to="/" class="text-blue-600 hover:underline">Accueil</router-link>
      <router-link to="/membres" class="text-blue-600 hover:underline">Membres</router-link>
    </nav>

    <!-- Ici s'affiche le contenu de la page -->
    <router-view />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
