import { Schema } from "mongoose";

const attackSchema = new Schema({
    name: String,
    cost: [String],
    convertedEnergyCost: Number,
    damage: String,
    text: String
})

export { attackSchema }