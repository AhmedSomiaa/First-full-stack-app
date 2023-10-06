import Sidebar from "../../components/sidebar/Sidebar";
import RecipeDetails from "../../components/recipe-details/RecipeDetails.jsx";
import "./singleRecipe.css";

export default function Single() {
    return (
        <div className="single">
            <RecipeDetails />
            <Sidebar />
        </div>
    );
}