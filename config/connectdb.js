
const mongoose = require('mongoose');
require('dotenv').config({ path: './config/.env' });
const connect = async() => {
    try {
        await mongoose.connect(process.env.db);
        console.log('data base connected')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connect;