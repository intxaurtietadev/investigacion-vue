<template>
  <div class="structure-container">
    <h2>Directorio raiz en proyecto Vue</h2>
    <ul>
      <li>
        <span @click="toggleFolder('node_modules')" class="folder">
          <span :class="{ open: openFolders.node_modules }">📁</span>
          <strong>node_modules/</strong> - Project dependencies
        </span>
        <ul v-if="openFolders.node_modules" class="nested">
          <li>📄 Libraries...</li>
        </ul>
      </li>

      <li>
        <span @click="toggleFolder('public')" class="folder">
          <span :class="{ open: openFolders.public }">📁</span>
          <strong>public/</strong> - Static files
        </span>
        <ul v-if="openFolders.public" class="nested">
          <li>📄 favicon.ico</li>
          <li>📄 index.html</li>
        </ul>
      </li>

      <li>
        <span @click="toggleFolder('src')" class="folder">
          <span :class="{ open: openFolders.src }">📁</span>
          <strong>src/</strong> - Source code
        </span>
        <ul v-if="openFolders.src" class="nested">
          <li>
            <span @click="toggleFolder('assets')" class="folder">
              <span :class="{ open: openFolders.assets }">📁</span>
              <strong>assets/</strong> - Images and styles
            </span>
            <ul v-if="openFolders.assets" class="nested">
              <li>📄 logo.png</li>
              <li>📄 styles.css</li>
            </ul>
          </li>

          <li>
            <span @click="toggleFolder('components')" class="folder">
              <span :class="{ open: openFolders.components }">📁</span>
              <strong>components/</strong> - Reusable Vue components
            </span>
            <ul v-if="openFolders.components" class="nested">
              <li>📄 Header.vue</li>
              <li>📄 Footer.vue</li>
            </ul>
          </li>

          <li>
            <span @click="toggleFolder('router')" class="folder">
              <span :class="{ open: openFolders.router }">📁</span>
              <strong>router/</strong> - Routing configuration
            </span>
            <ul v-if="openFolders.router" class="nested">
              <li>📄 index.js</li>
            </ul>
          </li>

          <li>
            <span @click="toggleFolder('views')" class="folder">
              <span :class="{ open: openFolders.views }">📁</span>
              <strong>views/</strong> - Main views
            </span>
            <ul v-if="openFolders.views" class="nested">
              <li>📄 HomeView.vue</li>
              <li>📄 AboutView.vue</li>
            </ul>
          </li>

          <li>📄 <strong>App.vue</strong> - Root component</li>
          <li>📄 <strong>main.js</strong> - Entry point</li>
        </ul>
      </li>

      <li>📄 <strong>package.json</strong> - Project configuration</li>
      <li>📄 <strong>vite.config.js</strong> - Vite configuration</li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    // Todas las carpetas inician cerradas
    const openFolders = ref({
      node_modules: false,
      public: false,
      src: false,
      assets: false,
      components: false,
      router: false,
      views: false
    });

    // Función para alternar el estado de las carpetas
    const toggleFolder = (folder) => {
      openFolders.value[folder] = !openFolders.value[folder];
    };

    return { openFolders,
       toggleFolder };
  }
};
</script>

<style scoped>
.structure-container {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 450px;
  font-family: Arial, sans-serif;
}

h2 {
  color: #42b983;
  text-align: center;
}

ul {
  list-style: none;
  padding-left: 10px;
}

ul ul {
  padding-left: 20px;
}

.folder {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px;
  transition: background 0.3s;
}

.folder:hover {
  background-color: #e0f2e9;
}

.folder span {
  margin-right: 8px;
  transition: transform 0.3s ease;
}

/* 📁 cambia a 📂 cuando la carpeta está abierta */
.folder .open::before {
  content: "📂";
}

/* Estilos para archivos */
.nested li {
  margin-left: 15px;
  color: #333;
}
</style>
