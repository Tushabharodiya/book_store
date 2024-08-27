let express = require("express");
const { authorController } = require("../controller");
const validate = require("../middleware/validate");
const { authorValidation } = require("../validation");

let route = express.Router();

route.get("/get", authorController.getAuthor);
route.post("/create", validate(authorValidation.author), authorController.createAuthor);
route.delete("/delete/:id", authorController.deleteAuthor);
route.put("/update/:id", validate(authorValidation.author), authorController.updateAuthor)


module.exports = route;