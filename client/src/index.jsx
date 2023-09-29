import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import RecipeList from "./components/RecipeList"
import RecipeDetails from "./components/RecipeDetails";
import AddRecipe from "./components/AddRecipe"
import Home from "./components/Home";

const App = () => {
  const [view, setView] = useState("home");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState({});

  const fetchRecipes = async () => {
    try {
      const { data } = await axios.get("/recipes");
      setRecipes(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const addRecipe = async (recipe) => {
    try {
      await axios.post("/recipes", recipe);
      await fetchRecipes();
      setView("recipes");
    } catch (err) {
      console.log(err);
    }
  };
  const updateRecipe = async (_id, recipe) => {
    try {
      await axios.put(`recipes/${_id}`, recipe);
      await fetchRecipes();
      setView("recipes");
    } catch (err) {
      console.log(err);
    }
  };

  const deleteRecipe = async (_id) => {
    try {
      await axios.delete(`recipes/${_id}`);
      await fetchRecipes();
      setView("recipes");
    } catch (err) {
      console.log(err);
    }
  };
  const changeView = (option, recipe) => {
    setView(option);
    setSelectedRecipe(recipe);
  };
  const renderView = () => {
    if (view === "home") {
      return <Home />;
    } else if (view === "recipes") {
      return <RecipeList recipes={recipes} changeView={changeView}/>;
    }else if (view === "recipeDetails") {
      return <RecipeDetails recipe={selectedRecipe} updateRecipe={updateRecipe} deleteRecipe={deleteRecipe}/>;
    } else if (view === "addRecipe") {
      return <AddRecipe addRecipe={addRecipe}/>;

  };
};
    return (
      <div>
        <header>
          <nav>
            <button onClick={() => changeView('home')}>Home</button>
            <button onClick={() => changeView('recipes')}>Recipe List</button>
            <button onClick={() => changeView('addRecipe')}>Create Recipe</button>
          </nav>
        </header>
        <main>
          {renderView()}
        </main>
      </div>
    );
  ;
};

ReactDOM.render(<App />, document.getElementById('app'));
