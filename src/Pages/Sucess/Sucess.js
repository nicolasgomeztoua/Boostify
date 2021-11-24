import React from "react";
import "./Sucess.css";

const Sucess = ({ history }) => {
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
            <a href="https://www.boostify.es/">
              <button className="example_d" onClick={clearCart}>
                {" "}
                Clear cart and go home
              </button>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Sucess;
