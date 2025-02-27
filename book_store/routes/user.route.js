let express = require("express")
const { userController } = require("../controller");
const validate = require("../middleware/validate");
const { userValidation } = require("../validation");

let route = express.Router()

route.get("/get", userController.getUser);
route.post("/register", validate(userValidation.user), userController.createUser);
route.delete("/delete/:id", userController.deleteUser);
route.put("/update/:id", validate(userValidation.user), userController.updateUser);
route.post("/login", userController.userLogin)


module.exports = route;