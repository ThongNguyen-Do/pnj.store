const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL); 
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('Database Connection Error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
