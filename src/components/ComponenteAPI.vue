<template> 
 <div class="main-container">
    <div class="api-container">
      <h1 class = "titulo">Usuarios</h1>
  
      <div v-for="usuario in usuarios" :key="usuario.login.uuid" class="usuario-card"> <!--bucle para iterar en el array de usuarios-->
        <img :src="usuario.picture.large">
        <p>{{ usuario.name.first }} {{ usuario.name.last }}</p> <!--muestra esos datos especificos recogidos en el json-->
      </div>
    </div>  
</div>
  </template>

  <script>
  import { ref, onMounted } from "vue";
  
  export default {
    name: "ComponenteAPI",
    setup() {
      const usuarios = ref([]); // Definir el array de usuarios, una variable reactiva

      onMounted(() => { //es un hook: es una función que te permite ejecutar código en puntos específicos del ciclo de vida del componente.
        fetch("https://randomuser.me/api/?results=6")// fetch para obtener los usuarios al cargar el componente
          .then(response => response.json()) //pasamos los datos a un archivo json
          .then(data => {
            usuarios.value = data.results; // actualiza la lista de usuarios
          });
      });
  
      return {
        usuarios
      };
    }
  };
  </script>
  
  <style scoped>

.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
}

.titulo {
    color: white;
  }
  
  .api-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
    align-items: center;      
    text-align: center;
    gap: 10px;
    background-color: #ae4545;
    padding: 20px;
    border-radius: 10px;
    width: fit-content;
  }
  
  .usuario-card {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    border-radius: 8px;
  }
  </style>