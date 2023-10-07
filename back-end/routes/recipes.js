const express = require("express");
const router = express.Router();
const recipesController = require("../controllers/recipesController");

// Routes related to recipes
router.get("/", recipesController.getAllRecipes);
router.get("/:userId", recipesController.getRecipesByUser);
router.get("/:userId/:recipeId", recipesController.getRecipeById);
router.post("/:userId", recipesController.addRecipe);
router.put("/:userId/:recipeId", recipesController.updateRecipe);
router.delete("/:userId/:recipeId", recipesController.deleteRecipe);

module.exports = router;
