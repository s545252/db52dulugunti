const mongoose = require("mongoose")
const roseSchema = mongoose.Schema({
    types: String,
    colours: String,
    cost: Number
})

module.exports = mongoose.model("Rose", roseSchema)