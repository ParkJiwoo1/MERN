const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Basket = new Schema(
    {
        date: { type: String, required: true },
        time: { type: String, required: true },
        location: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('basketball', Basket)