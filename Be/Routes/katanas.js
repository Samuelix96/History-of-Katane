const express = require("express");
const katanas = express.Router();
const katanasModel = require("../Models/katanas")

katanas.get('/katanas', async (req, res) =>
{
    try
    {
        const kata = await katanasModel.find()

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

katanas.get('/katanas/bycategory', async (req, res) =>
{
    const { category } = req.query;

    try
    {
        const kata = await katanasModel.find({
            category: {
                $regex: category,
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

katanas.post('/katanas/create', async (req, res) =>
{
    const newKata = new katanasModel({
        title: req.body.title,
        description: req.body.description,
        img: req.body.img,
        category: req.body.category,
        price: Number(req.body.price),
        length: Number(req.body.length),
        width: Number(req.body.width),
        thickness: Number(req.body.thickness),
        age: req.body.age,
        location: req.body.location
    })

    try
    {
        const kata = await newKata.save()
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

katanas.patch('/katanas/update/:id', async (req, res) =>
{
    const { id } = req.params;

    const kataExist = await katanasModel.findById(id)
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
        const kata = await katanasModel.findByIdAndUpdate(id, updateKata, options)

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

katanas.delete('/katanas/delete/:id', async(req,res) => {
    const { id} = req.params;

    try{
        const katanas = await katanasModel.findByIdAndDelete(id)
        if (!katanas) {
            return res.status(404).send({
                statusCode: 404,
                message: "Errore interno al server"
            })
        }

        res.status(200).send({
            statusCode:200,
            message: "Delete effettuato con successo",
            katanas
        })
    } catch (error) {

    }
})


module.exports = katanas;