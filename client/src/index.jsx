import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";


const App = () => {
  const [view, setView] = useState("recipes");
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const { data } = await axios.get("/api/recipes");
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
      await axios.post("/api/recipes", recipe);
      await fetchRecipes();
      setView("recipes");
    } catch (err) {
      console.log(err);
    }
  };

  const changeView = (option) => {
    setView(option);

  };
  const renderView = () => {
    if (view === "recipes") {
      
    } 
  };
  return (
    <div>
      <div className="nav">
        <span className="logo" onClick={() => changeView("recipes")}>
          Recipes
        </span>  
        <span className="sign" onClick={() => changeView("signup")}>
          SignUp
        </span>  
        <span className="sign" onClick={() => changeView("login")}>
          LogIn
        </span>  
      </div>
      <div className="main">{renderView()}</div>
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById('app'))
