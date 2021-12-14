import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Hero from "../../Hero.js/Hero";
import valk from "../Images/apexvalk.jpg";
import valkMobile from "../Images/valkmobile.jpg";
import { Helmet } from "react-helmet";
import SliderBody from "./SliderBody";
import {useState, useEffect} from "react"
import ".././RankBoost/RankBoost.css";


import ProdMenu from "../../ProdMenu/ProdMenu";
const KillBoost = () => {

  const [windowInnerWidth, setwindowInnerWidth] = useState(window.innerWidth);

  const reportWindowSize = () => {
    setwindowInnerWidth(window.innerWidth);
  };
  window.addEventListener("resize", reportWindowSize);

  const [valkImg, setvalkImg] = useState(valk);

  useEffect(() => {
    if (windowInnerWidth >= 1279) {
      setvalkImg(valk);
    } else {
      setvalkImg(valkMobile);
    }
  }, [windowInnerWidth]);

  return (
    <div>
      <Helmet>
        <title>Boostify | Apex Legends Kills Boosting</title>
        <meta
          name="description"
          content="Our top quality pub stompers will get you to any number of kills you desire in Apex Legends in a short time. You can choose any legend to boost kills for in apex legends: bloodhound, bangalore, lifeline, pathfinder, wraith, gibraltar, caustic, mirage, crypto, revenant, octane, wattson, horizon, valkyrie, rampart, loba. 1000 kills boost any legend in a short time."
        />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <Navbar></Navbar>
      <Hero
        img={valkImg}
        title="Apex Legends Kills boost"
        subtitle="Strength in numbers"
      ></Hero>
      <ProdMenu border="#6d00af"></ProdMenu>
      <SliderBody></SliderBody>
      <Footer footerColor="#6D00AE"></Footer>
    </div>
  );
};

export default KillBoost;
