const recipes = require ('../database-mysql/models/recipes')
module.exports = { 
  // Method to fetch all recipes from the recipes database.
  getAllRecipes: async (req, res) => {
    try {
      const results = await recipes.getAll();
      res.json(results);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  // Method to add a recipe to the database via the respective model function.
  addRecipe: async (req, res) => {
    const {title, description} = req.body;
    try {
      const results = await recipes.add({title, description});
      res.json(results);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  // Method to get one recipe by id.
  getOnerecipe: async (req, res) => {
    const id = req.params.iduser;
    try {
      const results = await recipes.getOne(id);
      res.json(results);
    } catch (error) {
      res.status(500).send(error);
    }
  },
}


