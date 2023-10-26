import mongoose from "mongoose";
import { pokemoncardSchema } from "./schemas/pokemoncardSchema.js";

const PokemonCardModel = mongoose.model("PokemonCard", pokemoncardSchema);

class PokemonCard {
    id;
    constructor(data) {
        this.model = PokemonCardModel;
        if (data)
            this._init(data);
    }

    _init(data) {
        this.name = data.name;
        this.hp = data.hp;
        this.types = data.types;
        this.evolvesFrom = data.evolvesFrom;
        this.rules = data.rules;
        this.abilities = data.abilities;
        this.attacks = data.attacks;
        this.weaknesses = data.weaknesses;
        this.rarity = data.rarity;
        this.images = data.images;
    }

    async _save() {
        const savedDocument = await new this.model(this).save();
        this.id = savedDocument._id;
        return savedDocument;
    }

    async _remove() {
        return await this.model.findByIdAndDelete(this._id)
    }

    static async findById(id) {
        return await PokemonCardModel.findById(id);
    }

    static async findAll() {
        return await PokemonCardModel.find({});
    }

    static async _emptyDatabase() {
        return await PokemonCardModel.deleteMany({});
    }

    // TODO: make a searchDatabase() function that searches the db for either a case-insensitive name or rarity value
    //
    // hint: will need RegExpression: RegExp(`.*${name}.*`, "i") 

 
}

export { PokemonCard };