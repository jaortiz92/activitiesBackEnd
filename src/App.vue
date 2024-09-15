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
          <li class="nav-item">
            <router-link class="dropdown-item" to="/edit">Edit</router-link>
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
  --background: #a8b897;
  --even-row: #e9f5dc;
  --odd-row: #b4d68f;
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
table {
  border: 1.5px solid var(--gray-border);
}
th {
  height: 2rem;
  border: 1.5px solid var(--gray-border);
  text-align: center;
  padding: 12px 15px;
  font-size: 110%;
}

td {
  width: fit-content;
  border-right: 1px solid var(--gray-border);
  text-align: left;
  padding: 2px 4px 2px 4px;
  font-size: 90%;
}
tbody:nth-child(even) {
  background-color: var(--even-row);
}
tbody:nth-child(odd) {
  background-color: var(--odd-row);
}
</style>
