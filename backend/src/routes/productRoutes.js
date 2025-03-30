const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');


// API lấy danh sách sản phẩm
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi lấy sản phẩm' });
    }
});

module.exports = router;
