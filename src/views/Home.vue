<template>
  <div>
    
   
    <ProductList />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import ProductList from "@/components/ProductList.vue";

export default {
  components: { Navbar, ProductList }
};
</script>

<style scoped>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background: url('@/assets/banner.jpg') no-repeat center center/cover;
  text-align: center;
}
h1 {
  font-size: 3rem;
  color: white;
}
p {
  font-size: 1.2rem;
  color: white;
}
</style>
