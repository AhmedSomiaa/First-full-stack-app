import React from "react";

const RecipeItem = ({recipe, changeView}) => {
    const handleChange = () => {
        changeView("recipeDetails", recipe)
    }
    return (
        <div>
            <h3 onClick={handleChange}>Title: {recipe.title}</h3>
            <p>Description: {recipe.description.length > 20 ? recipe.description.substring(0,20) + "..." : recipe.description}</p>
        </div>
    )
}
export default RecipeItem;