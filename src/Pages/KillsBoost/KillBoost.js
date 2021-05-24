import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Hero from "../../Hero.js/Hero";
import valk from "../Images/apexvalk.webp";
const KillBoost = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero
        img={valk}
        title="Apex Legends Kills boost"
        subtitle="Strength in numbers"
      ></Hero>

      <Footer footerColor="#6D00AE"></Footer>
    </div>
  );
};

export default KillBoost;
