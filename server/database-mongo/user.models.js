const mongoose = require("mongoose");
const db = require("./index.js");
const {Schema} = mongoose;

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    //making a reference to my recipes model
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: "Recipes"
    }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;