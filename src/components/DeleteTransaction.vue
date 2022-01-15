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
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "DeleteTransaction",
  emits: ["updatePag"],
  data: function () {
    return {
      transaction_id: null,
    };
  },
  methods: {
    deleteTransaction: function () {
      Swal.fire({
        title: "Are you sure?",
        text: `You want delete transaction ${this.transaction_id}!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(
              `http://127.0.0.1:8000/transaction/${this.transaction_id}/delete`,
              {
                headers: {},
              }
            )
            .then((result) => {
              Swal.fire({
                icon: "success",
                title: "Transaction deleted",
                text: `Transaction's ID ${this.transaction_id}`,
                confirmButtonColor: "#141e28",
              });
              this.$emit("updatePag");
            })
            .catch((error) =>
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `ERROR to delete transaction ${error}`,
                confirmButtonColor: "#141e28",
              })
            );
        }
      });
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