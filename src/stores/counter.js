// stores/counter.js
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 1, // Estado inicial
  }),
  getters: {
    times2(state) {
      return state.count * 2; // Calcula el doble del contador
    },
  },
  actions: {
    increment(val = 1) {
      this.count += val; // Incrementa el contador con un valor opcional
    },
  },
});