<template>
  <!-- Top bar -->
  <nav class="top-bar">
  <div class="top-bar-container">
    <!-- Các link bên trái -->
    <div class="top-links-left">
      <a href="#"><i class="fas fa-book-open"></i> Câu Chuyện PNJ</a>
      <a href="#"><i class="fas fa-users"></i> Quan Hệ Cổ Đông</a>
      <a href="#"><i class="fas fa-map-marker-alt"></i> Cửa Hàng</a>
      <a href="#"><i class="fas fa-search"></i> Tuyển dụng</a>
    </div>
    
    

    <!-- Các link bên phải -->
    <div class="top-links-right">
      <a href="#" class="icon"><i class="fas fa-phone-alt"></i> 0383769192</a>
      <a href="#" class="icon"><i class="fas fa-user"></i> Tài khoản của tôi</a>
      <a href="#" class="icon cart">
        <i class="fas fa-shopping-bag"></i> Giỏ hàng
        <span class="cart-count">0</span>
      </a>
    </div>
  </div>
</nav>


  <!-- Main Navbar -->
  <nav class="main-nav">
    <div class="nav-container">
      <!-- Logo -->
      <div class="logo">
        <img src="@/assets/1.png" alt="PNJ Logo" />
      </div>

      <!-- Navigation Links -->
      <ul class="nav-links">
        <li><a href="#">Trang sức</a></li>
        <li><a href="#">Trang sức cưới</a></li>
        <li><a href="#">Đồng hồ</a></li>
        <li><a href="#">Quà tặng</a></li>
        <li><a href="#">Thương hiệu</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Khuyến mãi</a></li>
      </ul>

      <!-- Tìm kiếm -->
      <input type="text" class="search-box" placeholder="🔍 Tìm kiếm nhanh" />
    </div>
  </nav>
</template>

<style scoped>
/* Reset margin và padding */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Top bar */
.top-bar {
  background: white;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
}

.top-bar-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Các link bên trái */
.top-links-left {
  display: flex;
  gap: 15px;
}

.top-links-left a,
.top-links-right a {
  display: flex;
  align-items: center;
  gap: 5px; /* Khoảng cách giữa icon và chữ */
  color: #333;
  text-decoration: none;
  font-weight: 500;
}

.top-links-left a:hover,
.top-links-right a:hover {
  color: #c89b3c;
}

/* Các link bên phải */
.top-links-right {
  display: flex;
  gap: 15px;
  margin-left: auto;
}

/* Giỏ hàng */
.cart {
  position: relative;
}

.cart-count {
  position: absolute;
  top: -5px;
  right: -10px;
  background: red;
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 50%;
}

/* Font Awesome icons */
.fas {
  font-size: 14px;
  color: #555;
}


/* Main Navbar */
.main-nav {
  background: white;
  padding: 12px 0px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 100vw; /* Tránh bị giới hạn chiều rộng */
}

.nav-container {
  width: 100%; /* Mở rộng container */
  margin: 0 auto;
  padding: 0 20px; /* Tùy chỉnh khoảng cách hai bên */
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
}


/* Logo */
.logo img {
  height: 50px;
}

/* Menu */
.nav-links {
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;
  flex-grow: 1; /* Cho phép nó mở rộng */
  justify-content: flex-start; /* Đẩy menu sát trái */
}


.nav-links li {
  display: inline-block;
}

.nav-links a {
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
}

.nav-links a:hover {
  color: #c89b3c;
}

/* Ô tìm kiếm */
.search-box {
  padding: 6px 15px;
  border: 1px solid #ddd;
  border-radius: 20px;
  outline: none;
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
