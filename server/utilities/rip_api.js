import { pokemonRarities } from "../json/pokemon_rarities.js";
import { pokemonCardAPICall } from "./pokemon_api.js";
import { writeJSONtoFile } from "./json_methods.js";
import { fileNamePrefixes } from "./fileNamePrefixes.js";

const ripPokemonCardAPI = async () => {
    pokemonRarities.forEach(async (rarity, index) => {
        
        const res = await pokemonCardAPICall(rarity);
        writeJSONtoFile(res.data, fileNamePrefixes[index]);

        console.log(`done writing ${rarity} data to ${fileNamePrefixes[index]}`)
    })
}

(async () => {
    await ripPokemonCardAPI();
})();