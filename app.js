const express = require('express')
const app = express()
require('dotenv').config()

// middleware
const connectDB = require('./db/connect.db')

const PORT = process.env.PORT || 5000

// import routes
const productRoute = require('./routes/product.routes')

app.get('/', (req, res) => {
    res.send("hi i am soyeb")
})

// routes
app.use('/api/products', productRoute)

const start = async () => {
    try {
        app.listen(PORT, async () => {

            // connect database
            console.log(`listening on ${PORT}`);
            await connectDB()
        })
    } catch (error) {
        console.log(error);

    }
}

start()