const mongoose = require("mongoose")

const favesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    img: { type: String, required: true },
    description: { type: String, required: true },
    year: { type: Number, required: false },
    // star rating
    review: { type: String, required: true}
})

const FaveReads = mongoose.model("faves", favesSchema)

module.exports = FaveReads