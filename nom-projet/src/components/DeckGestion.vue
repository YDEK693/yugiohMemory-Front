<template>
  <div class="max-w-4xl mx-auto mt-8">
    <h1 class="text-2xl font-bold mb-6">Gestion des Decks</h1>

    <!-- Formulaire création deck -->
    <div class="mb-8 p-4 border rounded-md shadow-sm bg-white">
      <h2 class="text-xl font-semibold mb-2">Créer un nouveau deck</h2>
      <form @submit.prevent="createDeck">
        <div class="mb-2">
          <label class="block mb-1 font-medium">Nom du deck :</label>
          <input v-model="newDeck.nom" type="text" class="w-full border rounded px-2 py-1" required />
        </div>
        <div class="mb-2">
          <label class="block mb-1 font-medium">ID du créateur :</label>
          <input v-model="newDeck.createurId" type="number" class="w-full border rounded px-2 py-1" required />
        </div>
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Créer
        </button>
      </form>
    </div>

    <!-- Liste des decks existants avec suppression -->
    <div class="p-4 border rounded-md shadow-sm bg-white">
      <h2 class="text-xl font-semibold mb-2">Decks existants</h2>
      <ul>
        <li
          v-for="deck in decks"
          :key="deck.id"
          class="flex justify-between items-center border-b py-2"
        >
          <span>{{ deck.nom }} (Créateur: {{ deck.createurId }})</span>
          <button
            @click="deleteDeck(deck.id)"
            class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          >
            Supprimer
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Decks",
  data() {
    return {
      decks: [],
      newDeck: {
        nom: "",
        createurId: null
      }
    };
  },
  methods: {
    fetchDecks() {
      axios
        .get("http://localhost:8080/decks")
        .then((response) => {
          this.decks = response.data;
        })
        .catch((error) => console.error(error));
    },
    createDeck() {
      axios
        .post("http://localhost:8080/decks", this.newDeck, {
          headers: { "Content-Type": "application/json" }
        })
        .then(() => {
          this.newDeck.nom = "";
          this.newDeck.createurId = null;
          this.fetchDecks();
        })
        .catch((error) => console.error(error));
    },
    deleteDeck(deckId) {
      axios
        .delete(`http://localhost:8080/decks/${deckId}`)
        .then(() => this.fetchDecks())
        .catch((error) => console.error(error));
    }
  },
  mounted() {
    this.fetchDecks();
  }
};
</script>

<style scoped>
body {
  background-color: #f3f4f6;
  color: #1f2937;
}
</style>
