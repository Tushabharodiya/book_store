const { createToken } = require("../middleware/auth")
const { userServices } = require("../services")
let getUser = async (req, res) => {
    try {
        let user = await userServices.getUser()

        res.status(200).json({
            message: "user get successfully...",
            user,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let createUser = async (req, res) => {
    try {
        let body = req.body;
        let findEmail = await userServices.findByEmail(body.email)

        if (findEmail) {
            throw new Error("you are arealy login");
        }
        let user = await userServices.postUser(body)

        res.status(201).json({
            message: "user register successfully....",
            user,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let deleteUser = async (req, res) => {

    try {
        let { id } = req.params;

        let findId = await userServices.findById(id)
        if (!findId) {
            throw new Error("user are not found")
        }
        let user = await userServices.findByIdAndDelete(id)

        res.status(200).json({
            message: "user delete successfully...",
            user,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}


let updateUser = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;

        let data = await userServices.findByIdAndUpdate(id, body)
        let user = {
            id,
            ...body,
        }

        res.status(200).json({
            message: "user update successfully...",
            user,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })

    }
}

//login

let userLogin = async (req, res) => {
    try {
        let { email, password } = req.body;

        let user = await userServices.findByEmail(email)
        // console.log(user);

        if (!user) {
            throw new Error("user are not found");
        }

        if (user.password != password) {
            throw new Error("password invalid")
        }

        // let token = createToken({ user })
        //  res.cookie("token", token)

        res.status(200).json({
            message: "you are login success",
            user,
        })


    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}






module.exports = { getUser, createUser, deleteUser, updateUser, userLogin }