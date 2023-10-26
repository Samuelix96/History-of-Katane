const express = require("express");
const old = express.Router();
const oldKataneModel = require("../Models/oldKatane")

old.get('/oldKatane', async (req, res) =>
{
    try
    {
        const olds = await oldKataneModel.find()

        res.status(200).send({
            statusCode: 200,
            olds
        })
    } catch (error)
    {
        res.status(500).send({
            message: "Errore nel server interno",
            error: error.message,
            statusCode: 500
        })
    }
})

old.get('/oldKatane/bytitle', async (req, res) =>
{
    const { title } = req.query;

    try
    {
        const olds = await oldKataneModel.find({
            title: {
                $regex: title,
                $options: "i"
            },
        })

        if (!olds)
        {
            res.status(404).send({
                message: "Titolo non trovato ",
                statusCode: 404
            })
        }

        res.status(200).send({
            statusCode: 200,
            olds
        })
    } catch (error)
    {
        res.status(500).send({
            message: "Errore nel server interno",
            error: error.message,
            statusCode: 500
        })
    }
})

old.post('/oldKatane/create', async (req, res) =>
{
    const newOld = new oldKataneModel({
        img: req.body.img,
        descrizione: req.body.descrizione,
        prezzo: Number(req.body.prezzo),
        title: req.body.title,
        era: req.body.era,
        lunghezza: req.body.lunghezza,
        curvatura: req.body.curvatura,
        location: req.body.location,
        fabbro: req.body.fabbro
    })

    try
    {
        const olds = await newOld.save()
        res.status(201).send({
            message: "Post inviato con successo",
            statusCode: 201,
            olds
        })
    } catch (error)
    {
        res.status(500).send({
            message: "Errore nel server interno",
            error: error.message,
            statusCode: 500
        })
    }

})

old.patch('/oldKatane/update/:id', async (req, res) =>
{
    const { id } = req.params;

    const oldsExist = await oldKataneModel.findById(id)
    if (!oldsExist)
    {

        return res.status(404).send({
            message: `armor non trovato con questo id ${ id }`,
            statusCode: 404
        })
    }

    try
    {
        const updateOld = req.body;
        const options = { new: true };
        const olds = await oldKataneModel.findByIdAndUpdate(id, updateOld, options)

        res.status(200).send({
            message: "Update effettuato con successo",
            statusCode: 200,
            olds
        })

    } catch (error)
    {
        res.status(500).send({
            message: "Errore nel server interno",
            error: error.message,
            statusCode: 500
        })
    }
})


module.exports = old;