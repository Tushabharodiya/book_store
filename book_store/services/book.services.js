const { bookSchema } = require("../models")
const { getData, createData, deleteData, findData, updateData } = require("../Query.js/query")


let fetchBook = () => {
    return bookSchema.find()
}

let createBook = (body) => {
    return createData(bookSchema, body)
}

let findByIdAndDelete = (id) => {
    return deleteData(bookSchema, id)
}

let findById = (id) => {
    return findData(bookSchema, id)
}

let findByIdAndUpdate = (id, body) => {
    return updateData(bookSchema, id, body)
}
module.exports = { fetchBook, createBook, findByIdAndDelete, findById, findByIdAndUpdate }