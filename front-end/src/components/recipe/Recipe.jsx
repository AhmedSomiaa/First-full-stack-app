import { Link } from "react-router-dom";
import "./recipe.css";

export default function Recipe({ img }) {
    return (
        <div className="recipe">
            <img
                className="recipeImg"
                src={img}
                alt=""
            />
            <div className="recipeInfo">
                <span className="recipeTitle">
                    <Link to="/recipe/abc" className="link">
                        Lorem ipsum dolor sit amet
                    </Link>
                </span>
                <hr />
                <span className="recipeDate">1 hour ago</span>
            </div>
            <p className="recipeDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
        </div>
    );
}






















