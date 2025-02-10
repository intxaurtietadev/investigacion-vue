<template>
  <div class="component-carla">
    <!-- Sección 1: Contador con Options API -->
    <section>
      <h2>Contador con Options API</h2>
      <p>Valor: {{ optionsCount }}</p>
      <button @click="incrementOptions">Incrementar</button>
    </section>

    <!-- Sección 2: Contador con Composition API -->
    <section>
      <h2>Contador con Composition API</h2>
      <p>Valor: {{ compositionCount }}</p>
      <button @click="incrementComposition">Incrementar</button>
    </section>

    <!-- Sección 3: Estado Global con Pinia -->
    <section>
      <h2>Estado Global con Pinia</h2>
      <p>Valor: {{ globalCount }}</p>
      <button @click="incrementGlobal">Incrementar</button>
    </section>

    <!-- Sección 4: Parámetro Dinámico -->
    <section>
      <h2>ID Dinámico</h2>
      <p>ID actual: {{ initialId }}</p>
    </section>
  </div>
</template>

<script setup>
// Importaciones necesarias
import { ref } from "vue";
import { useCounterStore } from "../stores/counter"; // Ajusta la ruta según tu proyecto

// Contador con Composition API
const compositionCount = ref(0);
const incrementComposition = () => {
  compositionCount.value++;
};

// Estado Global con Pinia
const counterStore = useCounterStore();
const globalCount = counterStore.count;
const incrementGlobal = () => {
  counterStore.increment();
};

// Propiedades
defineProps({
  initialId: {
    type: String,
    required: true,
  },
});
</script>

<script>
export default {
  data() {
    return {
      optionsCount: 0, // Contador con Options API
    };
  },
  methods: {
    incrementOptions() {
      this.optionsCount++; // Incrementa el contador
    },
  },
};
</script>

<style scoped>
.component-carla {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

section {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 5px;
}

button {
  padding: 10px 15px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #38a169;
}
</style>