<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// États réactifs
const membres = ref([])
const loading = ref(true)
const error = ref(null)

// Appel à l'API au montage du composant
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8080/membres') // 👈 ton endpoint Spring Boot
    membres.value = response.data
  } catch (err) {
    error.value = "Impossible de récupérer les membres."
    console.error(err)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <!--<div class="membre-page p-6">
    <h1 class="text-2xl font-bold mb-4">Liste des membres</h1>

    <div v-if="loading" class="text-gray-500">Chargement...</div>
    <div v-else-if="error" class="text-red-600">{{ error }}</div>
    <div v-else>
      <ul class="space-y-2">
        <li v-for="membre in membres" :key="membre.id" class="border p-3 rounded-md shadow-sm">
          <p><strong>Nom :</strong> {{ membre.nom }}</p>
          <p><strong>Prénom :</strong> {{ membre.prenom }}</p>
        </li>
      </ul>
    </div>
  </div>-->
  <h1>membre</h1>
</template>

<style scoped>
.membre-page {
  max-width: 600px;
  margin: 0 auto;
}
</style>
