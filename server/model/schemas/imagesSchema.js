import { Schema } from "mongoose";

const imagesSchema = new Schema({
    small: String,
    large: String
})

export { imagesSchema }