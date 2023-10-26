import { Router } from "express";
const router = Router();

// TODO: import the Pokemon mongoose model




// TODO: write a get route to call the mongoose function and search the database
// depending on either a name or rarity query

// the following route is an example of how you would call a card by the id

router.get('/test', async (req, res) => {
    try {
        const id = '6538a3b926d11648c32d4cb1'
        const data = await PokemonCard.findById(id);

        res.status(200).json({ data })
    } catch (err) {
        res.status(404).json({
            err: err.message,
            msg: `Failed to get Pokemon Card of ID: ${id}`
        })
    }
})


export { router };