<template>
    <div class="container">
      <!-- Interpolación -->
      <h2>{{  titulo }}</h2>
  
      <!-- Propiedad computada -->
      <p>Nombre completo: {{ nombreCompleto }}</p>
  
      <!-- Directiva v-if -->
      <transition name="fade">
        <p v-if="mostrarMensaje" class="mensaje">{{ mensaje }}</p>
      </transition>

  
      <!-- Directiva v-for -->
       <h3>Lista de elementos</h3>
      <ul class="lista">
        <li v-for="(elemento, indice) in elementos" :key="indice" class="item">
          {{ elemento }}
          <button @click="eliminarElemento(indice)" class="btn-delete">Eliminar</button>
        </li>
      </ul>
        <!-- Agregar nuevo elemento -->
         <div class="inputs">
          <input v-model="nuevoElemento" placeholder="Nuevo elemento" />
          <button @click="agregarElemento" class="boton">Agregar</button>
        </div>
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
      const elementos = ref([]);
      const terminoBusqueda = ref("");
      const resultados = ref([]);
      const nuevoElemento = ref(""); // Para el input de nuevo elemento
  
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
  
      //Funcion para agregar elementos a los lis
      const agregarElemento = () => {
        console.log("Valor de nuevoElemento:", nuevoElemento.value);
        // comprobamos que el valor no esté vacio ni sea solo espacio
        if (nuevoElemento.value.trim()){
          elementos.value.push(nuevoElemento.value);
          nuevoElemento.value = ""; //limpiar el input
        }
      };

        //Para eliminar un elemento del li
        const eliminarElemento = (indice) => {
          elementos.value.splice(indice, 1); //eliminar del array
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
        agregarElemento,
        eliminarElemento,
        nuevoElemento,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Estilos generales */
  .container {
  max-width: 600px; 
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

  .btn-delete {
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
}

.btn-delete:hover {
  background-color: #a71d2a;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
  </style>