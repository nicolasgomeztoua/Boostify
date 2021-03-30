import React, { useState, useEffect } from "react";
import { useCart, useDispatchCart } from "./CartHandler";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "./Cart.css";
import { CircleWithCross } from "@styled-icons/entypo/CircleWithCross";
import { loadStripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import {
  StepTwoWarningContainer,
  StepTwoWarning,
} from "../RankBoost/RankedBoostProductElements";

const stripePromise = loadStripe(
  "pk_test_51IXQz3BkRphF41hC4Pd2kBMQzZhdpc3xUdpWnsIVYNbqH7HZ2T7or2e6CYwwRbfsrHL9eo5gXg1k13vuUfvCI6UE00z6Mj1bLk"
);
const Cart = () => {
  const [message, setMessage] = useState("");
  const [titles, setTitles] = useState([""]);
  const [prices, setPrices] = useState([0]);
  const [selectedPopBadges, setSelectedPopBadges] = useState([""]);
  const [selectedExtraBadges, setSelectedExtraBadges] = useState([""]);
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [selectedLegend, setSelectedLegend] = useState("");
  const [PSNemail, setPSN] = useState(null);
  const [PSNPass, setPSNPass] = useState(null);
  const [region, setRegion] = useState(null);
  const [dateCreated, setDatecreated] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [invalid, setInvalid] = useState("flex");
  const [extrasArr, setExtrasArr] = useState([]);
  const items = useCart();
  const dispatch = useDispatchCart();
  const totalPrice = items.reduce(
    (total, b) => Number(total) + Number(b.price),
    0
  );

  useEffect(() => {
    setTitles(
      items.map((element) => {
        return element.title;
      })
    );
    setPrices(
      items.map((element) => {
        return element.price;
      })
    );
    setSelectedPopBadges(
      items.flatMap((element) => {
        return element.selectedPopBadges;
      })
    );
    setSelectedExtraBadges(
      items.flatMap((element) => {
        return element.selectedExtraBadges;
      })
    );
    setFirstValue(
      items.flatMap((element) => {
        return element.firstValue;
      })
    );
    setSecondValue(
      items.flatMap((element) => {
        return element.secondValue;
      })
    );
    setSelectedLegend(
      items.flatMap((element) => {
        return element.selectedLegend;
      })
    );
    setDatecreated(new Date());
    setExtrasArr(
      items.flatMap((element) => {
        return element.extrasArr;
      })
    );
  }, [items]);

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };
  items.forEach((element, index) => {
    if (element.price === 0) {
      handleRemove(index);
    }
  });

  const potentialOrder = (e) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = axios.post(
        "https://secret-cove-64633.herokuapp.com/api/auth/createorder",
        {
          titles,
          prices,
          selectedLegend,
          selectedPopBadges,
          selectedExtraBadges,
          firstValue,
          secondValue,
          PSNemail,
          PSNPass,
          region,
          dateCreated,
          extrasArr,
        },
        config
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = async (event) => {
    potentialOrder();
    const stripe = await stripePromise;

    const response = await fetch(
      "https://secret-cove-64633.herokuapp.com/create-checkout-session",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [{ id: "xl-tshirt" }, { price: totalPrice * 100 }],
        }),
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
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout

    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const options = [
    { value: "EU", label: "EU" },
    { value: "NA", label: "NA" },
    { value: "Asia", label: "Asia" },
  ];
  const customStyles = {
    option: (provided, state) => ({
      ...provided,

      color: "black",
      padding: 20,
    }),
  };
  useEffect(() => {
    if (region === null || PSNPass === null || PSNemail === null) {
      setDisabled(true);
      setInvalid("flex");
    } else {
      setDisabled(false);
      setInvalid("none");
    }
  }, [region, PSNPass, PSNemail]);

  if (totalPrice === 0) {
    return (
      <>
        <Navbar></Navbar>
        <div className="failed-cart-contaier">
          <h1 id="empty">Your cart is empty </h1>
          <Link to="./">
            {" "}
            <button className="example_d"> Go Back Home?</button>
          </Link>
        </div>
        <Footer footerColor="turquoise"></Footer>
      </>
    );
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="window">
          <div className="order-info">
            <div className="order-info-content">
              <h2 id="order-summary">Order Summary</h2>
              <div className="line"></div>{" "}
              {items.map((element, index) => {
                return (
                  <table className="order-table">
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src={element.icon}
                            className="full-width"
                            alt="product"
                          ></img>
                        </td>
                        <td>
                          <br /> <span className="thin">{element.title}</span>
                          <br />
                          {element.selectedLegend ||
                            `From ${element.firstValue}`}
                          <br />
                          <span className="thin small">
                            {element.selectedPopBadges ||
                              `To: ${element.secondValue}`}
                            <br />
                            <span className="thin small">
                              {element.selectedExtraBadges}
                            </span>

                            <span className="thin small">
                              {`${element.filteredExtras}`}
                            </span>
                            <br />
                            <CircleWithCross
                              style={{
                                height: "20px",
                                color: "#e43043",
                                zIndex: "10",
                              }}
                              onClick={handleRemove}
                            ></CircleWithCross>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="price">${element.price}</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                );
              })}
              <div className="line"></div>
              <div className="total">
                <span style={{ float: "left" }}>TOTAL</span>
                <span style={{ float: "right", textAlign: "right" }}>
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
          <div className="credit-info">
            <div className="credit-info-content">
              <h2 id="order-summary">PSN Email</h2>
              <input
                type="email"
                class="input-field"
                onChange={(e) => setPSN(e.target.value)}
              ></input>
              <h2 id="order-summary">PSN Password</h2>
              <input
                type="password"
                class="input-field"
                onChange={(e) => setPSNPass(e.target.value)}
              ></input>
              <h2 id="order-summary">Select Your region</h2>
              <Select
                options={options}
                styles={customStyles}
                onChange={(value) => setRegion(value.label)}
              />
              <StepTwoWarningContainer
                style={{
                  display: invalid,

                  marginTop: "10px",
                }}
              >
                Fill out all fields
                <StepTwoWarning>
                  <i
                    className="fa fa-times"
                    onClick={() => setInvalid("none")}
                    style={{ padding: "20px" }}
                  ></i>
                </StepTwoWarning>
              </StepTwoWarningContainer>
              <StepTwoWarningContainer
                id="secondWarning"
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  padding: "5px",
                }}
              >
                If 2-step-auth is enabled on your PSN account make sure to
                disable to it to prevent access problems
              </StepTwoWarningContainer>

              <button
                type="button"
                id="checkout-button"
                role="link"
                onClick={handleClick}
                className="pay-btn"
                disabled={disabled}
              >
                Checkout with Stripe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer footerColor="turquoise"></Footer>
    </>
  );
};

export default Cart;
