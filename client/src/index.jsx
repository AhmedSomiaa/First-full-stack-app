import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import RecipeList from "./components/RecipeList"
import RecipeDetails from "./components/RecipeDetails";
import AddRecipe from "./components/AddRecipe"
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

const App = () => {
  const [view, setView] = useState("home");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState({});
  const [authenticated, setAuthenticated] = useState(false);

  const fetchRecipes = async () => {
    try {
      const { data } = await axios.get("/recipes");
      setRecipes(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authenticated") === "true";
    setAuthenticated(isAuthenticated);
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

  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    setAuthenticated(false);
    setView("home");
  };

  const renderView = () => {
    if (view === "home") {
      return <Home />;
    } else if (view === "recipes") {
      return <RecipeList recipes={recipes} changeView={changeView}/>;
    } else if (view === "recipeDetails") {
      return <RecipeDetails recipe={selectedRecipe} updateRecipe={updateRecipe} deleteRecipe={deleteRecipe}/>;
    } else if (view === "addRecipe") {
      return <AddRecipe addRecipe={addRecipe}/>;
    } else if (view === "signup") {
      return <SignUp changeView={changeView}/>;
    } else if (view === "signin") {
      return <SignIn changeView={changeView} setAuthenticated={setAuthenticated}/>;
    };
};
    return (
      <div>
          <nav className="nav">
          {authenticated ? (
            <>
            <div className="logo">
            <h1 onClick={() => changeView('home')}>Home</h1>
            </div>
            <div id="mainListDiv" className="main_list">
            <ul className="navlinks">
              <li onClick={() => setView("recipes")}>Recipe List</li>
              <li onClick={() => setView("addRecipe")}>Create Recipe</li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
            </div>
            </>
          ) : (
            <>
            <div className="logo">
              <h1 onClick={() => changeView('home')}>Home</h1>
            </div>
            <div id="mainListDiv" className="main_list">
            <ul className="navlinks">
              <li onClick={() => setView("signin")}>SignIn</li>
              <li onClick={() => setView("signup")}>SignUp</li>
            </ul>
            </div>
            </>
          )}
          </nav>
        <main>
          {renderView()}
        </main>
      </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
