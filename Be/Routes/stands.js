const express = require("express");
const stands = express.Router();
const StandsModel = require("../Models/stands")

stands.get('/stands', async (req, res) =>
{
    try
    {
        const stand = await StandsModel.find()

        res.status(200).send({
            statusCode: 200,
            stand
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

stands.get('/stands/bytitle', async (req, res) =>
{
    const { title } = req.query;

    try
    {
        const stand = await StandsModel.find({
            title: {
                $regex: title,
                $options: "i"
            },
        })

        if (!stand)
        {
            res.status(404).send({
                message: "Titolo non trovato ",
                statusCode: 404
            })
        }

        res.status(200).send({
            statusCode: 200,
            stand
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

stands.post('/stands/create', async (req, res) =>
{
    const newStand = new StandsModel({
        cover: req.body.cover,
        descrizione: req.body.descrizione,
        prezzo: Number(req.body.prezzo),
        title: req.body.title,
        materiale: req.body.materiale,
        forma: req.body.forma
    })

    try
    {
        const stand = await newStand.save()
        res.status(201).send({
            message: "Post inviato con successo",
            statusCode: 201,
            stand
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

stands.patch('/stands/update/:id', async (req, res) =>
{
    const { id } = req.params;

    const standExist = await StandsModel.findById(id)
    if (!standExist)
    {

        return res.status(404).send({
            message: `armor non trovato con questo id ${ id }`,
            statusCode: 404
        })
    }

    try
    {
        const updateStand = req.body;
        const options = { new: true };
        const stand = await HelmetsModel.findByIdAndUpdate(id, updateStand, options)

        res.status(200).send({
            message: "Update effettuato con successo",
            statusCode: 200,
            stand
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


module.exports = stands;