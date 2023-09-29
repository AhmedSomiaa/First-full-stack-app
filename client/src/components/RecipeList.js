import React from "react";
import RecipeItem from "./RecipeItem"

const Pokedex = ({recipes, changeView }) => (
  <div>
    <ul className="recipes-list">
      {recipes.map(recipe => (      
      <li className="recipe-list-item" key={recipe._id}><RecipeItem recipe={recipe} changeView={changeView}/></li>))}

    </ul>
  </div>
);

export default Pokedex;