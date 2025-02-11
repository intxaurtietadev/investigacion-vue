<template>
  <div class="view-carla">
    <h1>Carla - Demostración de Conceptos</h1>
    <ComponenteCarla :initial-id="id" />
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import ComponenteCarla from "../components/ComponenteCarla.vue";

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
