<template>
  <div class="Transaction">
    <nav class="nav-left">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="dropdown-item" @click="change(1, 'Income')">Income</a>
        </li>
        <li class="nav-item">
          <a class="dropdown-item" @click="change(2, 'Expenditure')"
            >Expenditure</a
          >
        </li>
        <li class="nav-item">
          <a class="dropdown-item" @click="change(2, 'Cost')">Cost</a>
        </li>
        <li class="nav-item">
          <a class="dropdown-item" @click="change(2, 'Buy Assets')"
            >Buy Assets</a
          >
        </li>
        <li class="nav-item">
          <a class="dropdown-item" @click="change(3, 'Savings')">Savings</a>
        </li>
        <li class="nav-item">
          <a class="dropdown-item" @click="change(3, 'Transfer')">Transfer</a>
        </li>
      </ul>
    </nav>
    <div class="form">
      <AddTransaction
        v-if="group"
        @updatePag="refreshPag()"
        :group="group"
        :namePag="namePag"
        :key="keyAddTransaction"
      ></AddTransaction>
    </div>
  </div>
</template>
<script>
import AddTransaction from "@/components/AddTransaction.vue";

export default {
  name: "Transaction",
  components: {
    AddTransaction,
  },
  data: function () {
    return {
      keyAddTransaction: 0,
      group: null,
      namePag: null,
    };
  },
  methods: {
    change: function (group, namePag) {
      this.group = group;
      this.namePag = namePag;
      this.refreshPag();
    },
    refreshPag: function () {
      this.keyAddTransaction += 1;
    },
  },
};
</script>
<style>
.transaction {
  display: flex;
  justify-content: center;
}
.nav-left {
  display: flex;
  align-items: center;
  float: left;
  width: 15%;
}
.nav-left a {
  color: var(--text);
}
.nav-left li:hover {
  cursor: pointer;
}
.form {
  width: 80%;
  float: right;
}
</style>