<template>
  <div class="StatusAccounts card-container" v-if="depositAccounts">
    <div
      v-for="depositAccount in depositAccounts"
      :key="depositAccount.deposit_account"
      class="card"
    >
      <div class="card-content">
        <strong>{{ depositAccount.deposit_account }}</strong>
        <div>{{ formatterNumber(depositAccount.value) }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import { queriesService } from "../services/queriesService";

export default {
  name: "StatusAccounts",
  data: function () {
    return {
      depositAccounts: null,
    };
  },
  mounted: function () {
    this.getdepositAccounts();
  },
  methods: {
    formatterNumber: function (value) {
      var formatter = new Intl.NumberFormat("es-CO", {});
      return formatter.format(value);
    },
    async getdepositAccounts() {
      try {
        const response = await queriesService.getdepositAccounts();
        this.depositAccounts = response.data;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `ERROR 404: ${error} with deposit accounts`,
          confirmButtonColor: "#141e28",
        });
      }
    },
  },
};
</script>
<style scoped>
.card-container {
  width: 97%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;
}

.card {
  flex: 1 1 calc(20% - 20px);
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  min-width: 150px;
}
.card-content {
  place-self: center;
}
</style>
