import { useState, useEffect } from "react";
import axios from "axios";
import "./profile.css";
import Navbar from "../../Navbar/Navbar";
import userImg from "../Images/defaultuser.jpg";
import backgroundImage from "../Images/profilebackground.jpg";
import ProfileCard from "./ProfileCard";
import OrderTracker from "./OrderTracker";
import Footer from "../../Footer/Footer";
import { Helmet } from "react-helmet";
import "../Home/Home.css"
import "./Input.css";
import MissedOrder from "./MissedOrder";
const Profile = ({ history }) => {
  const [username, setUsername] = useState("");
  const [orders, setOrders] = useState([]);
  const [userId, setUserId] = useState([]);

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
        setUserId(data.user_id);
        setOrders(data.orders);
      } catch (error) {
        localStorage.removeItem("authToken");
        
        history.push("/login");
      }
    };

    fetchPrivateDate();
  }, [history]);
  console.log(userId);
  return (
    <div>
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
      <div className="profile-page-container">
        <div className="profile-background-grid">
          <div
            className="profile-bloodhound"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          <ProfileCard
            userImg={userImg}
            username={username}
            orderObj={orders}
          ></ProfileCard>
          <div
            className="profile-bloodhound"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          <div
            className="profile-bloodhound profile-mobile-bloodhound"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
        </div>
        <OrderTracker orderImg={userImg} orderObj={orders}></OrderTracker>
        <MissedOrder userId={userId}></MissedOrder>
      </div>
      {/*          */}
      <Footer footerColor="turquoise"></Footer>
    </div>
  );
};

export default Profile;
