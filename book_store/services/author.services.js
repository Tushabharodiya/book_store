const { authorSchema } = require("../models")
const { getData, createData, deleteData, findData, updateData } = require("../Query.js/query")



let fetchAuthor = () => {
    return getData(authorSchema)
}

let createAuthor = (body) => {
    return createData(authorSchema, body)
}


let findByIdAndDelete = (id) => {
    return deleteData(authorSchema, id)
}

let findById = (id) => {
    return findData(authorSchema, id)
}

let findOne = (name) => {
    return authorSchema.findOne({ name })
}

let findByIdAndUpdate = (id, body) => {
    return updateData(authorSchema, id, body)
}


module.exports = { fetchAuthor, createAuthor, findByIdAndDelete, findById, findOne, findByIdAndUpdate }                                 