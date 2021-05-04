import "./PostOrder.css";
import OrderConfirmation from "../Pages/Images/orderconfirmation.png";
import { Filter1 } from "@styled-icons/material-twotone/Filter1";
import { Filter2 } from "@styled-icons/material-twotone/Filter2";
import styled from "styled-components";
import { walzyEditThis } from "../Pages/Home/stats";
console.log(OrderConfirmation);
const PostOrder = () => {
  const Step1 = styled(Filter1)`
    height: 50px;
    color: #40e0d0;
    margin: 10px;
  `;
  const Step2 = styled(Filter2)`
    height: 50px;
    color: #40e0d0;
    margin: 10px;
  `;

  return (
    <>
      {" "}
      <h1 className="whoAreWe-title">What happens after you order?</h1>
      <div>
        <div className="post-order-container">
          <div className="post-order-card">
            <div className="post-order-card-image"></div>
            <div className="post-order-card-text">
              <span className="date">
                <Step1></Step1>
              </span>
              <h2>
                Check Your <br></br>PSN/XBOX email!
              </h2>
              <p style={{ height: "50px" }}>
                {" "}
                Check your order details thouroughly in the confirmation email
                sent to your PSN email. <br />
                *Please check spam due to automated sending*
              </p>
            </div>
            <div className="post-order-card-stats">
              <div className="stat"></div>
              <div className="stat border">
                <div className="value">{walzyEditThis.ordersCompleted}</div>
                <div className="type">Emails Sent</div>
              </div>
              <div className="stat"></div>
            </div>
          </div>
        </div>
        <div className="post-order-container">
          <div className="post-order-card">
            <div className="post-order-card-image" id="step2"></div>
            <div className="post-order-card-text">
              <span className="date">
                <Step2></Step2>
              </span>
              <h2>Check Your Profile Page</h2>
              <p>
                Track the progress of orders you've made with Boostify. Live
                Booster chat coming soon! <br></br>
                *Profile page only available to boostify users*
              </p>
            </div>
            <div className="post-order-card-stats">
              <div className="stat"></div>
              <div className="stat border">
                <div className="value">{walzyEditThis.ordersQueued}</div>
                <div className="type">current orders</div>
              </div>
              <div className="stat"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostOrder;
