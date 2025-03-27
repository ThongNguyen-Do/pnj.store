<template>
  <div class="products">
    <h2>Danh sách sản phẩm</h2>
    <div class="product-list">
      <div class="product-card" v-for="product in products" :key="product.id">
        <img :src="product.image" alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }} VND</p>
        <router-link :to="'/product/' + product.id" class="btn">Xem chi tiết</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: "Nhẫn vàng 18K", price: "5.000.000", image: "https://via.placeholder.com/200" },
        { id: 2, name: "Dây chuyền kim cương", price: "15.000.000", image: "https://via.placeholder.com/200" },
        { id: 3, name: "Lắc tay bạc", price: "2.500.000", image: "https://via.placeholder.com/200" },
      ],
    };
  },
};
</script>

<style scoped>
.products {
  padding: 50px;
  text-align: center;
}
.product-list {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.product-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 200px;
}
.product-card img {
  width: 100%;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 15px;
  background: #c9a96e;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
.btn:hover {
  background: #b08b5e;
}
</style>
