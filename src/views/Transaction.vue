<template>
  <div class="Transaction">
    <nav class="nav-left">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="dropdown-item" @click="change(1)">Income</a>
        </li>
        <li class="nav-item">
          <a class="dropdown-item" href="#">Expenditure</a>
        </li>
        <li class="nav-item">
          <a class="dropdown-item" href="#">Cost</a>
        </li>
        <li class="nav-item">
          <a class="dropdown-item" href="#">Savings</a>
        </li>
        <li class="nav-item">
          <a class="dropdown-item" href="#">Transfer</a>
        </li>
      </ul>
    </nav>
    <div class="form">
      <Income v-if="pag === 1"></Income>
    </div>
  </div>
</template>
<style>
.transaction {
  display: flex;
  justify-content: center;
}
.nav-left {
  display: flex;
  align-items: center;
  float: left;
  width: 10%;
}
.nav-left a {
  color: var(--text);
}
.nav-left li:hover {
  cursor: pointer;
}
.form {
  width: 90%;
  float: right;
}
</style>

<script>
import Income from "@/components/Income.vue";

export default {
  name: "Transaction",
  components: {
    Income,
  },
  data: function () {
    return {
      pag: null,
    };
  },
  methods: {
    change: function (value) {
      this.pag = value;
    },
  },
};
</script>