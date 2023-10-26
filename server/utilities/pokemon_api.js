import axios from "axios";
import 'dotenv/config';

async function pokemonCardAPICall(rarity) {
    const API_URL = process.env.POKEMON_API_URI;
    const selectQuery = `id,name,hp,types,evolvesFrom,rules,abilities,attacks,weaknesses,rarity,images`;

    const res = await axios({
        method: 'get',
        url: API_URL,
        auth: {
            'X-Api-Key': process.env.POKEMON_API_KEY
        },
        params: {
            q: `rarity:"${rarity}"`,
            select: selectQuery
        }
    });

    return res.data;
}

export { pokemonCardAPICall };