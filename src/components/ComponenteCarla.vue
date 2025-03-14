<template>
  <div class="component-carla">
    <!-- Contador con Options API -->
    <section>
      <h2>Contador con Options API</h2>
      <p>Valor: {{ optionsCount }}</p>
      <button @click="incrementOptions">Incrementar</button>
      <button @click="resetOptions">Restablecer</button>
    </section>

    <!-- Contador con Composition API -->
    <section>
      <h2>Contador con Composition API</h2>
      <p>Valor: {{ compositionCount }}</p>
      <button @click="incrementComposition">Incrementar</button>
      <button @click="resetComposition">Restablecer</button>
    </section>

    <!-- ID Dinámico -->
    <section>
      <h2>ID Dinámico</h2>
      <p>ID actual: {{ initialId }}</p>
    </section>

    <!-- Estado Global con Pinia -->
    <section>
      <h2>Estado Global con Pinia</h2>
      <p>Valor: {{ counterStore.count }}</p>
      <p>{{ counterStore.count }} x2 = {{ counterStore.times2 }}</p>
      <button @click="incrementGlobal(1)">Incrementar (+1)</button>
      <button @click="incrementGlobal(5)">Incrementar (+5)</button>
    </section>

    <!-- Ejemplo de reactive -->
    <section>
      <h2>Ejemplo de reactive</h2>
      <p>Nombre: {{ user.name }}</p>
      <button @click="changeName">Cambiar Nombre</button>
    </section>

    <!-- Ejemplo de toRefs -->
    <section>
      <h2>Ejemplo de toRefs</h2>
      <p>Nombre: {{ name }}</p>
      <p>Edad: {{ age }}</p>
      <button @click="increaseAge">Cambiar Edad</button>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from "vue";
import { useCounterStore } from "../stores/counter"; // Importa el store

// Contador con Composition API
const compositionCount = ref(0);
function incrementComposition() {
  compositionCount.value++;
}
function resetComposition() {
  compositionCount.value = 0;
}

// Acceder al store de Pinia
const counterStore = useCounterStore();

// Método para incrementar el contador global
function incrementGlobal(val = 1) {
  counterStore.increment(val);
}

// Ejemplo de reactive
const user = reactive({
  name: "Carla",
});

function changeName() {
  user.name = user.name === "Carla" ? "María" : "Carla"; // Alterna entre dos nombres
}

// Ejemplo de toRefs
const person = reactive({
  name: "Juan",
  age: 28,
});

// Convertimos 'name' y 'age' en referencias independientes usando toRefs
const { name, age } = toRefs(person);

function increaseAge() {
  age.value++; // Solo modificamos la propiedad 'age'
}
</script>

<script>
export default {
  props: {
    initialId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      optionsCount: 0,
    };
  },
  methods: {
    incrementOptions() {
      this.optionsCount++;
    },
    resetOptions() {
      this.optionsCount = 0;
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
  background-color: #f8f8f8;
}
button {
  padding: 10px 15px;
  margin-right: 10px;
  background-color: #681717;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
button:hover {
  background-color: #8b0000;
}
</style>