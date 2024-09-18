<template>
  <div class="home">
    <div class="header-home">
      <StatusAccounts :key="keyStatusAccounts"></StatusAccounts>
    </div>
    <div class="rows-to-show">
      <form v-on:submit.prevent="refreshLastTransactions()">
        <label class="rows-to-show-label">Rows to show</label>
        <div>
          <input
            class="rows-to-show-input"
            v-model="toShowForm"
            type="number"
            min="1"
            required="true"
          />
          <button class="rows-to-show-button" type="submit">Show</button>
        </div>
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
<style scoped>
.transaction-home {
  justify-content: center;
  align-items: center;
}

.header-home {
  display: flex;
  justify-content: center;
  margin-bottom: 2%;
  margin-top: 2%;
}
.rows-to-show {
  width: 40%;
  margin: 2% auto;
  min-width: 250px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.rows-to-show-input {
  width: 50%;
  font-size: 100%;
  padding: auto;
}
.rows-to-show-label {
  width: 90%;
  font-size: 100%;
  font-weight: bold;
  padding: 10px;
}

.rows-to-show-button {
  width: 50%;
}

.rows-to-show div {
  display: flex;
}
form {
  width: 80%;
  background: var(--background);
}
</style>
