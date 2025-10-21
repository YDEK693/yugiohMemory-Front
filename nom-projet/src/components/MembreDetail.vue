<template>
  <div v-if="membre">
    <h1>{{ membre.pseudo }}</h1>
    <p>Nom : {{ membre.nom }}</p>
    <p>Prénom : {{ membre.prenom }}</p>
    <p v-if="membre.admin">Admin</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()
const membre = ref(null)

onMounted(async () => {
  const res = await axios.get(`http://localhost:8080/membres/pseudo/${route.params.pseudo}/full`)
  membre.value = res.data
})
</script>
