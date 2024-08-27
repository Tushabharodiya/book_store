const { bookServices } = require("../services")
const uploadImage = require("../services/cloudnary.services")

let getBook = async (req, res) => {
    try {
        let book = await bookServices.fetchBook()

        res.status(200).json({
            message: "book get success...",
            book,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let addBook = async (req, res) => {
    try {

        let body = req.body;

        let { path, originalname } = req.file;

        let colud = await uploadImage(path, originalname)

        let newbody = {
            ...body,
            profile: colud.url,
        }
        // console.log(newbody);

        let book = await bookServices.createBook(newbody)

        res.status(200).json({
            message: "book add success..",
            book,
        })


    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let deleteBook = async (req, res) => {
    try {
        let { id } = req.params;

        let findId = await bookServices.findById(id)
        if (!findId) {
            throw new Error("book is not found")
        }
        let book = await bookServices.findByIdAndDelete(id)

        res.status(200).json({
            message: "book delete success",
            book,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let updateBook = async (req, res) => {
    try {

        let { id } = req.params;
        let body = req.body;

        let book = {
            id,
            ...body,
        }

        let data = await bookServices.findByIdAndUpdate(id, body)
        res.status(500).json({
            message: "book update success",
            book,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { getBook, addBook, deleteBook, updateBook }