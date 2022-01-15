<template>
  <div class="home">
    <LastTransactions :toShow="50"></LastTransactions>
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
