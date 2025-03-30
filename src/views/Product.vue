<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [], // Danh sách sản phẩm
      isLoading: true, // Trạng thái loading
      errorMessage: '', // Lưu lỗi nếu có
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:5000/api/products'); // Gọi API
      this.products = response.data; // Lưu dữ liệu vào biến products
      console.log("📌 Dữ liệu sản phẩm nhận được:", this.products);
    } catch (error) {
      console.error("❌ Lỗi khi lấy dữ liệu:", error);
      this.errorMessage = "Không thể tải dữ liệu sản phẩm.";
    } finally {
      this.isLoading = false; // Kết thúc loading
    }
  }
};
</script>

<template>
  <div>
    <h1>🛍 Danh sách sản phẩm</h1>
    
    <p v-if="isLoading">⏳ Đang tải dữ liệu...</p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    <ul v-if="products.length > 0">
      <li v-for="product in products" :key="product._id">
        <strong>{{ product.name }}</strong> - {{ product.price }}$
      </li>
    </ul>
    
    <p v-else-if="!isLoading && products.length === 0">⚠ Không có sản phẩm nào!</p>
  </div>
</template>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}
</style>
