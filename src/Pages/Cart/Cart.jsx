import React from "react";
import { useCart, useDispatchCart } from "./CartHandler";
import Navbar from "../../Navbar/Navbar";
import { SquaredCross } from "@styled-icons/entypo/SquaredCross";
import "./Cart.css";

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
                <img
                  className="image"
                  src={entries.icon || entries.secondRankImg}
                  alt=""
                />
              </div>

              <div className="description">
                <span id="title">{entries.title || entries.Rtitle}</span>
                <span>
                  {entries.selectedLegend || `From: ${entries.firstValue}`}
                </span>
                <span>
                  {`  ${entries.selectedPopBadges}` ||
                    `To: ${entries.secondValue}`}
                </span>
                <span>{`${entries.selectedExtraBadges}`}</span>
              </div>

              <div className="total-price">
                ${entries.price || entries.Rprice}
              </div>
            </div>
          );
        })}

        <div className="checkout-btn-total">
          <p id="Total">Total:</p>{" "}
          <span className="total-price" id="totalPrice">
            {" "}
            $ {totalPrice}
          </span>
        </div>
      </div>
    </>
  );
};
export default Cart;
