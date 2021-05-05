import "./Input.css";

const MissingOrder = () => {
  return (
    <div className="missing-order-container">
      <h2
        className="whoAreWe-title profile-title"
        style={{ borderRadius: "50px", color: "white", marginBottom: "10px" }}
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
        ></input>
        <button type="submit" className="missing-order-btn">
          <i class="fas fa-long-arrow-alt-right"></i>
        </button>
      </div>
    </div>
  );
};

export default MissingOrder;
