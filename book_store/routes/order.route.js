let express = require("express");
const { getOrder } = require("../controller/order.controller");
const { orderController } = require("../controller");
const validate = require("../middleware/validate");
const { orderValidation } = require("../validation");

let route = express.Router()

route.get("/get", orderController.getOrder);
route.post("/post", orderController.postOrder);
route.delete("/delete/:id", orderController.deleteOrder);
route.put("/update/:id", orderController.updateOrder)

module.exports = route;