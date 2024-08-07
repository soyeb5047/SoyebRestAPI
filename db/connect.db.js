const mongoose = require('mongoose')

const uri = process.env.MONGO_URI 

const connectDB = async () => {
    try {
        const db = await mongoose.connect(uri)

        console.log(`DB connected to ${db.connection.host}`);
        
    } catch (error) {
        console.log("Failed to connect:", error);
        
    }
}

module.exports = connectDB;