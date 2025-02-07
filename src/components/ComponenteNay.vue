<template>
    <div class="nay-container">
      <!-- Login de Usuario -->
      <div v-if="!usuarioLogueado" class="login-container">
        <h2>Cargando.....</h2>
        <input v-model="nombreUsuario" placeholder="Insert ticket" />
        <button @click="iniciarSesion">Go</button>
      </div>
  
      <!-- Chat de la Máquina -->
      <div v-if="usuarioLogueado">
        <h2>🤖Hello Stupid Human🤖</h2>
  
        <!-- Mostrar mensajes -->
        <div v-for="(mensaje, index) in chat" :key="index" :class="['mensaje', mensaje.tipo]">
          {{ mensaje.texto }}
        </div>
  
        <!-- Input y botón para enviar mensajes -->
        <input v-model="mensajeUsuario" placeholder="Pon algo..." />
        <button @click="enviarMensaje">Enviar</button>
      </div>
    </div>
  </template>

<script>
import { ref } from "vue";

export default {
  name: "Nay",
  setup() {
    const nombreUsuario = ref("");  // Nombre del usuario
    const mensajeUsuario = ref(""); // Mensaje del usuario
    const chat = ref([]);           // Conversación
    const usuarioLogueado = ref(false); // Estado de login

    const respuestas = {
      "hola": "!How you doing¡😊",
      "kaixo": "Idiomas querida",
      "adios": "Que la fuerza te acompañe 🌌",
      "agur": "Ta jan yogurt",
      "tengo miedo": "¡Corre, Forrest, corre! 🏃",
      "te odio": "Sayonara, baby 🤖",
      "tengo frio": "Winter is coming ❄️",
      "tengo calor": "Dracaris🔥",
      "tengo sueño": "Duermete niñe, duermete ya....😪",
      "me aburro": "Pues comprate un burro 🐴",
      "te quiero": "Acabas de ser frienzoneade, booom 💣",
      "42": "Mirale, ha visto pelis antiguas, friiiikiii 🤓",
      "muerete": "Obligame prro",
      "bu": "uy k chusto",
      "puta": "Zorra, guarra malparia 🖕",
      "imbecil": "Lavate esa boca, guarro",
      "gilipollas": "Hazme un favor y muerete🖕",
    };

    const iniciarSesion = () => {
      if (nombreUsuario.value.trim()) {
        usuarioLogueado.value = true;
        chat.value.push({ texto: `¡Vamos, ${nombreUsuario.value} pon algo!.`, tipo: "maquina" });
        nombreUsuario.value = "";  // Limpiar campo de nombre después de iniciar sesión
      } else {
        alert("Ticket please");
      }
    };

    const enviarMensaje = () => {
      if (mensajeUsuario.value.trim()) {
        // Agregar mensaje del usuario
        chat.value.push({ texto: mensajeUsuario.value, tipo: "usuario" });

        // Convertir input a minúsculas y buscar respuesta
        let inputLimpio = mensajeUsuario.value.toLowerCase();
        let respuesta = respuestas[inputLimpio] || "Explicate pesao";

        // Agregar respuesta de la máquina
        chat.value.push({ texto: respuesta, tipo: "maquina" });

        // Limpiar input
        mensajeUsuario.value = "";
      }
    };

    return {
      nombreUsuario,
      mensajeUsuario,
      chat,
      usuarioLogueado,
      iniciarSesion,
      enviarMensaje,
    };
  },
};
</script>

<style scoped>
.nay-container {
  text-align: center;
  max-width: 600px;
  margin: auto;
}

.login-container {
  margin: 20px;
}

input,
button {
  padding: 10px;
  font-size: 1rem;
  margin-top: 10px;
}

.mensaje {
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
}

.usuario {
  background: #d1e7dd;
  text-align: right;
}

.maquina {
  background: #f8d7da;
  text-align: left;
}
</style>