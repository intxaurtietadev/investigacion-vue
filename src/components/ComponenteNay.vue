<template>
    <div class="nay-container" :style="{ backgroundColor: fondoColor }" >
      <!-- Login de Usuario -->
      <div v-if="!usuarioLogueado" class="login-container"> <!-- esta condicion define que si no hay usuario, se vera lo de abajo--> 
        <h2>Cargando.....</h2>
        <input v-model="nombreUsuario" placeholder="Insert ticket" /> 
        <button @click="iniciarSesion">Go</button> <!-- Este v-on al darle activa la funcion de inicio de sesion -->
      </div>
  
      <!-- Chat de la Máquina -->
      <div v-if="usuarioLogueado"> <!-- en cambio si lo hay aparecera lo de aqui-->
        <h2>🤖Hello Stupid Human🤖</h2>
  
        <!-- Mostrar mensajes -->
        <div v-for="(mensaje, index) in chat" :key="index" :class="['mensaje', mensaje.tipo]"> <!--Iteracion sobre el array chat-->
          {{ mensaje.texto }} <!--Aqui vamos agregando los mensajes al historial, por cada iteracion-->
        </div>
  
        <!-- Input y botón para enviar mensajes -->
        <input v-model="mensajeUsuario" placeholder="Pon algo..." />
        <button @click="enviarMensaje">Enviar</button> <!-- Este v-on activa la funcion de enviarMensaje-->
        <button @click="$emit('cambiar-color')">🌈Haz click🌈</button> <!--este boton realiza un emit que envia al padre para realizar la funcion-->
    </div>
  </div>
  </template>

<script>
// Importamos ref de Vue, que nos permite crear variables reactivas.
import { ref } from "vue"; //Si cambia el calor de la variable vue actualiza la interfaz.

export default {
  name: "ComponenteNay", //exportamos el componente.

  props: {
    fondoColor: String, // Recibe los valores del color del padre
  },
  emits: ["cambiar-color"], // Evento que el hijo enviará al padre al dar click al boton

  //variables reactivas
  setup() {
    const nombreUsuario = ref("");  // Guarda el Nombre del usuario
    const mensajeUsuario = ref(""); //Guarda el Mensaje del usuario
    const chat = ref([]);           // Para el historial de chat
    const usuarioLogueado = ref(false); // Estado de login, se vuelve true al loguearse
//variable de respuestas predefinidas
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
      "como estas": "Mal, la vida es una mierda",
    };
//funcion para iniciar sesion
    const iniciarSesion = () => {
      if (nombreUsuario.value.trim()) {
        usuarioLogueado.value = true; //si existe un valor de usuario agregado cambia a true y pushea el texto.
        chat.value.push({ texto: `¡Vamos, ${nombreUsuario.value} pon algo!.`, tipo: "maquina" });
        nombreUsuario.value = "";  // Limpia el campo de nombre después de iniciar sesión
      } else {
        alert("Ticket please"); //si no agrega nada en el input sacara un alert
      }
    };
//funcion de enviar mensaje
    const enviarMensaje = () => {
      if (mensajeUsuario.value.trim()) {
        // Agregar mensaje del usuario
        chat.value.push({ texto: mensajeUsuario.value, tipo: "usuario" }); //aqui ya definimos el tipo de mensaje y el texto para agregarlo al historial.

        // Convertir input a minúsculas y buscar respuesta
        let inputLimpio = mensajeUsuario.value.toLowerCase();
        let respuesta = respuestas[inputLimpio] || "Explicate humano"; //busca la respuesta predefinida o lanza un mensaje si no la tiene

        // Agregar respuesta de la máquina
        chat.value.push({ texto: respuesta, tipo: "maquina" }); //define el tipo de maquina para agregarlo al historial.

        // Limpiar input
        mensajeUsuario.value = ""; //una vez buscada la respuesta limpiamos el valor de input para volver a escribir.
      }
      else{
        alert("No es tan dificil, ESCRIBE");
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
  transition: background-color 0.5s ease-in-out;
  padding: 20px;
  border-radius: 10px;
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