import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "../Dropdown/Dropdown";
import { ExtraCheckBox } from "../Pages/RankBoost/RankedBoostProductElements";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [loggedIn, setLoggedIn] = useState("");

  const [privateData, setPrivateData] = useState("");
  const [displayCheckBox, setDisplayCheckBox] = useState("none");

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      setLoggedIn(false);
    }
    if (localStorage.getItem("authToken")) {
      setLoggedIn(true);
    }
    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get(
          "https://secret-cove-64633.herokuapp.com/api/private",
          config
        );
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
      }
    };

    fetchPrivateData();
  }, [history, loggedIn]);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
    setLoggedIn(false);
  };

  useEffect(() => {
    if (loggedIn === true) {
      setDisplayCheckBox("flex");
    }
    if (loggedIn === false) {
      setDisplayCheckBox("none");
    }
    console.log(loggedIn);
  }, [loggedIn]);
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Boostify
          <i class="fab fa-firstdraft" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/rank-boosting"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <Button />
        <ExtraCheckBox onChange={logoutHandler} display={displayCheckBox} />
      </nav>
    </>
  );
};

export default Navbar;
