const express = require("express");
const newKatane = express.Router();
const NewKataneModel = require("../Models/newKatane")

newKatane.get('/newKatane', async (req, res) =>
{
    try
    {
        const kata = await NewKataneModel.find()

        res.status(200).send({
            statusCode: 200,
            kata
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

newKatane.get('/newKatane/bytitle', async (req, res) =>
{
    const { title } = req.query;

    try
    {
        const kata = await NewKataneModel.find({
            title: {
                $regex: title,
                $options: "i"
            },
        })

        if (!kata)
        {
            res.status(404).send({
                message: "Titolo non trovato ",
                statusCode: 404
            })
        }

        res.status(200).send({
            statusCode: 200,
            kata
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

newKatane.post('/newKatane/create', async (req, res) =>
{
    const freshKata = new NewKataneModel({
        cover: req.body.cover,
        descrizione: req.body.descrizione,
        prezzo: Number(req.body.prezzo),
        title: req.body.title,
        lunghezza: Number(req.body.lunghezza),
        larghezza: Number(req.body.larghezza),
        guardia: req.body.guardia,
        maniglia: req.body.maniglia,
        spessore : Number(req.body.spessore),
        categoria: req.body.categoria
    })

    try
    {
        const kata = await freshKata.save()
        res.status(201).send({
            message: "Post inviato con successo",
            statusCode: 201,
            kata
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

newKatane.patch('/newKatane/update/:id', async (req, res) =>
{
    const { id } = req.params;

    const kataExist = await NewKataneModel.findById(id)
    if (!kataExist)
    {

        return res.status(404).send({
            message: `armor non trovato con questo id ${ id }`,
            statusCode: 404
        })
    }

    try
    {
        const updateKata = req.body;
        const options = { new: true };
        const kata = await NewKataneModel.findByIdAndUpdate(id, updateKata, options)

        res.status(200).send({
            message: "Update effettuato con successo",
            statusCode: 200,
            kata
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


module.exports = newKatane;