import { Link, useLocation } from "react-router-dom";
import "./recipeDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RecipeDetails() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        const fetchRecipe = async () => {
            const { data } = await axios.get("http://localhost:3000/recipes/2/" + path)
            setRecipe(data)
        }
        fetchRecipe();
    }, [path])
    return (
        <div className="recipeDetails">
            <div className="recipeDetailsWrapper">
                {recipe.image_path && (
                    <img
                        className="recipeDetailsImg"
                        src={recipe.image_path}
                        alt=""
                    />
                )}
                <h1 className="recipeDetailsTitle">
                    {recipe.title}
                    <div className="recipeDetailsEdit">
                        <i className="recipeDetailsIcon far fa-edit"></i>
                        <i className="recipeDetailsIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="recipeDetailsInfo">
                    <span>
                        <b className="recipeDetailsAuthor">
                            Author: {recipe.author}
                        </b>
                    </span>
                </div>
                <p className="recipeDetailsDesc">
                    {recipe.description}
                </p>
            </div>
        </div>
    );
}
