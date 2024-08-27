const { userSchema } = require("../models")
const { getData, createData, deleteData, findData, updateData, findOneData } = require("../Query.js/query")


let getUser = () => {
    return getData(userSchema)
}

let postUser = (body) => {
    return createData(userSchema, body)
}

let findByIdAndDelete = (id) => {
    return deleteData(userSchema, id)
}

let findById = (id) => {
    return findData(userSchema, id)
}

let findByIdAndUpdate = (id, body) => {
    return updateData(userSchema, id, body)
}

let findByEmail = (email) => {
    return findOneData(userSchema, { email })
}

module.exports = { getUser, postUser, findByIdAndDelete, findById, findByIdAndUpdate, findByEmail }