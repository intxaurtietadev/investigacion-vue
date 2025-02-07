<template>
  <div class="navbar-container">
    <nav>
      <ul class="nav-list">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
/* Estilos para la barra de navegación */
.navbar-container {
  width: 100%; /* Ocupa todo el ancho de la pantalla */
  position: fixed; /* Fija la barra en la parte superior */
  top: 0;
  left: 0;
  z-index: 1000; /* Asegura que esté por encima de otros elementos */
  background-color: #681717; /* Color de fondo */
}

nav {
  display: flex;
  justify-content: center; /* Centra el contenido horizontalmente */
  padding: 1rem 0; /* Espaciado interno */
}

.nav-list { 
  list-style: none; /* Elimina los marcadores de lista */
  display: flex;
  gap: 2rem; /* Espaciado entre los elementos del menú */
}

.nav-list li a {
  text-decoration: none; /* Elimina el subrayado de los enlaces */
  color: white; /* Color del texto */
  font-size: 1rem; /* Tamaño del texto */
  transition: color 0.3s ease; /* Transición suave para el cambio de color */
}

.nav-list li a:hover {
  color: #ffe681; /* Cambia el color al pasar el mouse */
}
</style>