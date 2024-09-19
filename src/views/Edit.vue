<template>
  <div class="edit">
    <div class="box-delete">
      <DeleteTransaction
        @updatePag="refreshAllComponens()"
        :key="keyDeleteTransaction"
      ></DeleteTransaction>
    </div>
    <div class="box-transaction">
      <LastTransactions
        :toShow="10"
        :key="keyLastTransactions"
      ></LastTransactions>
    </div>
  </div>
</template>
<script>
import LastTransactions from "@/components/LastTransactions.vue";
import DeleteTransaction from "@/components/DeleteTransaction.vue";

export default {
  name: "Edit",
  components: {
    LastTransactions,
    DeleteTransaction,
  },
  data: function () {
    return {
      keyDeleteTransaction: 0,
      keyLastTransactions: 0,
    };
  },
  methods: {
    refreshAllComponens: function () {
      this.keyDeleteTransaction += 1;
      this.keyLastTransactions += 1;
    },
  },
};
</script>
<style scoped>
.edit {
  justify-content: center;
  align-items: center;
}
</style>
