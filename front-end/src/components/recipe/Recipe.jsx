import { Link } from "react-router-dom";
import "./recipe.css";

export default function Recipe({ recipe }) {
    const PF = "http://localhost:3000/images/" + recipe.image_path;
    return (
        <div className="recipe">
            <img
                className="recipeImg"
                src={PF}
                alt=""
            />
            <div className="recipeInfo">
                <span className="recipeTitle">
                    <Link to={`/recipe/${recipe.id}`} className="link">
                        {recipe.title}
                    </Link>
                </span>
                <hr />
            </div>
            <p className="recipeDesc">
                {recipe.description}
            </p>
        </div>
    );
}






















