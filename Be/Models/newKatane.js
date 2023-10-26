const mongoose = require("mongoose");

const NewKataneSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    descrizione: {
        type: String,
        required: true
    },
    prezzo: {
        type: Number,
        required: true
    },
    lunghezza: {
        type: Number,
        required: true
    },
    guardia: {
        type: String,
        required: true
    },
    maniglia: {
        type: String,
        required: true
    },
    spessore: {
        type: Number,
        required: true
    },
    larghezza: {
        type: Number,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
}, { timestamps: true, strict: true})

module.exports = mongoose.model("newKatanaModel", NewKataneSchema, "newKatana")