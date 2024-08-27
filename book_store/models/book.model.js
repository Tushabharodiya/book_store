let mongoose = require("mongoose")


let bookSchema = new mongoose.Schema({
    profile: {
        type: String,
    },
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
    genres: {
        type: String,
    },
    rating: {
        type: Number,
        default: 1,
        enum: [1, 2, 3, 4, 5]
    },
    inStock: {
        type: Boolean,
        default: true,
    }
})

let book = mongoose.model("bookSchema", bookSchema)

module.exports = book;