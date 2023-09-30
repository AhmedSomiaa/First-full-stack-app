import React from "react";

const RecipeItem = ({recipe, changeView}) => {
    const handleChange = () => {
        changeView("recipeDetails", recipe)
    }
    return (
        <div className="recipe-list-item">
            <h3 onClick={handleChange}>Title: {recipe.title}</h3>
            <p>Description: {recipe.description.length > 150 ? recipe.description.substring(0,150) + "..." : recipe.description}</p>
        </div>
    )
}
export default RecipeItem;