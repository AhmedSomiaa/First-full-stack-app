const router = require('express').Router();
const recipes = require("../controllers/recipes");

router.get("/getAll", recipes.getAllRecipes);
router.get("/:idrecipe", recipes.getOnerecipe);

router.post("/add", recipes.addRecipe);


module.exports = router;
