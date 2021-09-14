import { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import "swiper/components/scrollbar/scrollbar.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CSS/Testimonials.css";
import { useHistory } from "react-router-dom";

const SubmitReview = () => {

  const history = useHistory()
  const notify = () => {
    toast.success("Your review has been submitted. Thanks!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    setTimeout(() => {
      history.go(0)
    }, 5000);

  }
  const [rating, setRating] = useState(0);
  const [name, setName] = useState();
  const [review, setReview] = useState("");
  const [main, setMain] = useState();

  const dateFormat = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  let dateFormated = new Date().getTime()
  let dateCreated = new Date(dateFormated).toLocaleDateString("en-UK", dateFormat);

  const reviewHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Access-Control-Allow-Origin":
          "https://secret-cove-64633.herokuapp.com/api/auth/reviews",
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post(
        "https://secret-cove-64633.herokuapp.com/api/auth/reviews",
        { name, review, rating, main, dateCreated },
        config
      );
    } catch (error) {
      console.error(error);
    }
  };

  const options = [
    { value: "Wraith" },
    { value: "Bloodhound" },
    { value: "Horizon" },
    { value: "Rampart" },
    { value: "Fuse" },
    { value: "Octane" },
    { value: "Wattson" },
    { value: "Caustic" },
    { value: "Gibraltar" },
    { value: "Loba" },
    { value: "Revenant" },
    { value: "Pathfinder" },
    { value: "Lifeline" },
    { value: "Crypto" },
    { value: "Mirage" },
    { value: "Valk" },
    { value: "Seer" },

  ];
  return (
    <>
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
      <div className="review-container">
        <form
          onSubmit={reviewHandler}
          className="login-screen__form"
          style={{
            backgroundColor: "#333",
            position: "relative",
            width: "100%",
            margin: "0 auto",
            padding: "60px 40px",
            overflow: "hidden",
            height: "530px",
          }}
        >
          <h3
            className="login-screen__title"
            style={{ color: "white" }}
          >
            Leave Us A Review!
          </h3>

          <div className="form-group">
            <label htmlFor="name" style={{ color: "white" }}>
              Name (optional)
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              tabIndex={1}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <div>
              <label
                className="select"
                for="slct"
                htmlFor="name"
                style={{ color: "white" }}
              >
                Select Your Main
                <select
                  id="slct"
                  required="required"
                  onChange={(e) => {
                    setMain(e.target.value);
                  }}
                >
                  <option
                    value=""
                    disabled="disabled"
                    selected="selected"
                  >
                    Select A Legend
                  </option>
                  {options.map((Items, index) => {
                    return (
                      <option value={Items.value}>
                        {Items.value}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="text" style={{ color: "white" }}>
              Your review:
            </label>
            <textarea
              type="text"
              required
              id="review"
              placeholder="..."
              tabIndex={1}
              onChange={(e) => {
                setReview(e.target.value);
              }}
            />
          </div>
          <div className="stars-rating">
            <Rating
              precision={0.5}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              value={rating}
              name="rating"
              onChange={(e, newValue) => {
                setRating(newValue);
              }}
            />
          </div>
          <button
            type="submit"
            className="form-btn form-btn-primary"
            onClick={notify}
            disabled={review.length === 0 ? true : false}
          >
            Submit Review
          </button>
        </form>
      </div>
    </>
  )
}

export default SubmitReview
