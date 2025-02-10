<template>

        <div id="ejemplo-cypress" >
        <h1>{{ titulo }}</h1>
    <button @click="handleClick">Haz clic aquí</button>
    <span>{{ message }}</span>
  </div>

</template>
<script>
import { ref } from "vue";

export default {
    name: "ContadorCypress",
    setup(){
        const titulo = ref("Bienvenido a Vue ");    
        const mensajes = [
      "",
      "Has hecho clic",
      "¡Otro clic!",
      "Sigues aquí...",
      "Interesante, ¿eh?",
      "¿Cuántos más harás?",
      "Para de hacer clic",
      "¡No hagas clic!",
      "¡YA BASTA!",
      "no vas a parar, ¿verdad?"
    ];
    let indice = 0; // Índice del mensaje actual    
    const message = ref(mensajes[indice]); // Mensaje inicial
    // Método para manejar el clic
    const handleClick = () => {
      indice = (indice + 1) % mensajes.length;
      message.value = mensajes[indice];
    };
    return {
        titulo,
        message,
        handleClick
    };
    }
};

</script>

<style scoped>
/* Estilo para la sección de ejemplo */
#ejemplo-cypress {
  text-align: center;
  margin-top: 50px;
}
#ejemplo-cypress h1 {
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