const mongoose = require("mongoose");
const db = require("./index.js");
const {Schema} = mongoose;

const RecipesSchema = new mongoose.Schema({
    title: String,
    description: String,
    //making a reference to my user model
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Recipes = mongoose.model("Recipes", RecipesSchema);

module.exports = Recipes;