<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="dropdown-item" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="dropdown-item" to="/transaction"
              >Transaction</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
:root {
  --gray-border: #616161;
  --text: #070707;
  --basic: #f74949;
  --background: #afafafd7;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
}

nav {
  background-color: var(--background);
}

#nav a.router-link-exact-active {
  color: var(--basic);
}

/* Tables */

th {
  height: 2rem;
  border: 1.5px solid var(--gray-border);
  text-align: center;
}

td {
  width: fit-content;
  height: 50px;
  border: 1px solid var(--gray-border);
  text-align: right;
}
</style>
