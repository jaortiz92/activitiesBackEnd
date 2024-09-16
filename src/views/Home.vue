<template>
  <div class="home">
    <div class="header-home">
      <StatusAccounts :key="keyStatusAccounts"></StatusAccounts>
    </div>
    <div class="rows-to-show">
      <form v-on:submit.prevent="refreshLastTransactions()">
        <label>Rows to show</label>
        <input
          class="form-control"
          v-model="toShowForm"
          type="number"
          min="1"
          required="true"
        />
        <button class="btn btn-danger" type="submit">Show</button>
      </form>
    </div>
    <LastTransactions
      class="transaction-home"
      :toShow="toShow"
      :key="keyLastTransactions"
    ></LastTransactions>
  </div>
</template>
<script>
import LastTransactions from "@/components/LastTransactions.vue";
import StatusAccounts from "@/components/StatusAccounts.vue";

export default {
  name: "Home",
  components: {
    LastTransactions,
    StatusAccounts,
  },
  data: function () {
    return {
      keyLastTransactions: 0,
      keyStatusAccounts: 0,
      toShow: 100,
      toShowForm: null,
    };
  },
  methods: {
    refreshLastTransactions: function () {
      this.toShow = this.toShowForm;
      this.keyLastTransactions += 1;
    },
  },
};
</script>
<style>
.transaction-home {
  justify-content: center;
  align-items: center;
}
.rows-to-show {
  margin-top: 2%;
  margin-bottom: 2%;
  margin-right: 2%;
}

.rows-to-show button,
input,
label {
  margin-top: 1%;
}
.header-home {
  display: flex;
  justify-content: center;
  margin-bottom: 2%;
  margin-top: 2%;
}
.rows-to-show {
  width: 40%;
  margin: 1% auto;
  border: 1px solid;
  margin-bottom: 2%;
  margin-top: 2%;
  min-width: 250px;
  background: var(--background);
  border-radius: 5px;
}

form {
  padding: 4%;
}
</style>
