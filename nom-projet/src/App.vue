<script setup>

</script>

<template>
  <div id="app">
    <!-- Barre de navigation -->
    <nav class="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md z-50">
      <div class="max-w-7xl mx-auto px-4 py-3 flex justify-around">
        <router-link to="/" class="hover:underline">Accueil</router-link>
        <router-link to="/membres" class="hover:underline">Membres</router-link>
        <router-link to="/decks" class="hover:underline">Decks</router-link>
        <router-link to="/decks/gestion" class="hover:underline"> gestion des Decks</router-link>
      </div>
    </nav>

    <!-- Contenu principal avec un margin-top pour laisser de l'espace sous la nav -->
    <div class="pt-16 px-4">
      <router-view />
    </div>
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
