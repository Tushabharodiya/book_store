let express = require("express")
let routes = express.Router();
let userRoute = require("./user.route");
let authorRoute = require("./author.route")
let bookRoute = require("./book.route");
let orderRoute = require("./order.route")


routes.use("/user", userRoute)
routes.use("/author", authorRoute)
routes.use("/book", bookRoute);
routes.use("/order", orderRoute)

module.exports = routes;