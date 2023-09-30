import React, { useState } from "react";
import axios from "axios";

const SignIn = ({ changeView, setAuthenticated }) => {
  const [signForm, setSignForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignForm({ ...signForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", signForm);
      if (response.status === 200) {
        localStorage.setItem("authenticated", "true");
        setAuthenticated("true");
        changeView("recipes");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Handle 401 status (authentication error) and display error message
        setError("Invalid email or password");
      } else {
        // Handle other error cases here
        setError("An error occurred while processing your request");
      }
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h2>Sign In</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="username">Email:</label>
        <input
          type="email"
          name="email"
          value={signForm.email}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={signForm.password}
          onChange={handleChange}
          required
        />
        <br />
        </div>
        <div className="form-group">
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
