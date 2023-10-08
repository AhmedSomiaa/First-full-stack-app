import { useEffect, useState } from "react";
import axios from "axios"
import Header from "../../components/header/Header.jsx";
import Recipes from "../../components/recipes/Recipes.jsx"
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import "./homepage.css";

export default function Homepage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const { data } = await axios.get("http://localhost:3000/recipes");
            setRecipes(data);
        }
        fetchRecipes();
    }, [])
    return (
        <>
            <Header />
            <div className="home">
                <Recipes recipes={recipes} />
                <Sidebar />
            </div>
        </>
    );
}
