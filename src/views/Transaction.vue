<template>
  <div class="Transaction">
    <nav class="nav-vertical" v-if="!selected">
      <ul>
        <li>
          <div class="item-nav" @click="change(1, 'Income')">Income</div>
        </li>
        <li>
          <div class="item-nav" @click="change(2, 'Expenditure')">
            Expenditure
          </div>
        </li>
        <li>
          <div class="item-nav" @click="change(2, 'Cost')">Cost</div>
        </li>
        <li>
          <div class="item-nav" @click="change(2, 'Buy Assets')">
            Buy Assets
          </div>
        </li>
        <li>
          <div class="item-nav" @click="change(3, 'Savings')">Savings</div>
        </li>
        <li>
          <div class="item-nav" @click="change(1, 'Transfer')">Transfer</div>
        </li>
      </ul>
    </nav>
    <nav class="nav-vertical" v-else @click="selected = false">
      <ul>
        <li>
          <div class="item-nav">Return</div>
        </li>
      </ul>
    </nav>
    <div class="form">
      <AddTransaction
        v-if="selected"
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
      selected: false,
    };
  },
  methods: {
    change: function (group, namePag) {
      this.group = group;
      this.namePag = namePag;
      this.selected = true;
      this.refreshPag();
    },
    refreshPag: function () {
      this.keyAddTransaction += 1;
    },
  },
};
</script>
<style scoped>
.transaction {
  display: flex;
  justify-content: center;
}

.form {
  width: 100%;
  float: right;
}

.nav-vertical {
  padding: 0px;
  box-shadow: 0 1px 6px var(--shadow);
  margin-top: 10px;
  width: 120px;
  float: left;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  flex-direction: column;
}

li {
  margin: 10px;
}

.item-nav {
  text-decoration: none;
  color: var(--dark-color-opposite-one);
  padding: 5px;
  border-radius: 5px;
  text-align: left;
  transition: background-color 0.3s ease-in-out;
}

.item-nav:hover {
  background-color: var(--light-color-opposite-two);
  cursor: pointer;
}
</style>
