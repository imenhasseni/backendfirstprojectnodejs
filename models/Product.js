const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({

    ref: {
        type: String,
        require: true,
        unique:true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    Qte: {
        type: Number,
        require: true
    },
    picture: {
        type: String,
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        required: true
    },
},

    { timestamps: true }

);

module.exports = mongoose.model("Product", productSchema)