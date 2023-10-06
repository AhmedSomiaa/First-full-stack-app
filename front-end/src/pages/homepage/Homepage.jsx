import { useLocation } from "react-router";
import Header from "../../components/header/Header.jsx";
import Recipes from "../../components/recipes/Recipes.jsx"
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import "./homepage.css";

export default function Homepage() {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <Header />
            <div className="home">
                <Recipes />
                <Sidebar />
            </div>
        </>
    );
}
