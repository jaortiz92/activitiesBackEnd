<template>
  <div class="StatusAccounts">
    <table v-if="depositAccounts">
      <thead>
        <tr>
          <th>Desposit Account</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody
        v-for="depositAccount in depositAccounts"
        :key="depositAccount.deposit_account"
      >
        <td>{{ depositAccount.deposit_account }}</td>
        <td>{{ formatterNumber(depositAccount.value) }}</td>
      </tbody>
    </table>
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
<style></style>
