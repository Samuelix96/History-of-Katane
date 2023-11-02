const express = require("express");
const armors = express.Router();
const ArmorsModel = require("../Models/armors")

armors.get('/armors', async (req, res) =>
{
    try
    {
        const armor = await ArmorsModel.find()

        res.status(200).send({
            statusCode: 200,
            armor
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

armors.get('/armors/bytitle', async (req, res) =>
{
    const { title } = req.query;

    try
    {
        const armor = await ArmorsModel.find({
            title: {
                $regex: title,
                $options: "i"
            },
        })

        if (!armor)
        {
            res.status(404).send({
                message: "Titolo non trovato ",
                statusCode: 404
            })
        }

        res.status(200).send({
            statusCode: 200,
            armor
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

armors.post('/armors/create', async (req, res) =>
{
    const newArmors = new ArmorsModel({
        img: req.body.img,
        description: req.body.description,
        price: req.body.price,
        title: req.body.title,
        helmet: req.body.helmet,
        mask: req.body.mask,
        armor: req.body.armor,
        sleeves:req.body.sleeves
    })

    try
    {
        const armor = await newArmors.save()
        res.status(201).send({
            message: "Post inviato con successo",
            statusCode: 201,
            armor
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

armors.patch('/armors/update/:id', async (req, res) =>
{
    const { id } = req.params;

    const armorExist = await ArmorsModel.findById(id)
    if (!armorExist)
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
        const armor = await ArmorsModel.findByIdAndUpdate(id, updateArmor, options)

        res.status(200).send({
            message: "Update effettuato con successo",
            statusCode: 200,
            armor
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


module.exports = armors