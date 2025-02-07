<template>
  <div id="app">
    
    <Nav />

    <main class="main-content">
      <h1>{{ titulo }}</h1>

      <ComponenteThais />

      <button @click="irAlChat">🎮Click to play🎮</button>
      
      <ComponenteNay v-if="mostrarChat" />
    </main>
  </div>
</template>

<script>
import { ref } from "vue";
import ComponenteThais from "./components/ComponenteThais.vue";
import Nav from "./components/Nav.vue";
import ComponenteNay from "./components/ComponenteNay.vue"; 

export default {
  name: "App",
  setup() {
    // Definir datos reactivos usando ref
    const titulo = ref("Aplicación de Ejemplo en Vue 3");
    //script nay
    const mostrarChat = ref(false);
    const irAlChat = () => {
      mostrarChat.value = true; 
      //fin script nay
    };

    // Devolver los datos y funciones al template
    return {
      titulo,
      mostrarChat,
      irAlChat,
    };
  },
  components: { ComponenteThais, Nav,  ComponenteNay}, // Registrar componentes
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