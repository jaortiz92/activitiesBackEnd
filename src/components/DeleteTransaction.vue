<template>
  <div class="delete-form">
    <form v-on:submit.prevent="deleteTransaction">
      <label class="delete-items">ID Transaction</label>
      <input
        class="form-control delete-items"
        v-model="transaction_id"
        type="number"
        min="1"
        required="true"
      />
      <button class="btn btn-danger delete-items" type="submit">Delete</button>
    </form>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import { transactionService } from "../services/transactionService";

export default {
  name: "DeleteTransaction",
  emits: ["updatePag"],
  data: function () {
    return {
      transaction_id: null,
    };
  },
  methods: {
    async deleteTransaction() {
      const ressult = await Swal.fire({
        title: "Are you sure?",
        text: `You want delete transaction ${this.transaction_id}!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (ressult.isConfirmed) {
        try {
          const response = await transactionService.deleteTransaction(
            this.transaction_id
          );
          Swal.fire({
            icon: "success",
            title: "Transaction deleted",
            text: `Transaction's ID ${this.transaction_id}`,
            confirmButtonColor: "#141e28",
          });
          this.$emit("updatePag");
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `ERROR to delete transaction ${error}`,
            confirmButtonColor: "#141e28",
          });
        }
      }
    },
  },
};
</script>
<style>
.delete-form {
  background-color: var(--background);
  width: 20%;
  padding: 2%;
  margin-left: 2%;
}
.delete-items {
  margin-bottom: 2%;
}
</style>
