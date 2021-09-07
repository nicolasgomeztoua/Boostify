
import Step from "./step"
import { ThankYou, firstStep, secondStep, finalStep } from "./texts/textfile"
import {CheckmarkCircle} from "@styled-icons/evaicons-solid/CheckmarkCircle"
import Navbar from "../../Navbar/Navbar"
import { TypContainer } from "./signupstyles"
import { useRef } from "react"
import {Offer} from "@styled-icons/boxicons-solid/Offer"
import {Timer} from "@styled-icons/boxicons-regular/Timer"


const Typ = () => {
  const containerRef = useRef(TypContainer)
    return (      
      <>
    <Navbar></Navbar>
      <TypContainer ref={containerRef}> 
        <Step textfile={ThankYou} containerRef={containerRef} icon={CheckmarkCircle}></Step>
        <Step textfile={firstStep} containerRef={containerRef} icon={Offer}></Step>
        <Step textfile={secondStep} containerRef={containerRef} icon={Offer}></Step>
        <Step textfile={finalStep} containerRef={containerRef} icon={Timer}></Step>
      </TypContainer>
  
      </>
    )
}

export default Typ
