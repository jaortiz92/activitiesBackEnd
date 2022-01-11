<template>
  <div class="home">
    <LastTransactions></LastTransactions>
  </div>
</template>

<script>
// @ is an alias to /src
import LastTransactions from "@/components/LastTransactions.vue";

export default {
  name: "Home",
  components: {
    LastTransactions,
  },
};
</script>
