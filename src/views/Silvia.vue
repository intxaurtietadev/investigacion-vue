<template>
  <div id="app">
    <!-- Barra de navegación -->
    <Nav />
    <!-- Contenido principal -->
    <main class="main-content">
      <h1>{{ titulo }}</h1>
      <ComponenteSilvia />
      <router-view />
    </main>
  </div>
</template>

<script>
import { ref ,reactive} from "vue";
import ComponenteSilvia from "../components/componenteSilvia.vue";
import Nav from "../components/Nav.vue";

export default {
    name: "App",
  components:{ComponenteSilvia, Nav},
 
    setup(){

  const titulo = ref("Directorio raiz en Vue 😊");


  //inicio carpetas cerradas
      const openFolders = reactive({
      node_modules: false,
      public: false,
      src: false,
      assets: false,
      components: false,
      router: false,
      views: false
    });

 // Función para alternar el estado de las carpetas
    const toggleFolder = (folder) => {
      openFolders.value[folder] = !openFolders.value[folder];
    };

    
      return {
        openFolders, 
        toggleFolder
      };
    },
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