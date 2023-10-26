import { pokemonRarities } from "../json/pokemon_rarities.js";

const fileNamePrefixes = pokemonRarities.map(rarity => {
    return rarity.split(' ').join('_');
});

export { fileNamePrefixes };