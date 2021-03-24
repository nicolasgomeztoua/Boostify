import { useState, useEffect } from "react";
import axios from "axios";
import "./AuthComponents.css";
import Navbar from "../../Navbar/Navbar";
const Checkout = ({ history }) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/");
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
        setError("Please LogIn to checkout");
      }
    };

    fetchPrivateData();
  }, [history]);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  };

  return error ? (
    <>
      <Navbar></Navbar>
      <span className="error-message">{error}</span>
    </>
  ) : (
    <>
      <Navbar></Navbar>
    </>
  );
};

export default Checkout;
