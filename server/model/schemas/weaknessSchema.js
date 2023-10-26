import { Schema } from "mongoose";

const weaknessSchema = new Schema({
    type: String,
    value: String
})

export { weaknessSchema }