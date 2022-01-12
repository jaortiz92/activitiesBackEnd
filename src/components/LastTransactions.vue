<template>
  <div class="LastTransactions">
    <table v-if="transactions">
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Category</th>
          <th>Description</th>
          <th>Kind</th>
          <th>Origin</th>
          <th>Destiny</th>
          <th>Accounts</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody
        v-for="transaction in transactions"
        :key="transaction.transaction_id"
      >
        <td>{{ transaction.transaction_id }}</td>
        <td>{{ transaction.transaction_date }}</td>
        <td>{{ transaction.category.category }}</td>
        <td>{{ transaction.description.description }}</td>
        <td>{{ transaction.kind.kind }}</td>
        <td>{{ transaction.origin.origin }}</td>
        <td>{{ transaction.destiny.origin }}</td>
        <td>
          {{ showAccountOfActivity(transaction.activities[0]) }}|{{
            showAccountOfActivity(transaction.activities[1])
          }}
        </td>
        <td>{{ formatterNumber(transaction.value) }}</td>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "LastTransactions",
  props: {
    msg: String,
  },
  data: function () {
    return {
      toShow: 50,
      transactions: null,
    };
  },
  mounted() {
    this.getLastTransactions();
  },
  methods: {
    getLastTransactions: function () {
      axios
        .get(`http://127.0.0.1:8000/transaction/?limit${this.toShow}`, {
          headers: {},
        })
        .then((result) => {
          this.transactions = result.data;
        })
        .catch((error) =>
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `ERROR 404: ${error}`,
            confirmButtonColor: "#141e28",
          })
        );
    },
    formatterNumber: function (value) {
      var formatter = new Intl.NumberFormat("es-CO", {});
      return formatter.format(value);
    },
    showAccountOfActivity(value) {
      var nature = value.nature == 1 ? "DB" : "CR";
      return `${nature}-${value.account.account_id}`;
    },
  },
};
</script>
<style>
</style>
