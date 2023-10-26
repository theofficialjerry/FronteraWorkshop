// DO NOT TOUCH THIS FILE



import { Router } from "express";

import { readJSONfromDir } from "../../utilities/json_methods.js";
import { PokemonCard } from "../../model/PokemonCard.js";

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello from db route');
})

router.put('/one', async (req, res) => {

    try {
        const json_data = readJSONfromDir();

        const newDoc = new PokemonCard(json_data[0]);

        console.log(newDoc);

        const data = await newDoc._save();

        res.status(201).json({
            msg: `document uploaded successfully`,
            data: data
        })
    } catch (err) {
        res.status(500).json({
            err: err.message,
            msg: `fuck`
        })
    }
})

router.put('/fill', async (req, res) => {
    try {
        const file_path = "json/pokemon/"
        const json_data = readJSONfromDir(file_path)

        const data = []

        for (const cardObj of json_data) {
            try {
                const pokemonCard = new PokemonCard(cardObj);
                const savedDocument = await pokemonCard._save();
                console.log(`saved document: ${savedDocument}`);
                data.push(savedDocument);
            } catch (err) {
                res.status(500).json({
                    err: err.message,
                    msg: `could not update database`
                });
                return;
            }
        }

        res.status(202).json({
            "msg": "all data saved successfully",
            "data": data
        })

    } catch (err) {
        res.status(500).json({
            err: err.message,
            msg: `could not update database`
        })
    }
})

router.delete('/clear', async (req, res) => {
    try {
        // const data = await model.deleteMany();
        const data = await PokemonCard._emptyDatabase();
        res.status(202).json({
            msg: "all data deleted successfully",
            data: data
        })
    } catch (err) {
        res.status(500).json({
            err: err.message,
            msg: 'Failed to delete the database'
        });
    }
})

export {router}