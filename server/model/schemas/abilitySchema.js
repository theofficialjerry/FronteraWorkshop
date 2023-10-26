import { Schema } from "mongoose";

const abilitySchema = new Schema({
    name: String,
    text: String,
    type: String
})

export {abilitySchema};