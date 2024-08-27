const { orderServices } = require("../services")




let getOrder = async (req, res) => {
    try {

        let order = await orderServices.fetchOrder();

        res.status(200).json({
            message: "order get successfully...",
            order,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let postOrder = async (req, res) => {
    try {

        let body = req.body;

        let order = await orderServices.addOrder(body)

        res.status(201).json({
            message: "order place sucessfully...",
            order,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let deleteOrder = async (req, res) => {
    try {
        let { id } = req.params;

        let findId = await orderServices.findId(id)
        if (!findId) {
            throw new Error("order not found ! ")
        }

        let order = await orderServices.deleteAndFind(id)
        console.log(order);

        res.status(200).json({
            message: "order delete successfully...",
            order,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}



let updateOrder = async (req, res) => {
    try {

        let { id } = req.params;
        let body = req.body;

        let data = await orderServices.findByIdAndUpdate(id, body)

        let order = {
            id,
            ...body
        }

        res.status(200).json({
            message: "order update success",
            order,
        })


    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { getOrder, postOrder, deleteOrder, updateOrder }