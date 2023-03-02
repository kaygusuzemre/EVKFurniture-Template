<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Home from './components/Home.vue'
</script>

<template>
  <div class="app">
    <Home></Home>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

.nav-logo {
  font-family: 'Dancing Script', cursive;
  color: aliceblue;
}

.text {
  font-family: 'Roboto', sans-serif;
  color: aliceblue;
}

.logo-header {
  font-family: 'Roboto', sans-serif;
  color: aliceblue;
}

.app {
  background-color: #001721;
  min-height: 100vh;
}

p {
  color: var(--color);
}
</style>
