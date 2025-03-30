const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product'); // Nếu models nằm trong backend/models


dotenv.config();
const connectDB = require('./db'); // Kết nối database

const seedProducts = async () => {
    try {
        await connectDB(); // Đảm bảo kết nối thành công trước khi nhập dữ liệu

        const products = [
            { name: "Nhẫn Bạc", price: 500000, description: "Nhẫn bạc cao cấp", image: "ring.jpg" },
            { name: "Dây Chuyền Vàng", price: 2000000, description: "Dây chuyền vàng 18K", image: "necklace.jpg" },
            { name: "Lắc Tay", price: 1200000, description: "Lắc tay đẹp", image: "bracelet.jpg" }
        ];

        await Product.insertMany(products); // Chèn dữ liệu vào MongoDB
        console.log("✅ Dữ liệu mẫu đã được thêm vào database!");

        mongoose.connection.close(); // Đóng kết nối sau khi hoàn tất
    } catch (error) {
        console.error("❌ Lỗi khi thêm dữ liệu:", error);
        process.exit(1);
    }
};

seedProducts();
