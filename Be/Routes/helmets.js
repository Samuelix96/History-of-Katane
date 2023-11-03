const express = require("express");
const helmets = express.Router();
const HelmetsModel = require("../Models/helmets")

helmets.get('/helmets', async (req, res) =>
{
    try
    {
        const helmet = await HelmetsModel.find()

        res.status(200).send({
            statusCode: 200,
            helmet
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

helmets.get('/helmets/bytitle', async (req, res) =>
{
    const { title } = req.query;

    try
    {
        const helmet = await HelmetsModel.find({
            title: {
                $regex: title,
                $options: "i"
            },
        })

        if (!helmet)
        {
            res.status(404).send({
                message: "Titolo non trovato ",
                statusCode: 404
            })
        }

        res.status(200).send({
            statusCode: 200,
            helmet
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

helmets.post('/helmets/create', async (req, res) =>
{
    const newHelmet = new HelmetsModel({
        img: req.body.img,
        description: req.body.description,
        price: Number(req.body.price),
        title: req.body.title,
        height: Number(req.body.height),
        weight: Number(req.body.weight),
        subtitle: req.body.subtitle
    })

    try
    {
        const helmet = await newHelmet.save()
        res.status(201).send({
            message: "Post inviato con successo",
            statusCode: 201,
            helmet
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

helmets.patch('/helmets/update/:id', async (req, res) =>
{
    const { id } = req.params;

    const helmetExist = await HelmetsModel.findById(id)
    if (!helmetExist)
    {

        return res.status(404).send({
            message: `armor non trovato con questo id ${ id }`,
            statusCode: 404
        })
    }

    try
    {
        const updateArmor = req.body;
        const options = { new: true };
        const helmet = await HelmetsModel.findByIdAndUpdate(id, updateArmor, options)

        res.status(200).send({
            message: "Update effettuato con successo",
            statusCode: 200,
            helmet
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


module.exports = helmets