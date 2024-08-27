require("dotenv").config()
let http = require("http")
let express = require("express");
const dbconnect = require("./dbConnect");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
let cors = require("cors");
let app = express();
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(cors());

//routes
app.use("/v1", routes)

//database connect
dbconnect()

//http server
http.createServer(app).listen(process.env.PORT, () => {
    console.log(`server stated ${process.env.PORT}`);
})
