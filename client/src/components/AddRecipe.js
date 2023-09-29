import React, { useState } from "react";

const AddPokemon = ({addRecipe}) => {
    const [addedRecipe, setAddedRecipe] = useState ({})
    const handleChange = (e) => {
        const inputName = e.target.name;
        const value = e.target.value;
        setAddedRecipe({...addedRecipe, [inputName]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addRecipe(addedRecipe);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title"> Title:</label>
            <input type="text" name="title" onChange={handleChange} required/> <br></br>
            <label htmlFor="number"> Descirption:</label>
            <input type="text" name="description" onChange={handleChange} required/> <br></br>
            <input type ="submit" />
        </form>
    )

}


export default AddPokemon;