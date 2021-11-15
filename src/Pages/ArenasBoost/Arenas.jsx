import React, { useState, useEffect } from "react";
import Ash from "../Images/Ash.jpg";
import AshMobile from "../Images/AshMobile.jpg";
import "../Home/Home.css"
import "./ArenasBoost.css";
import Footer from "../../Footer/Footer.jsx";
import ArenasBoostProduct from "./ArenasBoostProduct";
import ProdMenu from "../../ProdMenu/ProdMenu";
import Navbar from "../../Navbar/Navbar";
import { Helmet } from "react-helmet";
import PostOrder from "../../PostOrder/PostOrder";
import Hero from "../../Hero.js/Hero";
const ArenasBoost = () => {
  const [windowInnerWidth, setwindowInnerWidth] = useState(window.innerWidth);

  const reportWindowSize = () => {
    setwindowInnerWidth(window.innerWidth);
  };
  window.addEventListener("resize", reportWindowSize);

  const [AshImg, setAshImg] = useState(Ash);

  useEffect(() => {
    if (windowInnerWidth >= 1279) {
      setAshImg(Ash);
    } else {
      setAshImg(AshMobile);
    }
  }, [windowInnerWidth]);

  return (
    <>
      {" "}
      <Helmet>
        <title>Boostify | Apex Legends Arenas Boosting</title>
        <meta
          name="description"
          content="Our top quality apex Arenas boost services will get you to any Arenas you desire in Apex Legends Arenased League including: Apex Predator, Apex Master and Apex Diamond. Break new grounds with our Arenas boost services"
        />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <Navbar></Navbar>
      <Hero
        img={AshImg}
        title={"Apex Legends Arenas Boosting"}
        subtitle={"Pred boosting guaranteed."}
      />
      <ProdMenu></ProdMenu>
      <ArenasBoostProduct />
      <PostOrder></PostOrder>
      <Footer footerColor="#F25A59"></Footer>
    </>
  );
};

export default ArenasBoost;