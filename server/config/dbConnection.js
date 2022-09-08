const mongoose = require("mongoose");
const {dbUrl} = require("./config");

const dbConnect = async () => {
    try {
        await mongoose.connect(dbUrl);
        console.log("connected to database");
    } catch (err) {
        console.log(err);
    }
} 

module.exports = dbConnect;