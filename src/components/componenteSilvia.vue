<template>
  <!-- Contenedor principal del componente -->
  <div class="structure-container">
    <h2>Directorio raíz en proyecto Vue 😊 </h2>
    <ul>
      <!-- Cada carpeta se representa como un elemento de lista -->
      <li>
        <!-- Al hacer clic, se activa la función toggleFolder para abrir/cerrar la carpeta -->
        <span @click="toggleFolder('node_modules')" class="folder">
          <span :class="{ open: openFolders.node_modules }">📁</span>
          <strong>node_modules/</strong> - Contiene todas las dependencias y paquetes instalados con npm o yarn.
        </span>
        <!-- Lista anidada que se muestra solo si la carpeta está abierta -->
        <ul v-if="openFolders.node_modules" class="nested">
          <li>📄 Librerías del proyecto...</li>
        </ul>
      </li>

      <li>
        <span @click="toggleFolder('public')" class="folder">
          <span :class="{ open: openFolders.public }">📁</span>
          <strong>public/</strong> - Almacena archivos estáticos como imágenes, fuentes y el `index.html` base.
        </span>
        <ul v-if="openFolders.public" class="nested">
          <li>📄 favicon.ico (Icono de la página)</li>
          <li>📄 index.html (Archivo HTML principal donde se monta Vue)</li>
        </ul>
      </li>

      <li>
        <span @click="toggleFolder('src')" class="folder">
          <span :class="{ open: openFolders.src }">📁</span>
          <strong>src/</strong> - Contiene el código fuente principal de la aplicación.
        </span>
        <ul v-if="openFolders.src" class="nested">
          <li>
            <span @click="toggleFolder('assets')" class="folder">
              <span :class="{ open: openFolders.assets }">📁</span>
              <strong>assets/</strong> - Carpeta para almacenar imágenes, estilos y otros recursos.
            </span>
            <ul v-if="openFolders.assets" class="nested">
              <li>📄 logo.png (Logo del proyecto)</li>
              <li>📄 styles.css (Hojas de estilo adicionales)</li>
            </ul>
          </li>

          <li>
            <span @click="toggleFolder('components')" class="folder">
              <span :class="{ open: openFolders.components }">📁</span>
              <strong>components/</strong> - Contiene componentes reutilizables de Vue.
            </span>
            <ul v-if="openFolders.components" class="nested">
              <li>📄 Header.vue (Encabezado de la aplicación)</li>
              <li>📄 Footer.vue (Pie de página)</li>
            </ul>
          </li>

          <li>
            <span @click="toggleFolder('router')" class="folder">
              <span :class="{ open: openFolders.router }">📁</span>
              <strong>router/</strong> - Contiene la configuración de rutas de la aplicación.
            </span>
            <ul v-if="openFolders.router" class="nested">
              <li>📄 index.js (Definición de rutas con Vue Router)</li>
            </ul>
          </li>

          <li>
            <span @click="toggleFolder('views')" class="folder">
              <span :class="{ open: openFolders.views }">📁</span>
              <strong>views/</strong> - Contiene las vistas principales de la aplicación.
            </span>
            <ul v-if="openFolders.views" class="nested">
              <li>📄 HomeView.vue (Vista principal de la aplicación)</li>
              <li>📄 AboutView.vue (Vista de información sobre la app)</li>
            </ul>
          </li>

          <li>📄 <strong>App.vue</strong> - Componente raíz de la aplicación.</li>
          <li>📄 <strong>main.js</strong> - Punto de entrada donde se inicializa Vue.</li>
        </ul>
      </li>

      <li>📄 <strong>package.json</strong> - Archivo de configuración del proyecto y dependencias.</li>
      <li>📄 <strong>vite.config.js</strong> - Archivo de configuración para Vite.</li>
    </ul>
  </div>
</template>

<script setup>
// Importamos la función `reactive` de Vue para manejar el estado de las carpetas
import { reactive } from "vue";

// Definimos un objeto reactivo para almacenar el estado de cada carpeta (abierta o cerrada)
const openFolders = reactive({
  node_modules: false, // Carpeta cerrada por defecto
  public: false,
  src: false,
  assets: false,
  components: false,
  router: false,
  views: false,
});

// Función que cambia el estado de una carpeta entre abierta y cerrada
const toggleFolder = (folder) => {
  openFolders[folder] = !openFolders[folder]; // Alterna entre true y false
};
</script>

<style scoped>
/* Estilo del contenedor principal */
.structure-container {
  padding: 20px;
  background-color: #ddc1c18e;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  font-family: Arial, sans-serif;
  margin: 0 auto; /* Centra el componente horizontalmente */
  display: flex; /* Usa Flexbox */
  flex-direction: column; /* Asegura que los elementos se acomoden en columna */
  justify-content: center; /* Centra el contenido horizontalmente */
  align-items: center; /* Centra el contenido verticalmente */
  height: 100vh; /* Asegura que ocupe toda la altura de la pantalla */
}

/* Estilo del título */
h2 {
  color: black;
  text-align: center;
}

/* Estilos generales de las listas */
ul {
  list-style: none;
  padding-left: 10px;
}

/* Aumenta la indentación de las subcarpetas */
ul ul {
  padding-left: 20px;
}

/* Estilo de las carpetas (elementos clickeables) */
.folder {
  font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px;
  transition: background 0.3s, transform 0.2s;
  border-radius: 5px;
  font-weight: bold;
  color: #000000;
}

/* Efecto hover para resaltar carpetas al pasar el mouse */
.folder:hover {
  background-color: rgba(200, 200, 200, 0.2);
}

/* Espaciado entre el icono y el nombre de la carpeta */
.folder span {
  margin-right: 12px;
  transition: transform 0.4s ease;
  content: "📁";
  color: #e7a30b !important;
}

/* Icono de carpeta abierta */
.folder .open::before {
  content: "📂";
  color: #e7a30b;
}

/* Estilos de las subcarpetas */
.nested {
  margin-left: 20px;
}

/* Rotación de icono cuando la carpeta está abierta */
.open {
  transform: rotate(90deg);
}

/* Establece el icono predeterminado de las carpetas */
.folder::before {
  content: "📁";
  color: #e7a30b !important;
  font-size: 2em;
}
</style>
