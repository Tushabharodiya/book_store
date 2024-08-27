let express = require("express")
const { bookController } = require("../controller");
const validate = require("../middleware/validate");
const { bookValidation } = require("../validation");
const { isLoing } = require("../middleware/auth");
const upload = require("../middleware/uoload");

let route = express.Router()

route.get("/get", bookController.getBook);
route.post("/add", upload.single("profile"), validate(bookValidation.stock), bookController.addBook);
route.delete("/delete/:id", bookController.deleteBook);
route.put("/update/:id", validate(bookValidation.stock), bookController.updateBook)

module.exports = route;