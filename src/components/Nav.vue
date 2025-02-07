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

.navbar-container {
  width: 100%; 
  position: fixed; 
  top: 0;
  left: 0;
  z-index: 1000; 
  background-color: #681717; 
}

nav {
  display: flex;
  justify-content: center; 
  padding: 1rem 0; 
}

.nav-list { 
  list-style: none; 
  display: flex;
  gap: 2rem; 
}

.nav-list li a {
  text-decoration: none; 
  color: white; 
  font-size: 1rem; 
  transition: color 0.3s ease; 
}

.nav-list li a:hover {
  color: #ffe681; 
}
</style>