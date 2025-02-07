<template>
    <Nav />
      <router-view />
</template>

<script>
import { ref } from "vue";
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