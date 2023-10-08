const express = require("express");

//Create an Express App
const app = express();

//Require application Route modules
const usersRouter = require("./routes/users");
const recipesRouter = require("./routes/recipes");

//Middleware to parse incoming requests with JSON and urlencoded payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRouter);
app.use("/recipes", recipesRouter);

module.exports = app; // export the express app.
