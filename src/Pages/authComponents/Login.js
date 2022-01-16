import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import auth from "./AuthComponents.module.css";
import Navbar from "../../Navbar/Navbar";
import { Helmet } from "react-helmet";

/* import {
  StepTwoWarningContainer,
  StepTwoWarning,
} from "../RankBoost/RankedBoostProductElements"; */
const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const [invalid, setInvalid] = useState("none");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.goBack()
    } else {
      // setInvalid("flex");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "https://secret-cove-64633.herokuapp.com/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.goBack()
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <>
      {" "}
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
      <div className={auth["login-screen"]}>
        <form onSubmit={loginHandler} className={auth["login-screen__form"]}>
          <h3 className={auth["login-screen__title"]}>Login</h3>
          {error && <span className={auth["error-message"]}>{error}</span>}
          <div className={auth["form-group"]}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              required
              id="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              tabIndex={1}
            />
          </div>
          <div className={auth["form-group"]}>
            <label htmlFor="password">
              Password:
              <Link
                to={"/forgotpassword"}
                className={auth["login-screen__forgotpassword"]}
              >
                Forgot Password?
              </Link>
            </label>
            <input
              type="password"
              required
              id="password"
              autoComplete="true"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              tabIndex={2}
            />
          </div>
          <button type="submit" className={`${auth["form-btn"]} ${auth["form-btn-primary"]}`} id="login">
            Login
          </button>

          <span className={auth["login-screen__subtext"]}>
            Don't have an account? <Link to={"/register"+ window.location.search}>Register</Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default Login;
