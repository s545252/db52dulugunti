const mongoose = require("mongoose")
const roseSchema = mongoose.Schema({
    types: String,
    colours: String,
    Cost: Number,
})

module.exports = mongoose.model("Rose", roseSchema)