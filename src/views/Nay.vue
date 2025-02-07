<template>
  <div id="app">
    <!-- Barra de navegación -->
    <Nav />

    <!-- Contenido principal -->
    <main class="main-content">
      <h1>{{ titulo }}</h1>
      <ComponenteNay />
      <router-view />
    </main>
  </div>
</template>
<script>
import { ref } from "vue";
import ComponenteNay from "../components/ComponenteNay.vue";
import Nav from "../components/Nav.vue";

export default {
  name: "App",
  components: { ComponenteNay, Nav }, // Registrar componentes correctamente

  setup() {
    // Definir datos reactivos usando ref
    const titulo = ref("Welcome to Hell 👹");
    const mostrarChat = ref(false);

    const irAlChat = () => {
      mostrarChat.value = true;
    };

    // Devolver los datos y funciones al template
    return {
      titulo,
      mostrarChat,
      irAlChat,
    };
  }
};
</script>

<style>
/* Estilos generales */
h1{
  text-align: center;
}
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