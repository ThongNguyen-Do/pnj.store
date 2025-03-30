const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');

dotenv.config();
connectDB();

const app = express(); // ✅ Khai báo app trước khi sử dụng

app.use(express.json());
app.use(cors());

const productRoutes = require('./routes/productRoutes.js'); // ✅ Import sau khi khai báo app

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Sử dụng routes sản phẩm
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
