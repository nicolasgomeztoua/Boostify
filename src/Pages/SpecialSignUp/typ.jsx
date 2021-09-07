import Step from "./step";
import { ThankYou, firstStep, secondStep, finalStep } from "./texts/textfile";
import { CheckmarkCircle } from "@styled-icons/evaicons-solid/CheckmarkCircle";
import Navbar from "../../Navbar/Navbar";
import { TypContainer } from "./signupstyles";
import { useRef } from "react";
import { Offer } from "@styled-icons/boxicons-solid/Offer";
import { Timer } from "@styled-icons/boxicons-regular/Timer";

const Typ = ({ history }) => {
  const containerRef = useRef(TypContainer);
  const pusher = () => {
    history.push("./rank-boosting");
  };
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
        <Step
          textfile={secondStep}
          containerRef={containerRef}
          icon={Offer}
          step={3}
        ></Step>
        <Step
          textfile={finalStep}
          containerRef={containerRef}
          icon={Timer}
          step={4}
          pusher={pusher}
        ></Step>
      </TypContainer>
    </>
  );
};

export default Typ;
