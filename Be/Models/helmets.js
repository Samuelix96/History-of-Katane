const mongoose = require("mongoose");

const HelmetsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    prezzo: {
        type: Number,
        required: true
    },
    descrizione: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    altezza: {
        type: Number,
        required: true
    },
    peso: {
        type: Number,
        required: true
    },
    verticale: {
        type: Number,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
}, { timestamps:true, strict: true})

module.exports = mongoose.model("helmetsModel", HelmetsSchema, "helmets")