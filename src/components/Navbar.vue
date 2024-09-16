<template>
  <nav class="nav">
    <div>
      <ul>
        <li>
          <router-link class="item" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="item" to="/transaction">Transaction</router-link>
        </li>
        <li>
          <router-link class="item" to="/edit">Edit</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
nav {
  background-color: var(--background);
  padding: 10px;
  box-shadow: 0 1px 6px var(--shadow);
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: left;
}

li {
  margin: 0 20px;
}

a {
  text-decoration: none;
  color: var(--dark-color-opposite-one);
  padding: 8px 10px;
  border-radius: 5px;
}

a:hover {
  background-color: var(--light-color-opposite-two);
}
a.router-link-active {
  font-weight: bold;
}
</style>
