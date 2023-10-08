import "./topBar.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/logo.png";

export default function TopBar() {
    const user = true;
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    const handleSearchClick = () => {
        setSearchVisible(!searchVisible);
    };

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };
    return (
        <div className="top">
            <div className="topLeft">
                <Link className="link" to="/">
                    <img className="topImg" src={logo} alt="" />
                </Link>
            </div>
            <div className="topCenter">
                <i
                    className="topSearchIcon fas fa-search"
                    onClick={handleSearchClick}
                ></i>
                {searchVisible && (
                    <input
                        type="text"
                        className="searchInput"
                        placeholder="Search..."
                        value={searchInput}
                        onChange={handleInputChange}
                    />
                )}
            </div>

            <div className="topRight">
                <ul className="topList">
                    {user ? (
                        <>
                            <li className="topListItem">
                                <Link className="link" to="/myRecipes">
                                    MY RECIPES
                                </Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/addPage">
                                    ADD RECIPE
                                </Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/logout">
                                    LOGOUT
                                </Link>
                            </li>
                        </>
                    ) : (
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

