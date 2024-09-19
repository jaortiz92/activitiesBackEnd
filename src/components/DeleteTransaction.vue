<template>
  <div class="delete-form">
    <form v-on:submit.prevent="deleteTransaction">
      <label class="delete-items-label">Delete Transaction by ID</label>
      <div>
        <input
          class="delete-items-input"
          v-model="transaction_id"
          type="number"
          min="1"
          required="true"
        />
        <button class="delete-items-button" type="submit">Delete</button>
      </div>
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
<style scoped>
.delete-form {
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

form {
  width: 100%;
  background: var(--background);
  padding: 7%;
}

.delete-items-label {
  width: 100%;
  font-size: 100%;
  font-weight: bold;
  margin-bottom: 5%;
}

.delete-form div {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
}

.delete-items-input,
.delete-items-button {
  flex: 1;
  margin: 0 10px;
}
</style>
