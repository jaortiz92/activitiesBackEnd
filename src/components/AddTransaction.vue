<template>
  <div class="income">
    <h1>{{ namePag }}</h1>
    <form v-on:submit.prevent="saveTransaction">
      <label>Date</label>
      <input
        v-model="transaction.transaction_date"
        type="date"
        required="true"
      />
      <label>Accounts</label>
      <div>
        <label>First</label>
        <select v-model="transaction.activity_one.account_id" required="true">
          <option selected="true" disabled="disabled">Select option</option>
          <option
            v-for="account in accounts"
            :key="account.account_id"
            :value="account.account_id"
          >
            {{ account.account_id }} : {{ account.account }}
          </option>
        </select>
        <select
          @change="validateNature(1)"
          v-model="transaction.activity_one.nature"
          required="true"
        >
          <option selected="true" disabled="disabled">Select option</option>
          <option :value="parseInt(1)">DB</option>
          <option :value="parseInt(0)">CR</option>
        </select>
        <label>Second</label>
        <select v-model="transaction.activity_two.account_id" required="true">
          <option selected="true" disabled="disabled">Select option</option>
          <option
            v-for="account in accounts"
            :key="account.account_id"
            :value="account.account_id"
          >
            {{ account.account_id }} : {{ account.account }}
          </option>
        </select>
        <select
          @change="validateNature(2)"
          v-model="transaction.activity_two.nature"
          required="true"
        >
          <option selected="true" disabled="disabled">Select option</option>
          <option :value="parseInt(1)">DB</option>
          <option :value="parseInt(0)">CR</option>
        </select>
      </div>
      <label>Category</label>
      <select v-model="transaction.category_id" required="true">
        <option selected="true" disabled="disabled">Select option</option>
        <option
          v-for="category in categories"
          :key="category.category_id"
          :value="category.category_id"
        >
          {{ category.category }}
        </option>
      </select>
      <label>Description</label>
      <select v-model="transaction.description_id" required="true">
        <option selected="true" disabled="disabled">Select option</option>
        <option
          v-for="description in descriptions"
          :key="description.description_id"
          :value="description.description_id"
        >
          {{ description.description }}
        </option>
      </select>
      <label>Kind</label>
      <select v-model="transaction.kind_id" required="true">
        <option selected="true" disabled="disabled">Select option</option>
        <option v-for="kind in kinds" :key="kind.kind_id" :value="kind.kind_id">
          {{ kind.kind }}
        </option>
      </select>
      <label>Origin</label>
      <select v-model="transaction.origin_id" required="true">
        <option selected="true" disabled="disabled">Select option</option>
        <option
          v-for="origin in origins"
          :key="origin.origin_id"
          :value="origin.origin_id"
        >
          {{ origin.origin }}
        </option>
      </select>
      <label>Destiny</label>
      <select v-model="transaction.destiny_id" required="true">
        <option selected="true" disabled="disabled">Select option</option>
        <option
          v-for="origin in origins"
          :key="origin.origin_id"
          :value="origin.origin_id"
        >
          {{ origin.origin }}
        </option>
      </select>
      <label>Value</label>
      <input v-model="transaction.value" type="number" required="true" />
      <label>Detail</label>
      <textarea v-model="transaction.detail" type="text" rows="3" />
      <button type="submit">Save</button>
    </form>
  </div>
  <h2>{{ transaction }}</h2>
  <h4>aca {{ group }}</h4>
</template>
<style>
</style>
<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "AddTransaction",
  props: {
    group: Number,
    namePag: String,
  },
  data: function () {
    return {
      accounts: null,
      categories: null,
      descriptions: null,
      kinds: null,
      origin: null,
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
      forShow: {
        category: true,
      },
    };
  },
  mounted: function () {
    this.getAccounts();
    this.getCategories();
    this.getDescriptions();
    this.getKinds();
    this.getOrigins();
    this.autofill();
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
    getCategories: function () {
      axios
        .get(`http://127.0.0.1:8000/category/group/${this.group}`, {
          headers: {},
        })
        .then((result) => {
          this.categories = result.data;
        })
        .catch((error) =>
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `ERROR to charge categories`,
            confirmButtonColor: "#141e28",
          })
        );
    },
    getDescriptions: function () {
      axios
        .get(`http://127.0.0.1:8000/description/group/${this.group}`, {
          headers: {},
        })
        .then((result) => {
          this.descriptions = result.data;
        })
        .catch((error) =>
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `ERROR to charge descriptions`,
            confirmButtonColor: "#141e28",
          })
        );
    },
    getKinds: function () {
      axios
        .get(`http://127.0.0.1:8000/kind/group/${this.group}`, {
          headers: {},
        })
        .then((result) => {
          this.kinds = result.data;
        })
        .catch((error) =>
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `ERROR to charge kinds`,
            confirmButtonColor: "#141e28",
          })
        );
    },
    getOrigins: function () {
      axios
        .get(`http://127.0.0.1:8000/origin/`, {
          headers: {},
        })
        .then((result) => {
          this.origins = result.data;
        })
        .catch((error) =>
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `ERROR to charge origins`,
            confirmButtonColor: "#141e28",
          })
        );
    },
    saveTransaction: function () {
      axios
        .post(
          `http://127.0.0.1:8000/transaction/complete_post`,
          this.transaction,
          {
            headers: {},
          }
        )
        .then((result) => {
          alert(result.data.transaction_id);
        })
        .catch((error) =>
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `ERROR to save transaction ${error}`,
            confirmButtonColor: "#141e28",
          })
        );
    },
    autofill: function () {},
  },
};
</script>