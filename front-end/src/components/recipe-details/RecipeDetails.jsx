import { Link, useLocation } from "react-router-dom";
import "./recipeDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

export default function RecipeDetails() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [recipe, setRecipe] = useState({});
    const [user, setUser] = useState(null);
    const PF = "http://localhost:3000/images/";
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = jwtDecode(token);
            setUser(decodedToken);
        }
    }, []);

    useEffect(() => {
        const fetchRecipe = async () => {
            const { data } = await axios.get(`http://localhost:3000/recipes/recipe/${path}`)
            setRecipe(data);
            setTitle(data.title);
            setDescription(data.description);
        }
        fetchRecipe();
    }, [path])

    const handleDelete = async () => {
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`http://localhost:3000/recipes/${path}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            window.location.replace("/");
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdate = async () => {
        try {
            const token = localStorage.getItem("token");
            await axios.put(`http://localhost:3000/recipes/${path}`, {
                title,
                description,
            }, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            setUpdateMode(false)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="recipeDetails">
            <div className="recipeDetailsWrapper">
                {recipe.image_path && (
                    <img
                        className="recipeDetailsImg"
                        src={PF + recipe.image_path}
                        alt=""
                    />
                )}
                {updateMode ? (
                    <input
                        type="text"
                        value={title}
                        className="recipeDetailsTitleInput"
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                    />
                ) : (
                    <h1 className="recipeDetailsTitle">
                        {title}
                        {recipe.author === user?.username && (
                            <div className="recipeDetailsEdit">
                                <i className="recipeDetailsIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                                <i className="recipeDetailsIcon far fa-trash-alt" onClick={handleDelete}></i>
                            </div>
                        )}
                    </h1>)}
                <div className="recipeDetailsInfo">
                    <span>
                        <b className="recipeDetailsAuthor">
                            Author: {recipe.author}
                        </b>
                    </span>
                </div>
                {updateMode ? (
                    <textarea
                        className="recipeDetailsDescInput"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                ) : (
                    <p className="recipeDetailsDesc">
                        {description}
                    </p>)}
                {updateMode && (
                    <button className="recipeDetailsButton" onClick={handleUpdate}>
                        Update
                    </button>
                )}
            </div>
        </div>
    );
}
