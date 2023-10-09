import "./MyRecipes.css"
import Header from "../../components/header/Header.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Recipe from "../../components/recipe/Recipe.jsx";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";

export default function MyRecipes() {
    const [userRecipes, setUserRecipes] = useState([])
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = jwtDecode(token);
            setUser(decodedToken);
            console.log(user)
        }
    }, []);

    useEffect(() => {
        const fetchRecipes = async () => {
            const token = localStorage.getItem("token");
            const { data } = await axios.get(`http://localhost:3000/recipes/${user.id}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            setUserRecipes(data);
        }
        fetchRecipes();
    }, [user])

    return (
        <>
            <Header />
            <div className="recipes">
                {userRecipes.map(recipe => (
                    <div key={recipe.id}>
                        <Recipe recipe={recipe} />
                    </div>
                ))}
                <Sidebar />
            </div>
        </>
    )
}
