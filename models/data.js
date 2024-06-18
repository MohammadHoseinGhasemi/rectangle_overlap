// Requires
const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Creating DataBase Model
const rectSchema = new Schema({
    x: Number,
    y: Number,
    width: Number,
    height: Number,
    time: String
}, { timestamps: true })

const Rect = mongoose.model('Rect', rectSchema)

// Exporting Model
module.exports = Rect
