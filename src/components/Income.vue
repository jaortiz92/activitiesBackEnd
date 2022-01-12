<template>
  <div class="income">
    <h1>Income</h1>
    <form action="">
      <label>Accounts</label>
      <div>
        <label>First</label>
        <select v-model="transaction.activity_one.account_id">
          <option value=""></option>
          <option
            v-for="account in accounts"
            v-bind:key="account.account_id"
            :value="account.account_id"
          >
            {{ account.account_id }} : {{ account.account }}
          </option>
        </select>
        <select
          @change="validateNature(1)"
          v-model="transaction.activity_one.nature"
        >
          <option :value="parseInt(1)">DB</option>
          <option :value="parseInt(0)">CR</option>
        </select>
        <label>Second</label>
        <select v-model="transaction.activity_two.account_id">
          <option value=""></option>
          <option
            v-for="account in accounts"
            v-bind:key="account.account_id"
            :value="account.account_id"
          >
            {{ account.account_id }} : {{ account.account }}
          </option>
        </select>
        <select
          @change="validateNature(2)"
          v-model="transaction.activity_two.nature"
        >
          <option :value="parseInt(1)">DB</option>
          <option :value="parseInt(0)">CR</option>
        </select>
      </div>
    </form>
  </div>
  <h2>{{ transaction }}</h2>
</template>
<style>
</style>
<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "Income",
  data: function () {
    return {
      accounts: null,
      transaction: {
        transaction_date: null,
        value: null,
        detail: null,
        category_id: null,
        description_id: null,
        kind_id: null,
        origin_id: null,
        destiny_id: null,
        activity_one: {
          nature: null,
          transaction_id: null,
          account_id: null,
        },
        activity_two: {
          nature: null,
          transaction_id: null,
          account_id: null,
        },
      },
    };
  },
  mounted: function () {
    this.getAccounts();
  },
  methods: {
    validateNature: function (value) {
      if (value === 1) {
        if (this.transaction.activity_one.nature === 1) {
          this.transaction.activity_two.nature = 0;
        } else {
          this.transaction.activity_two.nature = 1;
        }
      } else {
        if (this.transaction.activity_two.nature === 1) {
          this.transaction.activity_one.nature = 0;
        } else {
          this.transaction.activity_one.nature = 1;
        }
      }
    },
    getAccounts: function () {
      axios
        .get(`http://127.0.0.1:8000/account/`, {
          headers: {},
        })
        .then((result) => {
          this.accounts = result.data;
        })
        .catch((error) =>
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `ERROR to charge accounts`,
            confirmButtonColor: "#141e28",
          })
        );
    },
  },
};
</script>