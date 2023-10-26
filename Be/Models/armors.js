const mongoose = require("mongoose")

const ArmorsSchema = new mongoose.Schema({
    img: {
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
    title: {
        type: String,
        required: true
    },
    elmo: {
        type: String,
        required: true
    },
    maschera: {
        type: String,
        required: true
    },
    corazza: {
        type: String,
        required: true
    },
    parastinchi: {
        type: String,
        required: true
    },
    maniche: {
        type: String,
        required: true
    },
}, { timestamps:true, strict:true })

module.exports = mongoose.model("armorsModel", ArmorsSchema, "armors")