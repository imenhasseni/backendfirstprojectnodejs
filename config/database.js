//const mongoose = require("mongoose");
//const db = "mongodb://127.0.0.1:27017/firstproject"

//mongoose.connect(db, function () {
//    console.log("mongodb connecte")
//})
const { connect } = require('mongoose');
const { success, error } = require('consola');

const DB = process.env.APP_DB;
const connectDB = async () => {
    try {
        await connect(DB);
        success({
            message: `Successfully connected with the Database \n ${DB}`,
            badge: true,
        });
    } catch (err) {
        error({
            message: `Unable to connect with Database \n ${err}`,
            badge: true,
        });
        connectDB();
    }
};

module.exports = connectDB();