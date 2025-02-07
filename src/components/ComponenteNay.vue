<template>
      <div class="nay-container">

    <div v-if="!usuarioLogueado" class="login-container">
      <h2>Bienvenido al Chat 🎬</h2>
      <input v-model="nombreUsuario" placeholder="Escribe tu nombre..." />
      <button @click="iniciarSesion">Iniciar</button>
    </div>
    </div>
</template>