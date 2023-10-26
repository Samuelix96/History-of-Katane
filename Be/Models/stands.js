const mongoose= require("mongoose")

const StandsSchema = new mongoose.Schema({
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
    cover: {
        type: String,
        required: true
    },
    materiale: {
        type: String,
        required: true
    },
    forma: {
        type: String,
        required: true
    },
}, {timestamps: true, strict: true})

module.exports= mongoose.model("standsModel", StandsSchema, "stands")