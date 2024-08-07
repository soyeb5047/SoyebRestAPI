// require('dotenv').config()
const connectDB = require('./db/connect.db')
const product = require('./products.json')

const Product = require('./models/prodcuts.models')

const start = async () => {
    try {
        
        connectDB()
        const response = await Product.create(product)
        console.log(response);
        

    } catch (error) {
        console.log('error while add products: ', error);
        
    }
}

start()

