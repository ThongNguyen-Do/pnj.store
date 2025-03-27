<template>
    <div class="product-detail">
      <h2>{{ product.name }}</h2>
      <img :src="product.image" alt="product.name" />
      <p>{{ product.price }} VND</p>
      <button class="btn">Thêm vào giỏ hàng</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: { name: "Nhẫn vàng 18K", price: "5.000.000", image: "https://via.placeholder.com/300" },
      };
    },
  };
  </script>
  
  <style scoped>
  .product-detail {
    text-align: center;
    padding: 50px;
  }
  .product-detail img {
    width: 300px;
    border-radius: 10px;
  }
  .btn {
    margin-top: 20px;
    padding: 10px 20px;
    background: #c9a96e;
    color: white;
    border: none;
    border-radius: 5px;
  }
  .btn:hover {
    background: #b08b5e;
  }
  </style>
  