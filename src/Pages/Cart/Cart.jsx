import React from "react";
import { useCart, useDispatchCart } from "./CartHandler";
import Navbar from "../../Navbar/Navbar";
import { SquaredCross } from "@styled-icons/entypo/SquaredCross";
import "./Cart.css";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51IXQz3BkRphF41hC4Pd2kBMQzZhdpc3xUdpWnsIVYNbqH7HZ2T7or2e6CYwwRbfsrHL9eo5gXg1k13vuUfvCI6UE00z6Mj1bLk"
);

const Cart = () => {
  const items = useCart();
  const dispatch = useDispatchCart();
  const totalPrice = items.reduce(
    (total, b) => Number(total) + Number(b.price),
    0
  );

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const response = await fetch(
      "https://secret-cove-64633.herokuapp.com/create-checkout-session",
      {
        method: "POST",
      }
    );

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="shopping-cart">
        <div className="title">Shopping Bag</div>
        {items.map((entries, index) => {
          return (
            <div className="item">
              <div className="buttons">
                <SquaredCross
                  onClick={() => handleRemove(index)}
                  style={{
                    display: "flex",
                    width: "30px",
                    height: "50px",
                    color: "turquoise",
                    cursor: "pointer",
                    alignSelf: "center",
                  }}
                ></SquaredCross>
              </div>

              <div>
                <img className="image" src={entries.icon} alt="" />
              </div>

              <div className="description">
                <span id="title">{entries.title}</span>
                <span>
                  {entries.selectedLegend || `From: ${entries.firstValue}`}
                </span>
                <span>
                  {entries.selectedPopBadges || `To: ${entries.secondValue}`}
                </span>
                <span>{entries.selectedExtraBadges}</span>
              </div>

              <div className="total-price">${entries.price}</div>
            </div>
          );
        })}

        <div className="checkout-btn-total">
          <p id="Total">Total:</p>{" "}
          <span className="total-price" id="totalPrice">
            {" "}
            $ {totalPrice}
          </span>
          <button
            type="button"
            id="checkout-button"
            role="link"
            onClick={handleClick}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};
export default Cart;
