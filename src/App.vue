<template>
    <Nav />
      <router-view />
</template>

<script>
import { ref } from "vue";
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  setup() {
    // Definir datos reactivos usando ref
    const titulo = ref("Aplicación de Ejemplo en Vue 3");

    // Devolver los datos y funciones al template
    return {
      titulo,
    };
  },
  components: { Nav }, // Registrar componentes
};
</script>

<style>
/* Estilos generales */

#app {
  font-family: Arial, sans-serif;
  margin: 0 auto; /* Elimina el margen externo */
  padding: 0; /* Elimina el relleno externo */
  box-sizing: border-box;
}

/* Estilo para el contenido principal */
.main-content {
  padding-top: 60px; /* Espacio para evitar que el contenido quede debajo de la barra de navegación */
  margin: 20px;
}
</style>