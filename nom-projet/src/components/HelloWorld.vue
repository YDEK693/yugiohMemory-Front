<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const cartes = ref([])
onMounted(async () => {
  try {
    const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0&sort=new') // 👈 ton endpoint Spring Boot
    cartes.value = response.data.data
  } catch (err) {
    error.value = "Impossible de récupérer les membres."
    console.error(err)
  }
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
    <h1 class="text-4xl font-extrabold text-center text-indigo-600 mb-10 drop-shadow-sm">
      🎴 Yugioh Memory
    </h1>

    <h2 class="text-2xl font-semibold text-center text-gray-800 mb-8">
      Dernières cartes Yu-Gi-Oh!
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      <div
        v-for="carte in cartes"
        :key="carte.id"
        class="w-full max-w-xs bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300"
      >
        <img
          :src="carte.card_images[0].image_url_small"
          :alt="carte.name"
          class="w-full h-56 object-contain p-4 rounded-t-2xl"
        />
        <div class="px-5 pb-5">
          <h3 class="text-lg font-bold text-gray-800 mb-2 text-center">
            {{ carte.name }}
          </h3>
          <p class="text-gray-600 text-sm text-justify whitespace-pre-line">
            {{ carte.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Animation douce sur les cartes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

div[v-for] {
  animation: fadeInUp 0.6s ease-in-out;
}

/* Amélioration du rendu global */

h2 {
  margin-bottom: 0.8rem;
  color: #3366ff;
  font-family: 'Poppins', sans-serif;
}

</style>
