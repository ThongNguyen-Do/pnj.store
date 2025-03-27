<template>
  <div>
    <Navbar />  <!-- Thêm Navbar vào đây -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
body {
  font-family: "Arial", sans-serif;
  background-color: #ffffff;
  color: #333;
  margin: 0;
  padding: 0;
}
</style>
