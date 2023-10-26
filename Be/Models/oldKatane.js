const mongoose= require("mongoose")

const OldKataneSchema= new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    descrizione: {
        type: String,
        required: true
    },
    era: {
        type: String,
        required: true
    },
    lunghezza: {
        type: Number,
        required: true
    },
    curvatura: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: false,
        default: "Japan"
    },
    prezzo: {
        type: Number,
        required: true
    },
    fabbro: {
        type: String,
        required: false,
        default: "Tsubaya"
    },
}, { timestamps: true, strict: true})

module.exports = mongoose.model("oldKataneModel", OldKataneSchema, "oldKatane")