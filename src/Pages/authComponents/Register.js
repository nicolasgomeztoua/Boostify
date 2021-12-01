import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import auth from "./AuthComponents.module.css";
import Navbar from "../../Navbar/Navbar";
import { Helmet } from "react-helmet";

const Register = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/login" + window.location.search);
    }
  }, [history]);

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "https://secret-cove-64633.herokuapp.com/api/auth/register",
        { username, email, password },
        config
      );
      localStorage.setItem("authToken", data.token);
      history.push("/login" + window.location.search);
    } catch (err) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Boostify | Cheap Apex Legends Boosting Services Playstation
        </title>
        <meta
          name="description"
          content="Get boosted by our professionals for a cheap price and achieve higher Ranks in Apex Legends. Our professionals consist of only All-seasons Apex predators. Veterans. 24/7 Live Chat Support. Cheap. Get boosted by the best. Same Day Deliver Ranked boost and Badge boost."
        />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <Navbar></Navbar>
      <div className={auth["register-screen"]}>
        <form onSubmit={registerHandler} className={auth["register-screen__form"]}>
          <h3 className={auth["register-screen__title"]}>Register</h3>
          {error && <span className={auth["error-message"]}>{error}</span>}
          <div className={auth["form-group"]}>
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              required
              id="name"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={auth["form-group"]}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              required
              id="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={auth["form-group"]}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              required
              id="password"
              autoComplete="true"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={auth["form-group"]}>
            <label htmlFor="confirmpassword">Confirm Password:</label>
            <input
              type="password"
              required
              id="confirmpassword"
              autoComplete="true"
              placeholder="Confirm password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className={`${auth["form-btn"]} ${auth["form-btn-primary"]}`}>
            Register
          </button>

          <span className={auth["register-screen__subtext"]}>
            Already have an account? <Link to={"/login"+ window.location.search}>Login</Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default Register;
