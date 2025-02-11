<template>
  <div id="app">
    <!-- Barra de navegación -->
    <Nav />

    <!-- Contenido principal -->
    <main class="main-content">
      <h1>{{ titulo }}</h1>

      <ComponenteNay :fondoColor="fondoColor" @cambiar-color="cambiarColor" />

      <router-view /> <!--elemento especial de Vue que tiene que ver con el enrutamiento (routing) y no necesita ser registrada -->
    </main>
  </div>
</template>
<script>
//importamos todos los componentes necesarios
import { ref } from "vue";
import ComponenteNay from "../components/ComponenteNay.vue";
import Nav from "../components/Nav.vue";

export default {
  name: "App",
  components: { ComponenteNay, Nav }, // Registrar componentes correctamente

  setup() {
    // Definir datos reactivos usando ref
    const titulo = ref("😈Welcome to Skynet😈");

    // Lista fija de colores
    const colores = ["#37deb0", "#43c83f", "#c8573f", "#e84fc6"]; 
    const colorIndex = ref(0);
    const fondoColor = ref(colores[colorIndex.value]); 

    // Función para cambiar el color (se activa con el emit del hijo)
    const cambiarColor = () => {
      colorIndex.value = (colorIndex.value + 1) % colores.length;
      fondoColor.value = colores[colorIndex.value];
    };

    return {
      titulo,
      fondoColor,
      cambiarColor,
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
  margin: 0 auto; 
  padding: 0; 
  box-sizing: border-box;
}

/* Estilo para el contenido principal */
.main-content {
  padding-top: 60px; 
  margin: 20px;
}
</style>