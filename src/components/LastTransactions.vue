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
          <th>Detail</th>
        </tr>
      </thead>
      <tbody
        v-for="transaction in transactions"
        :key="transaction.transaction_id"
      >
        <td>{{ transaction.transaction_id }}</td>
        <td>{{ transaction.transaction_date }}</td>
        <td>{{ transaction.category }}</td>
        <td>{{ transaction.description }}</td>
        <td>{{ transaction.kind }}</td>
        <td>{{ transaction.origin }}</td>
        <td>{{ transaction.destiny }}</td>
        <td>
          {{ showAccountOfActivity(transaction.activities[0]) }}|{{
            showAccountOfActivity(transaction.activities[1])
          }}
        </td>
        <td>{{ formatterNumber(transaction.value) }}</td>
        <td>{{ transaction.detail }}</td>
      </tbody>
    </table>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { transactionService } from "@/services/transactionService";

export default {
  name: "LastTransactions",
  props: {
    toShow: Number,
  },
  data: function () {
    return {
      transactions: null,
    };
  },
  mounted() {
    this.getLastTransactions(this.toShow);
  },
  methods: {
    async getLastTransactions(toShow) {
      console.log(1);
      try {
        const response = await transactionService.getLastTransactions(toShow);
        console.log(response);
        this.transactions = response.data;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `ERROR 404: ${error}`,
          confirmButtonColor: "#141e28",
        });
      }

      console.log(2);
    },
    formatterNumber: function (value) {
      var formatter = new Intl.NumberFormat("es-CO", {});
      return formatter.format(value);
    },
    showAccountOfActivity(value) {
      return `${value.nature}-${value.account_id}`;
    },
  },
};
</script>
<style></style>
