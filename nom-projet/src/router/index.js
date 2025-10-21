import { createRouter, createWebHistory } from 'vue-router'
import Membre from '../components/Membres.vue'
import Accueil from '../components/HelloWorld.vue'
import DeckList from '../components/DeckList.vue'
import DeckDetail from '../components/DeckDetail.vue'
import MembreDetail from '../components/MembreDetail.vue'
import Deckgestion from '../components/DeckGestion.vue'


// Définition des routes
const routes = [
  {
    path: '/membres',
    name: 'Membres',
    component: Membre,
  },
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  }, {
    path: '/decks', 
    name: 'DeckList', 
    component: DeckList
  },
  {
    path: '/decks/gestion',
    name: 'Deckgestion',
    component: Deckgestion,
  },
  {
    path: '/decks/:id',
    name: 'DeckDetail',
    component: DeckDetail,
    props: true
  },
  {
    path: '/membres/:pseudo',
    name: 'MembreDetail',
    component: MembreDetail,
    props: true
  }
]

// Création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
