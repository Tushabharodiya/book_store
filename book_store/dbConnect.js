
let mongoose = require("mongoose")


let dbconnect = () => {
    mongoose.connect(process.env.DB_URL).then(() => {
        console.log("database connect success");
    })
}

module.exports = dbconnect;