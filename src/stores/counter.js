// stores/counter.js
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0, // Estado inicial
  }),
  actions: {
    increment() {
      this.count++; // Incrementa el estado
    },
  },
});