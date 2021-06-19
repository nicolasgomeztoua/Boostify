import featuredbooster from "../Images/featured.png";
import Img from "react-cool-img";
const featured = () => {
  return (
    <div className="featured-container">
      <h2
        className="WhatIsBoosting-title"
        style={{
          padding: "10px",
          borderRadius: "20px",
          color: "white",
          borderColor: "white",
          marginBottom: "0px",
        }}
      >
        {" "}
        Featured Booster
      </h2>
      <div className="featured-wrap">
        <Img
          alt="featured booster"
          src={featuredbooster}
          id="featuredbooster"
        ></Img>{" "}
        <p className="desc">
          {" "}
          One of our Day 1 booster. Top Tier Apex Legends veteran and OG. More
          than 5000 Hours of playtime with over 6000 total wins and 60k kills total. Apex Predator
          every season, every split. FPS experience for a decade. Trusted with
          Predator orders.
        </p>
      </div>
    </div>
  );
};

export default featured;
