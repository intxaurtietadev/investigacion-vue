<template>
  <div id="app">
    <Nav />

  <router-view></router-view>
</div>
</template>

<script>
import { ref } from "vue";
import Nav from "./components/Nav.vue";


export default {
  name: "App",
  components: { Nav }, 
  setup() {

    const mostrarContenido = ref(false); //para que no salga el contenido del router

    // Devolver los datos y funciones al template
    return {
      mostrarContenido
    };
  },
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

}

/* Estilo para la sección de ejemplo */
#ejemplo-cypress {
  text-align: center;
  margin-top: 50px;
}

#ejemplo-cypress h1{
  text-align: center;
  margin-top: 8rem;
}

#ejemplo-cypress button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

#ejemplo-cypress span {
  font-size: 18px;
  margin-top: 1.5rem;
  display: block;
}
</style>