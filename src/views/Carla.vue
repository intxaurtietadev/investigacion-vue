<template>
     <div id="app">
      <!-- Barra de navegación -->
      <Nav />
      <!-- Contenido principal -->
      <main class="main-content">
        <h1>Componente Carla</h1>
        <ComponenteCarla />
        <router-view />
      </main>
    </div>
</template>

<script>
// Importaciones necesarias
import { compute } from "vue";
import Nav from "@/components/Nav.vue"; // Ajusta la ruta según tu proyecto
import { ref } from "vue";
import { useCounterStore } from "../stores/counter"; // Ajusta la ruta según tu proyecto
import ComponenteCarla from "../components/ComponenteCarla.vue";
import { useRoute } from "vue-router";

export default {
  components: { ComponenteCarla },
  setup() {
    const route = useRoute();
    const id = computed(() => route.params.id || "default");

    return { id };
  },
};
</script>

<style scoped>
.view-carla {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}
</style>
