<template>
    <div>
      <button @click="mostrar = !mostrar">¡Milhouse dile a Bart que venga!</button> <!--v-on para mostrar el mensaje traido por inject-->
      <p v-if="mostrar">{{ mensaje }}</p> <!--si el boton cambia a true muestra el mensaje sino lo elimina-->
    </div>
  </template>
  
  <script setup>
  import { inject, ref } from 'vue'; //importamos el inject para traer el mensaje del abuelo
  
  const mensaje = inject('mensajeCompartido'); // Recibe el mensaje desde el abuelo
  const mostrar = ref(false); //variable para cambiar el estado del boton
  </script>
  
  <style scoped>

  button {
    padding: 10px;
    font-size: 1rem;
    margin-top: 10px;
  }

  </style>