import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const MissedOrder = ({ userId }) => {
  const [orderId, setOrderId] = useState();
  const [message, setMessage] = useState(
    "Checking for new orders. Reloading..."
  );
  const success = () =>
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const failure = () => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const submitOrderId = async () => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const fetch = await axios.post(
        "https://secret-cove-64633.herokuapp.com/api/auth/missing-order",
        { orderId, userId },
        config
      );
      success();

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } catch (error) {
      failure();
    }
  };

  return (
    <div>
      {" "}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      ;
      <div className="missing-order-container">
        <h2
          className="whoAreWe-title profile-title"
          style={{
            borderRadius: "50px",
            color: "white",
            marginBottom: "10px",
          }}
        >
          Don't see your order? / Made an order without an account?{" "}
        </h2>
        <p id="missing-order-desc" className="desc">
          Simply input the order ID that you received in your order confirmation
          email in your PSN/XBOX's account email.
        </p>

        <div className="webflow-style-input" style={{ width: "80vw" }}>
          <input
            className="missing-order-input"
            type="email"
            placeholder="Order ID"
            onChange={(e) => setOrderId(e.target.value)}
          ></input>
          <button
            type="submit"
            className="missing-order-btn"
            onClick={submitOrderId}
          >
            <i class="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MissedOrder;
