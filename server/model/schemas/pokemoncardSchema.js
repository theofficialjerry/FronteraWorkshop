import { Schema } from "mongoose";

import { abilitySchema } from "./abilitySchema.js";
import { attackSchema } from "./attackSchema.js";
import { imagesSchema } from "./imagesSchema.js";
import { weaknessSchema } from "./weaknessSchema.js";

// THIS IS YOUR POKEMON SCHEMA
// HOW A DATA ENTRY WOULD BE ENTERED

const pokemoncardSchema = new Schema({
    name: String,
    hp: String,
    types: [String],
    evolvesFrom: String,
    rules: [String],
    abilities: [abilitySchema],
    attacks: [attackSchema],
    weaknesses: [weaknessSchema],
    rarity: String,
    images: imagesSchema

});

export { pokemoncardSchema };