const mongoose = require("mongoose");
const db = require("./index.js");

const RecipesSchema = new mongoose.Schema({
    title: String,
    description: String
});

const Recipes = mongoose.model("Recipes", RecipesSchema);

module.exports = Recipes;