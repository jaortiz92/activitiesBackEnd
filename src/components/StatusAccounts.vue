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
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "StatusAccounts",
  data: function () {
    return {
      depositAccounts: null,
    };
  },
  mounted: function () {
    this.getdepositAccount();
  },
  methods: {
    formatterNumber: function (value) {
      var formatter = new Intl.NumberFormat("es-CO", {});
      return formatter.format(value);
    },
    getdepositAccount: function () {
      axios
        .get(`http://127.0.0.1:8000/query/deposit_accounts`, {
          headers: {},
        })
        .then((result) => {
          this.depositAccounts = result.data;
        })
        .catch((error) =>
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `ERROR 404: ${error} with deposit accounts`,
            confirmButtonColor: "#141e28",
          })
        );
    },
  },
};
</script>
<style>
</style>
