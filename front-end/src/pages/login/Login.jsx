import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/users/login", {
                email: email,
                password: password,
            });

            const token = response.data.token;

            localStorage.setItem("token", token);
            window.location.replace("/");

        } catch (error) {
            console.error("Login failed", error);
        }

    };

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    className="loginInput"
                    type="text"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    className="loginInput"
                    type="password"
                    placeholder="Enter your password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="loginButton" type="submit">Login</button>
            </form>
            <Link className="link" to="/register">
                <button className="loginRegisterButton">Register</button>
            </Link>
        </div>
    );
}
