const express = require("express");

const db = require('./database-mongo');
const recipesController = require('./controllers/recipes')
const userController =  require('./controllers/user')

const app = express();
const PORT = 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

//user routes
app.post("/signup", userController.signup);
app.post("/login", userController.login);

// recipes routes
app.get("/recipes", recipesController.selectAll);
app.get("/recipes/:id", recipesController.selectOne);
app.post("/recipes", recipesController.createRecipe);
app.put("/recipes/:id", recipesController.updateRecipe);
app.delete("/Recipes/:id", recipesController.deleteRecipe);

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}!`);
});
