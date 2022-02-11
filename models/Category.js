const mongoose = require("mongoose");


const categorySchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
        unique: true,
        minlength: 4,
        trim: true

    },
    description: {
        type: String,
        require: true
    },

},

    { timestamps: true },


);

module.exports = mongoose.model("Category", categorySchema)

