<template>
  <div v-if="deck">
    <h1>{{ deck.nom }}</h1>
    <p>ID du créateur : {{ deck.createurId }}</p>
    <p>Liste : <span v-if="deck.liste">Oui</span><span v-else>Pas d'image</span></p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()
const deck = ref(null)

onMounted(async () => {
  const res = await axios.get(`http://localhost:8080/decks/${route.params.id}`)
  deck.value = res.data
})
</script>
