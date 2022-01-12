<template>
  <div class="home">
    <LastTransactions></LastTransactions>
  </div>
</template>
<style>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import LastTransactions from "@/components/LastTransactions.vue";

export default {
  name: "Home",
  components: {
    LastTransactions,
  },
};
</script>
