import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/contadorCypress.vue'; // Importa la vista principal

// Crea el enrutador
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Usa historial del navegador
  routes: [
    {
      path: '/', // Ruta raíz
      name: 'home', // Nombre de la ruta
      component: HomeView, // Componente asociado
    },
    {
      path: '/thais', // Ruta para Thais
      name: 'thais',
      component: () => import('../views/Thais.vue'), // Lazy-loading
    },
    {
      path: '/nay', // Ruta para Nay
      name: 'nay',
      component: () => import('../views/Nay.vue'), // Lazy-loading
    },
    {
      path: '/carla/:id?', // Ruta para Carla
      name: 'carla',
      component: () => import('../views/Carla.vue'), // Lazy-loading
    },
    {
      path: '/silvia', // Ruta para Silvia
      name: 'silvia',
      component: () => import('../views/Silvia.vue'), // Lazy-loading
    },
  ],
});

export default router; // Exporta el enrutador