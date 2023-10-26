import { readJSONfromDir } from "../utilities/json_methods.js";
import { pokemoncardSchema } from "./schemas/pokemoncardSchema.js";
import { PokemonCard } from "./PokemonCard.js";
import mongoose from "mongoose";



(async () => {
    const data = readJSONfromDir();

    const newDoc = new PokemonCard(data[0]);

    console.log(newDoc)

    const res = await newDoc._save();

    console.log(`save: successful, doc: ${res}`)

})();