<template>
  <div>
    <h1>Liste des decks</h1>
    <ul>
      <li v-for="deck in decks" :key="deck.id">
        <router-link :to="`/decks/${deck.id}`">{{ deck.nom }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const decks = ref([])

onMounted(async () => {
  const res = await axios.get('http://localhost:8080/decks')
  decks.value = res.data
})
</script>
