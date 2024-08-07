const mongoose = require('mongoose')

// create schema
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: [true, "price must be provided"]
    },
    featured:{
        type: Boolean,
        default: false
    },
    rating:{
        type: Number,
        default: 4.9
    },
    company:{
        type: String,
        required: true,
        enum:{
            values: ['apple', 'samsung', 'mi', 'dell'],
            message: '{VALUE} is not a valid company'
        }
    }

}, {timestamps: true})

module.exports = mongoose.model('Product', productSchema)