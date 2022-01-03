import Step from "./step";
import { ThankYou, firstStep, finalStep } from "./texts/textfile";
import { CheckmarkCircle } from "@styled-icons/evaicons-solid/CheckmarkCircle";
import Navbar from "../../Navbar/Navbar";
import { TypContainer } from "./signupstyles";
import { useRef } from "react";
import { Offer } from "@styled-icons/boxicons-solid/Offer";
import { Timer } from "@styled-icons/boxicons-regular/Timer";
import { useEffect, useState } from "react";
import axios from "axios";
const Typ = ({ history }) => {
  const containerRef = useRef(TypContainer);
  const pusher = () => {
    history.push("./SpecialPacks" + window.location.search);
  };
  const [d, sd] = useState(0);
  const [h, sh] = useState(0);
  const [m, sm] = useState(0);
  const [s, ss] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      try {
        const { data } = await axios.get(
          "https://secret-cove-64633.herokuapp.com/api/private",
          config
        );
        sessionStorage.setItem("dateCreated", data.dateCreated);
      } catch (error) {
        localStorage.removeItem("authToken");
        history.push("/login" + window.location.search);
      }
    };

    fetchData();
  }, [history]);

  useEffect(() => {
    setInterval(() => {
      const countDate = new Date(sessionStorage.getItem("dateCreated"));
      const now = new Date().getTime();
      let gap = countDate - now;
      let second = 1000;
      let minute = second * 60;
      let hour = minute * 60;
      let day = hour * 24;

      sd(Math.floor(gap / day));
      sh(Math.floor((gap % day) / hour));
      sm(Math.floor((gap % hour) / minute));
      ss(Math.floor((gap % minute) / second));
    }, 1000);
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <TypContainer ref={containerRef}>
        <Step
          textfile={ThankYou}
          containerRef={containerRef}
          icon={CheckmarkCircle}
          step={1}
        ></Step>
        <Step
          textfile={firstStep}
          containerRef={containerRef}
          icon={Offer}
          step={2}
        ></Step>
{/*         <Step
          textfile={secondStep}
          containerRef={containerRef}
          icon={Offer}
          step={3}
        ></Step> */}
        <Step
          textfile={finalStep}
          containerRef={containerRef}
          icon={Timer}
          step={4}
          pusher={pusher}
          d={isNaN(d) ? "Expired" : d + ":"}
          h={isNaN(d) ? "" : h + ":"}
          m={isNaN(d) ? "" : m + ":"}
          s={isNaN(d) ? "" : s}
        ></Step>
      </TypContainer>
    </>
  );
};

export default Typ;
