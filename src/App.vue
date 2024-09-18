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
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
}

nav {
  background-color: var(--background);
}

#nav a.router-link-exact-active {
  color: var(--basic-select);
}

button {
  color: var(--light-color);
  font-weight: bold;
  background-color: var(--normal-color-opposite-one);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
}

form {
  width: 70%;
  min-width: 350px;
  margin: 0 auto;
  padding: 2%;
  border: 1px solid var(--gray-border);
  border-radius: 5px;
}

input,
select,
textarea {
  font-family: Helvetica, Arial, sans-serif;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid var(--dark-color-opposite-one);
  border-radius: 3px;
}

label {
  display: block;
  width: 30%;
  min-width: 80px;
}
</style>
