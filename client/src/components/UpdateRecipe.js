import React, {useState} from "react";

const EditPokemon = ({recipe, updateRecipe}) => {
    const [updatedRecipe, setUpdatedRecipe] = useState ({
        title: recipe.title,
        description: recipe.description
    })
    const handleChange = (e) => {
        const inputName = e.target.name;
        const value = e.target.value;
        setUpdatedRecipe({...updatedRecipe, [inputName]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateRecipe(recipe._id, updatedRecipe);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title"> Title:</label>
            <input type="text" name="title" defaultValue={recipe.title} onChange={handleChange} required/> <br></br>
            <label htmlFor="description"> Description:</label>
            <input type="text" name="description" defaultValue={recipe.description} onChange={handleChange} required/> <br></br>
            <input type ="submit" />
        </form>
    )
};
export default EditPokemon;