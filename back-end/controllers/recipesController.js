const recipesModel = require("../database/models/recipes.js");

module.exports = {
  getAllRecipes: async (req, res) => {
    try {
      const recipes = await recipesModel.getAll();
      res.json(recipes);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getRecipesByUser: async (req, res) => {
    const userId = req.params.userId;
    try {
      const recipes = await recipesModel.getRecipesByUserId(userId);
      res.json(recipes);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getRecipeById: async (req, res) => {
    const recipeId = req.params.recipeId;
    try {
      const recipe = await recipesModel.getOneRecipe(recipeId);
      if (recipe.length === 0) {
        res.status(404).json({ error: "Recipe not found" });
      } else {
        res.json(recipe[0]);
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  addRecipe: async (req, res) => {
    const { id, authorId, title, description } = req.body;
    try {
      const result = await recipesModel.addRecipe({
        id,
        authorId,
        title,
        description,
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateRecipe: async (req, res) => {
    const userId = req.params.userId;
    const recipeId = req.params.recipeId;
    const { title, description } = req.body;
    try {
      const result = await recipesModel.updateRecipe(userId, recipeId, {
        title,
        description,
      });
      if (result.affectedRows === 0) {
        res.status(404).json({
          error: "Recipe not found or you don't have permission to update",
        });
      } else {
        res.json({ message: "Recipe updated successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteRecipe: async (req, res) => {
    const userId = req.params.userId;
    const recipeId = req.params.recipeId;
    try {
      const result = await recipesModel.deleteRecipe(userId, recipeId);
      if (result.affectedRows === 0) {
        res.status(404).json({
          error: "Recipe not found or you don't have permission to delete",
        });
      } else {
        res.json({ message: "Recipe deleted successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
