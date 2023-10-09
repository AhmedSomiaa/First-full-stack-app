const express = require("express");
const router = express.Router();
const recipesController = require("../controllers/recipesController");
const auth = require("../middleware/auth");

// Routes related to recipes
router.get("/", recipesController.getAllRecipes);
router.get("/:userId", auth, recipesController.getRecipesByUser);
router.get("/recipe/:recipeId", recipesController.getRecipeById);
router.post("/:userId", auth, recipesController.addRecipe);
router.put("/:recipeId", auth, recipesController.updateRecipe);
router.delete("/:recipeId", auth, recipesController.deleteRecipe);

module.exports = router;
