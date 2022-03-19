<template>
  <div id="app">
    <DiningNavbar/>
    <router-view/>
  </div>
</template>

<script>
import DiningNavbar from "@/components/DiningNavbar.vue";

export default {
  components: {
    DiningNavbar,
  },
};
</script>
