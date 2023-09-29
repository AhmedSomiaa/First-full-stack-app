const Recipes = require ("../database-mongo/recipes.model")

const selectAll = async function (req, res) {
  try {
    const recipes = await Recipes.find({});
    res.status(200).send(recipes);
  } catch (error) {
    res.status(500).send(error);
  }
};

const selectOne = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const recipe = await Recipes.findById(recipeId);
    res.json(recipe);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createRecipe = async (req, res) => {
  try {
    const { title, description } = req.body;
    const recipe = await Recipes.create({title, description});
    res.status(201).json(recipe);
  } catch {
    res.status(500).send(error);
  }

};

const updateRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const { title, description } = req.body;
    const recipe = await Recipes.findByIdAndUpdate(recipeId, {title, description});
    res.status(200).json(recipe);
  } catch {
    res.status(500).send(error);
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    await Recipes.findByIdAndDelete(recipeId);
    res.status(204).json({ success: "Recipe deleted" });
  } catch (error) {
    res.stauts(500).send(error);
  }

};

module.exports = {
  selectAll,
  selectOne,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
