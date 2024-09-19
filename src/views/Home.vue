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

form {
  width: 80%;
  background: var(--background);
  padding: 7%;
}

.rows-to-show {
  margin: auto;
  margin-bottom: 5%;
  margin-top: 5%;
  width: 40%;
  min-width: 250px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rows-to-show-label {
  width: 100%;
  font-size: 100%;
  font-weight: bold;
  margin-bottom: 5%;
}

.rows-to-show div {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
}

.rows-to-show-input,
.rows-to-show-button {
  flex: 1;
  margin: 0 10px;
}
</style>
