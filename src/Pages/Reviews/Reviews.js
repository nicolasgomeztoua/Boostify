import React from "react";
import Navbar from "../../Navbar/Navbar";
import TrustBox from "./TrustBox";
import InstagramEmbed from "react-instagram-embed";
const Reviews = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="">
        <InstagramEmbed
          clientAccessToken="<appId>|<clientToken>"
          url="https://instagr.am/p/Zw9o4/"
          maxWidth={375}
          hideCaption={false}
          containerTagName="div"
          injectScript
          protocol=""
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div>
    </>
  );
};

export default Reviews;
