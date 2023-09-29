import React, {useState} from 'react';
import UpdateRecipe from "../components/UpdateRecipe"

const RecipeDetails = ({recipe, updateRecipe, deleteRecipe}) => {
    const [toggleUpdate, settoggleUpdate] = useState(false);
    const toggleUpdateForm = () => {
        settoggleUpdate(!toggleUpdate);
    };
    const handleClick = () => {
        deleteRecipe(recipe._id);
    }
    return (  
        <div className='recipe-details'>
            <h2>Title: {recipe.title}</h2>
            <p>Description: {recipe.description}</p>
            <button onClick={toggleUpdateForm}>Update</button>
            <button onClick={handleClick}>Delete</button>

            {toggleUpdate && (
                <UpdateRecipe recipe={recipe} updateRecipe={updateRecipe}/>
            )}  
        </div>
    )
}


export default RecipeDetails;