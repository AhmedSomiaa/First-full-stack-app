import Recipe from "../recipe/Recipe.jsx";
import "./recipes.css";

export default function Posts({ recipes }) {
    return (
        <div className="recipes">
            {recipes.map(recipe => (
                <div key={recipe.id}>
                    <Recipe recipe={recipe} />
                </div>
            ))}
        </div>
    );
}