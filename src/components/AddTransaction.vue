<template>
  <div class="transaction-form">
    <h1>{{ namePag }}</h1>
    <div class="input-group">
      <form v-on:submit.prevent="saveTransaction">
        <div class="item-transaction">
          <label class="label-transaction">Recurring Transactions</label>
          <select
            class="input-transaction"
            @change="generateRecurringTransactions"
            v-model="selectedRecurringTransactions"
          >
            <option selected="true" disabled="disabled">Select option</option>
            <option
              v-for="rTransaction in filterRecurringTransactions"
              :key="rTransaction.name"
              :value="rTransaction"
            >
              {{ rTransaction.name }}
            </option>
          </select>
        </div>
        <div class="item-transaction">
          <label class="label-transaction">Date</label>
          <input
            class="input-transaction"
            v-model="transaction.transaction_date"
            type="date"
            required="true"
          />
        </div>
        <div class="item-transaction">
          <label class="label-transaction">Accounts</label>
          <div>
            <div class="input-transaction">
              <label class="label-transaction">First</label>
              <select
                class="medium-input"
                v-model="transaction.activity_one.account_id"
                required="true"
              >
                <option selected="true" disabled="disabled">
                  Select option
                </option>
                <option
                  v-for="account in accounts"
                  :key="account.account_id"
                  :value="account.account_id"
                >
                  {{ account.account_id }} : {{ account.account }}
                </option>
              </select>
              <select
                class="min-input"
                @change="validateNature(1)"
                v-model="transaction.activity_one.nature"
                required="true"
              >
                <option selected="true" disabled="disabled">
                  Select option
                </option>
                <option :value="parseInt(1)">DB</option>
                <option :value="parseInt(0)">CR</option>
              </select>
            </div>
            <div class="input-transaction">
              <label class="label-transaction">Second</label>
              <select
                class="medium-input"
                v-model="transaction.activity_two.account_id"
                required="true"
              >
                <option selected="true" disabled="disabled">
                  Select option
                </option>
                <option
                  v-for="account in accounts"
                  :key="account.account_id"
                  :value="account.account_id"
                >
                  {{ account.account_id }} : {{ account.account }}
                </option>
              </select>
              <select
                class="min-input"
                @change="validateNature(2)"
                v-model="transaction.activity_two.nature"
                required="true"
              >
                <option selected="true" disabled="disabled">
                  Select option
                </option>
                <option :value="parseInt(1)">DB</option>
                <option :value="parseInt(0)">CR</option>
              </select>
            </div>
          </div>
        </div>
        <div class="item-transaction">
          <label class="label-transaction">Category</label>
          <select
            class="form-select input-transaction"
            v-model="transaction.category_id"
            required="true"
          >
            <option selected="true" disabled="disabled">Select option</option>
            <option
              v-for="category in categories"
              :key="category.category_id"
              :value="category.category_id"
            >
              {{ category.category }}
            </option>
          </select>
        </div>
        <div class="item-transaction">
          <label class="label-transaction">Description</label>
          <select
            class="form-select input-transaction"
            v-model="transaction.description_id"
            required="true"
          >
            <option selected="true" disabled="disabled">Select option</option>
            <option
              v-for="description in descriptions"
              :key="description.description_id"
              :value="description.description_id"
            >
              {{ description.description }}
            </option>
          </select>
        </div>
        <div class="item-transaction">
          <label class="label-transaction" v-if="forShow.kind">Kind</label>
          <select
            class="form-select input-transaction"
            v-if="forShow.kind"
            v-model="transaction.kind_id"
            required="true"
          >
            <option selected="true" disabled="disabled">Select option</option>
            <option
              v-for="kind in kinds"
              :key="kind.kind_id"
              :value="kind.kind_id"
            >
              {{ kind.kind }}
            </option>
          </select>
        </div>
        <div class="item-transaction">
          <label class="label-transaction" v-if="forShow.origin">Origin</label>
          <select
            class="form-select input-transaction"
            v-if="forShow.origin"
            v-model="transaction.origin_id"
            required="true"
          >
            <option selected="true" disabled="disabled">Select option</option>
            <option
              v-for="origin in origins"
              :key="origin.origin_id"
              :value="origin.origin_id"
            >
              {{ origin.origin }}
            </option>
          </select>
        </div>
        <div class="item-transaction">
          <label class="label-transaction" v-if="forShow.destiny"
            >Destiny</label
          >
          <select
            class="form-select input-transaction"
            v-if="forShow.destiny"
            v-model="transaction.destiny_id"
            required="true"
          >
            <option selected="true" disabled="disabled">Select option</option>
            <option
              v-for="origin in origins"
              :key="origin.origin_id"
              :value="origin.origin_id"
            >
              {{ origin.origin }}
            </option>
          </select>
        </div>
        <div class="item-transaction">
          <label class="label-transaction">Value</label>
          <input
            class="form-control input-transaction"
            v-model="transaction.value"
            type="number"
            min="100"
            max="100000000"
            required="true"
          />
        </div>
        <div class="item-transaction">
          <label class="label-transaction">Detail</label>
          <textarea
            class="form-control input-transaction"
            v-model="transaction.detail"
            type="text"
            rows="3"
          />
        </div>
        <div class="button-transaction">
          <button class="btn btn-primary" type="submit">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
import { recurringTransactions } from "../data/recurringTransactions.js";
import { transactionService } from "../services/transactionService.js";

export default {
  name: "AddTransaction",
  props: {
    group: Number,
    namePag: String,
  },
  emits: ["updatePag"],
  data: function () {
    return {
      accounts: null,
      categories: null,
      descriptions: null,
      kinds: null,
      origins: null,
      selectedRecurringTransactions: null,
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
        origin: true,
        destiny: true,
        kind: true,
      },
      recurringTransactions,
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
  computed: {
    filterRecurringTransactions() {
      return this.recurringTransactions.filter(
        (rTransaction) => rTransaction.namePag == this.namePag
      );
    },
  },
  methods: {
    errorAlert: function (option, introduction = "ERROR to charge ") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${introduction} ${option}`,
        confirmButtonColor: "#141e28",
      });
    },
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
    generateRecurringTransactions: function () {
      if (this.selectedRecurringTransactions) {
        this.transaction.activity_one.nature =
          this.selectedRecurringTransactions.activity_one.nature;
        this.transaction.activity_one.account_id =
          this.selectedRecurringTransactions.activity_one.account_id;
        this.transaction.activity_two.nature =
          this.selectedRecurringTransactions.activity_two.nature;
        this.transaction.activity_two.account_id =
          this.selectedRecurringTransactions.activity_two.account_id;
        this.transaction.category_id =
          this.selectedRecurringTransactions.category_id;
        if (this.selectedRecurringTransactions.description_id) {
          this.transaction.description_id =
            this.selectedRecurringTransactions.description_id;
        }
        if (this.selectedRecurringTransactions.origin_id) {
          this.transaction.origin_id =
            this.selectedRecurringTransactions.origin_id;
        }
        if (this.selectedRecurringTransactions.destiny_id) {
          this.transaction.destiny_id =
            this.selectedRecurringTransactions.destiny_id;
        }
        if (this.selectedRecurringTransactions.kind_id) {
          this.transaction.kind_id = this.selectedRecurringTransactions.kind_id;
        }
      }
    },
    async getAccounts() {
      try {
        const response = await transactionService.getAccounts();
        this.accounts = response.data;
      } catch (error) {
        this.errorAlert("accounts");
      }
    },
    async getCategories() {
      try {
        const response = await transactionService.getCategories(this.group);
        this.categories = response.data;
      } catch (error) {
        this.errorAlert("categories");
      }
    },
    async getDescriptions() {
      try {
        const response = await transactionService.getDescriptions(this.group);
        this.descriptions = response.data;
      } catch {
        this.errorAlert("descriptions");
      }
    },
    async getKinds() {
      try {
        const response = await transactionService.getKinds(this.group);
        this.kinds = response.data;
      } catch {
        this.errorAlert("kind");
      }
    },
    async getOrigins() {
      try {
        const response = await transactionService.getOrigins(this.group);
        this.origins = response.data;
      } catch {
        this.errorAlert("kind");
      }
    },
    async saveTransaction() {
      if (this.transaction.origin_id == this.transaction.destiny_id) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `ERROR to save transaction origin and destiny are the same`,
          confirmButtonColor: "#141e28",
        });
      } else {
        try {
          const response = await transactionService.postTransaction(
            this.transaction
          );
          Swal.fire({
            icon: "success",
            title: "Transaction saved",
            text: `Transaction's ID ${response.data.transaction_id}`,
            confirmButtonColor: "#141e28",
          });
          this.$emit("updatePag");
        } catch (error) {
          this.errorAlert(error, "ERROR to save transaction");
        }
      }
    },
    autofill: function () {
      var shopping = ["Expenditure", "Cost", "Buy Assets"];
      var transfers = ["Savings", "Transfer"];
      if (this.namePag === "Income") {
        this.forShow.origin = false;
        this.transaction.origin_id = 11;
      } else if (shopping.indexOf(this.namePag) >= 0) {
        this.forShow.destiny = false;
        this.forShow.kind = false;
        this.transaction.destiny_id = 11;
        if (this.namePag === shopping[0]) {
          this.transaction.kind_id = 3;
        } else if (this.namePag === shopping[1]) {
          this.transaction.kind_id = 4;
        } else {
          this.transaction.kind_id = 5;
        }
      } else {
      }
    },
  },
};
</script>
<style scoped>
.item-transaction {
  display: flex;
  align-items: center;
}
.label-transaction {
  width: 15%;
  text-align: left;
}
.input-transaction {
  display: flex;
}

.min-input {
  width: 30%;
}
.medium-input {
  width: 70%;
}

button {
  width: 40%;
  font-size: 100%;
}
</style>
