import React, { useEffect } from "react";
import "./Sucess.css";
import "../RankBoost/RankBoost.css";
import { Link } from "react-router-dom";
import findGetParameter from "../../utils/getParameter";
import TagManager from "react-gtm-module";
const jwt = require("jsonwebtoken");

const Sucess = ({ history }) => {
  const items = JSON.parse(localStorage.getItem("cart"));
  const paypal = findGetParameter("paypal");
 const totalPrice = items.reduce(
          (total, b) => Number(total) + Number(b.price),
          0
        );
  useEffect(() => {
    if(paypal){
    return
    }
    try {
      const token = findGetParameter("hash");
      if (token) {
        jwt.verify(token, "hashSecret");
       

        const tagManagerArgs = {
          dataLayer: {
            event: "Purchase",
            PurchaseAmount: totalPrice,
          },
        };
        TagManager.dataLayer(tagManagerArgs);
        
      } else {
        throw "no token";
      }
    } catch (err) {
      history.push("/" + window.location.search);
    }
  }, []);

  const clearCart = () => {
    localStorage.removeItem("cart");
  };
  return (
    <>
      <div className="success-container">
        <div className="sucess-card">
          <div
            style={{
              borderRadius: "200px",
              height: "200px",
              width: "200px",
              background: "#F8FAF5",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <i className="checkmark">✓</i>
          </div>
          <h1 className="success-title">Success</h1>
          <p className="sucess-subtitle">
            We received your purchase request;
            <br /> we'll be in touch shortly!
            <br />{" "}
            <Link to="/">
              <button className="example_d" onClick={clearCart}>
                {" "}
                Clear cart and go home
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Sucess;
