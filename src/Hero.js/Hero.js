import React from "react";
import { Parallax } from "react-parallax";
const Hero = ({ img, title, subtitle }) => {
  return (
    <Parallax
      strength={-200}
      bgImage={img}
      bgImageAlt={title}
      bgImageStyle={{
        marginTop:"100px"
      }}
      
    >
      <div className="Services-Header">
        <h1 id="Rank-boost-title">{title}</h1>
        <h2 id="Rank-boost-subtitle"> {subtitle}</h2>
      </div>
    </Parallax>
  );
};

export default Hero;
