<template>
  <div class="nav-bar">
    <Navbar></Navbar>
  </div>
  <router-view />
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<style>
:root {
  --gray-border: #616161;
  --light-border: #dddddd;
  --text-black: #070707;
  --text-white: #eeeeee;
  --background: #a8b897;
  --normal-color: #e9f5dc;
  --light-color: #b4d68f;
  --dark-color: #667d4e;
  --normal-color-opposite-one: #836e86;
  --normal-color-opposite-two: #ccafa7;
  --light-color-opposite-one: #9d8f9f;
  --light-color-opposite-two: #f2dfda;
  --dark-color-opposite-one: #56395b;
  --dark-color-opposite-two: #8a6256;
  --shadow: var(--dark-color-opposite-two);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
}

.nav-bar {
  background-color: var(--text);
}

nav {
  background-color: var(--background);
}

#nav a.router-link-exact-active {
  color: var(--basic-select);
}
</style>
