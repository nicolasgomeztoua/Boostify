import { useState, useEffect } from "react";
import axios from "axios";
import "./profile.css";
import Navbar from "../../Navbar/Navbar";
import userImg from "../Images/defaultuser.jpg";
import backgroundImage from "../Images/profilebackground.jpg";
import ProfileCard from "./ProfileCard";
import OrderTracker from "./OrderTracker";
import Footer from "../../Footer/Footer";
const Profile = ({ history }) => {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchPrivateDate = async () => {
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
        setUsername(data.username);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
        history.push("/login");
      }
    };

    fetchPrivateDate();
  }, [history]);
  return (
    <div>
      <Navbar></Navbar>
      <div className="profile-page-container">
        <h2
          className="whoAreWe-title profile-title"
          style={{ borderRadius: "50px", color: "white" }}
        >
          {" "}
          Welcome To Your Profile Page {username}{" "}
        </h2>{" "}
        <div className="profile-background-grid">
          <div
            className="profile-bloodhound"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            a
          </div>
          <ProfileCard userImg={userImg} username={username}></ProfileCard>
          <div
            className="profile-bloodhound"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          <div
            className="profile-bloodhound profile-mobile-bloodhound"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
        </div>
        <OrderTracker></OrderTracker>
      </div>

      <Footer footerColor="turquoise"></Footer>
    </div>
  );
};

export default Profile;
