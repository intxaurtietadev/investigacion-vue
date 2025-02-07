<template>
    <div class="container">
      <!-- Interpolación -->
      <h2>{{ titulo }}</h2>
  
      <!-- Propiedad computada -->
      <p>Nombre completo: {{ nombreCompleto }}</p>
  
      <!-- Directiva v-if -->
      <p v-if="mostrarMensaje" class="mensaje">{{ mensaje }}</p>
  
      <!-- Directiva v-for -->
      <ul class="lista">
        <li v-for="(elemento, indice) in elementos" :key="indice">{{ elemento }}</li>
      </ul>
  
      <!-- Inputs reactivos -->
      <div class="inputs">
        <input v-model="nombre" placeholder="Nombre" />
        <input v-model="apellido" placeholder="Apellido" />
      </div>
  
      <!-- Observador (watch) -->
      <div class="buscador">
        <input v-model="terminoBusqueda" placeholder="Buscar..." />
        <p v-if="resultados.length > 0">Resultados: {{ resultados.join(", ") }}</p>
      </div>
  
      <!-- Botón para cambiar mensaje -->
      <button @click="cambiarMensaje" class="boton">Cambiar Mensaje</button>
    </div>
  </template>
  
  <script>
  import { ref, computed, watch } from "vue";
  
  export default {
    setup() {
      // Datos reactivos
      const titulo = ref("Aplicación de Vue");
      const nombre = ref("");
      const apellido = ref("");
      const mostrarMensaje = ref(true);
      const mensaje = ref("Este mensaje se muestra condicionalmente.");
      const elementos = ref(["Elemento 1", "Elemento 2", "Elemento 3"]);
      const terminoBusqueda = ref("");
      const resultados = ref([]);
  
      // Propiedad computada
      const nombreCompleto = computed(() => `${nombre.value} ${apellido.value}`);
  
      // Observador (watch)
      watch(terminoBusqueda, (nuevoTermino) => {
        if (nuevoTermino.length > 3) {
          resultados.value = [nuevoTermino, "¿Esa es la palabra que quieres buscar?", " ¿Seguro?"];
        } else {
          resultados.value = [];
        }
      });
  
      // Función para cambiar el estado del mensaje
      const cambiarMensaje = () => {
        mostrarMensaje.value = !mostrarMensaje.value;
      };
  
      return {
        titulo,
        nombre,
        apellido,
        nombreCompleto,
        mostrarMensaje,
        mensaje,
        elementos,
        terminoBusqueda,
        resultados,
        cambiarMensaje,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Estilos generales */
  .container {
  max-width: 6  00px; 
  margin: 0 auto; 
  padding: 20px; 
  font-family: Arial, sans-serif;
  background-color: #f9f9f9; 
  border-radius: 8px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.233); 
}

  
  /* Estilo para el título */
  h2 {
    color: #333;
    text-align: center;
  }
  
  /* Estilo para el mensaje condicional */
  .mensaje {
    background-color: #f8f8f8;
    border-left: 4px solid #681717;
    padding: 10px;
    margin: 10px 0;
  }
  
  /* Estilo para la lista */
  .lista {
    list-style: none;
    padding: 0;
  }
  
  .lista li {
    background-color: #f1f1f1;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
  }
  
  /* Estilo para los inputs */
  .inputs input {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  /* Estilo para el buscador */
  .buscador {
    margin: 20px 0;
  }
  
  .buscador input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  /* Estilo para el botón */
  .boton {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #681717;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  .boton:hover {
    background-color: #360c0c;
  }
  </style>