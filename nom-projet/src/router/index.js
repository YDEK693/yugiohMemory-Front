import { createRouter, createWebHistory } from 'vue-router'
import Membre from '../components/Membres.vue'
import Accueil from '../components/HelloWorld.vue'
// Définition des routes
const routes = [
  {
    path: '/membres',
    name: 'Membres',
    component: Membre,
    
  },
  {
    path: '/',
    name:'Accueil',
    component:Accueil
}
]

// Création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
