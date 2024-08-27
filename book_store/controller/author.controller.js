const { authorServices } = require("../services")



let getAuthor = async (req, res) => {
    try {
        let author = await authorServices.fetchAuthor()
        res.status(200).json({
            message: "author get success",
            author,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let createAuthor = async (req, res) => {
    try {

        let body = req.body;
        let findAuthor = await authorServices.findOne(body.name);
        if (findAuthor) {
            throw new Error("author alreay exsited");
        }
        let author = await authorServices.createAuthor(body)

        res.status(201).json({
            message: "author create success",
            author,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let deleteAuthor = async (req, res) => {
    try {

        let { id } = req.params;
        let findId = await authorServices.findById(id)
        if (!findId) {
            throw new Error("author are not found");
        }
        let author = await authorServices.findByIdAndDelete(id)
        res.status(200).json({
            message: "authoe delete successfully....",
            author,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let updateAuthor = async (req, res) => {
    try {

        let { id } = req.params;
        let body = req.body;

        let data = await authorServices.findByIdAndUpdate(id, body)
        let author = {
            id,
            ...body,
        }
        res.status(200).json({
            message: "author update successfully",
            author,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { getAuthor, createAuthor, deleteAuthor, updateAuthor }