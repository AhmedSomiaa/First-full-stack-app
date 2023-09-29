const express = require("express");

const db = require('./database-mongo');
const recipesController = require('./controllers/recipes')

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.get("/recipes", recipesController.selectAll);
app.get("/recipes/:id", recipesController.selectOne);
app.post("/recipes", recipesController.createRecipe);
app.put("/recipes/:id", recipesController.updateRecipe);
app.delete("/Recipes/:id", recipesController.deleteRecipe);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
