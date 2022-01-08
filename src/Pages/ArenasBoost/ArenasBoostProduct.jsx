import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import masters from "../Images/ArenaMaster.png";
import diamond from "../Images/ArenaDiamond.png";
import plat from "../Images/ArenaPlat.png";
import gold from "../Images/ArenaGold.png";
import silver from "../Images/ArenaSilver.png";
import bronze from "../Images/ArenaBronze.png";
import placementImg from "../Images/Placement.png"

import { useDispatchCart } from "../Cart/CartHandler";
import styled from "styled-components";

import { Filter1 } from "@styled-icons/material/Filter1";
import { Filter2 } from "@styled-icons/material/Filter2";
import { Filter3 } from "@styled-icons/material/Filter3";
/* import { Filter4 } from "@styled-icons/material/Filter4"; */
import { People } from "@styled-icons/ionicons-outline/People";
import { LiveTv } from "@styled-icons/material-twotone/LiveTv";
import { Speed } from "@styled-icons/material-twotone/Speed";
import { EyeSlash } from "@styled-icons/bootstrap/EyeSlash";
/* import { CreativeCommonsZero } from "@styled-icons/fa-brands/CreativeCommonsZero"; */
 const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  margin: 0 auto;
  width: auto;
  height: 100%;
  margin-bottom: 50px;
  margin-top: 50px;
  border: 10px solid #f25a59;
  border-radius: 100px;
  @media (max-width: 1030px) {
    grid-template-columns: 0fr 1fr 0fr;
    margin-right: 0;
    margin-left: 0;
    width: 97vw;
    height: 0%;
  }
`;
 const ProductWrap = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto;
  background-color: #fdfef9;
  height: auto;
  width:91.5vw;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  @media (max-width: 1381px) {
    padding: 5px;
  }

  
`;

 const StepOneTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #111;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 45.23px;
  font-weight: 700;
  line-height: 48px;

  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 415px) {
    height: auto;
    margin-top: 100px;
    margin-bottom: 50px;
    max-width: 90vw;
    font-size: 31.23px;
  }
`;

/*  const F0 = styled(CreativeCommonsZero)`
  height: 125px;
  color: #f25a59;
  margin-right: 15px;
  @media (max-width: 410px) {
    margin-right: 0px;
    margin-left: 15px;
  }
`; */

 const F1 = styled(Filter1)`
  height: 75px;
  color: #f25a59;
  margin-right: 15px;
  @media (max-width: 410px) {
    margin-right: 0px;
    margin-left: 15px;
  }
`;

 const Step2Container = styled.div`
  display: grid;

  grid-template-rows: 1fr;
  @media (max-width: 810px) {
    height: auto;

    justify-content: flex-start;
  }
`;
 const StepOneSLidersWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 810px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 1600px;
  }
`;
 const PlacementWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: max-content;
`;
 const F2 = styled(Filter2)`
  height: 75px;
  color: #f25a59;
  margin-right: 15px;
  @media (max-width: 410px) {
    margin-right: 0px;
    margin-left: 15px;
  }
`;
 const InitialRank = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;

  height: auto;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  @media (max-width: 810px) {
    width: 100%;
    margin-bottom: 50px;
    max-width: 80vw;
    justify-self: center;
    margin-right: 0px;
  }
`;
 const DesiredRankBoost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
  height: auto;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  @media (max-width: 810px) {
    width: 100%;
    margin-bottom: 50px;
    max-width: 80vw;
    justify-self: center;
    margin-left: 0px;
  }
`;
 const Slider = styled.input.attrs({
  type: "range",
  name: "points",

  min: "0",

})`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  height: 20px;
  width: 300px;
  border-radius: 40px;
  background: ${(props) =>
    `linear-gradient(to right, #F25A59 0%, #F25A59 ${
      props.value / props.divider
    }%, #fff ${props.value / props.divider}%, #fff 100%);`};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 1);

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    background-image: radial-gradient(circle, #f25a59 40%, #f25a59 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 1);
  }

  ::-moz-range-thumb {
    width: 24px;
    height: 24px;
    -moz-appearance: none;
    background-image: radial-gradient(circle, #f7f7fc 40%, #f25a59 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 400px) {
    width: 150px;
  }
`;

 const InputTyped = styled.input.attrs({
  maxLength: "20",
})`
  display: block;
  margin: 10px auto;
  color: black;
  height: ${(props) => props.height};
  border: 4px solid #f25a59;
  border-radius: 50px;
  text-align: center;
  margin-top: 30px;
  width: ${(props) => props.width};
  background: repeating-linear-gradient(
      90deg,
      white 0,
      white 1ch,
      transparent 0,
      transparent 1ch
    )
    0 100% / 5ch 2px no-repeat;
  font-size: ${(props) => props.fontSize};
  letter-spacing: 0ch;

  &:focus {
    outline: none;
    color: grey;
  }
  @media (max-width: 376px) {
    width: 200px;
    font-size: 50px;
  }
`;
 const F3 = styled(Filter3)`
  height: 75px;
  color: #f25a59;
  margin-right: 15px;
  @media (max-width: 410px) {
    margin-right: 0px;
    margin-left: 15px;
  }
`;

 const StepTwoWarningContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  height: 50px;
  align-items: center;
  background-color: #f44336; /* Red */
  color: white;
`;
 const StepTwoWarning = styled.span`
  margin-left: auto;

  color: white;
  font-weight: bold;

  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: black;
  }
`;

 const ExtrasContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;
 const ExtrasTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  height: auto;
  color: #111;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 45.23px;
  font-weight: 700;
  line-height: 48px;
  margin: 0 0 50px;

  text-align: center;
  text-transform: uppercase;
  @media (max-width: 415px) {
    height: auto;
    margin-top: 0px;
    margin-bottom: 50px;
    max-width: 90vw;
    font-size: 31.23px;
  }
`;
 const ExtrasOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: flex-end;
  height: 320px;
  @media (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 420px) {
    transform: scale(0.8);

    width: 95vw;
  }
`;

 const ExtraIconButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 120px;
`;
 const ExtraCheckBox = styled.input.attrs({
  type: "checkbox",
  name: "extra",
})`
  position: relative;
  height: 40px;
  width: 80px;
  display: ${(props) => (props.display ? props.display : "flex")};
  -webkit-appearance: none;
  background: #c6c6c6;
  outline: none;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;

  &:checked {
    background: ${(props) => (props.color ? props.color : "#F25A59")};
  }
  &:before {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    border: 0.2px solid #c6c6c6;
    border-radius: 20px;
    bottom: 0px;
    left: 0px;
    transform: scale(1.1);
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }
  &:checked:before {
    left: 40px;
  }
`;

 const IconDescWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
`;
 const IconOffline = styled(EyeSlash)`
  height: 55px;
  width: 80px;
  color: #f25a59;
  margin-bottom: 3px;
`;
 const IconDuo = styled(People)`
  height: 55px;
  width: 80px;
  color: #f25a59;
  margin-bottom: 3px;
`;
 const IconStream = styled(LiveTv)`
  height: 55px;
  width: 80px;
  color: #f25a59;
  margin-bottom: 3px;
`;

 const IconSpeed = styled(Speed)`
  height: 55px;
  width: 80px;
  color: #f25a59;
  margin-bottom: 3px;
`;
 const TotalContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  align-items: flex-start;
  height: auto;
`;
 const TotalTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #111;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 45.23px;
  font-weight: 700;
  line-height: 48px;
  margin: 0 0 24px;
  height: auto;

  text-align: center;
  text-transform: uppercase;
  @media (max-width: 420px) {
    font-size: 22.99px;
    height: 150px;
    width: 89vw;
    margin-top: 50px;
    margin-bottom: 0;
  }
`;
/*  const F4 = styled(Filter4)`
  height: 75px;
  color: #f25a59;
  margin-right: 15px;
  @media (max-width: 410px) {
    margin-right: 0px;
    margin-left: 15px;
  }
`; */
 const TotalMoneyCard = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.2fr 0.2fr 0.2fr 0.4fr;
  box-sizing: border-box;
  color: rgb(44, 44, 44);

  justify-self: center;
  align-self: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 360px;
  @media (max-width: 415px) {
    width: 90vw;
    margin-top: 0px;
    justify-self: flex-start;
  }
`;

 const TotalMoneyHeader = styled.h1`
  background-color: rgb(236, 236, 236);
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-top-color: rgb(221, 221, 221);
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 11px 8px -10px inset,
    rgba(0, 0, 0, 0.05) 0px -11px 8px -10px inset;
  box-sizing: border-box;
  color: rgb(44, 44, 44);
  font-family: "Saira", "Helvetica Neue", Arial, sans-serif;
  font-size: 17.6px;
  font-weight: 300;
  line-height: 26.4px;

  overflow-wrap: break-word;
  padding-bottom: 20px;
  padding-top: 20px;
  text-align: center;
  @media (max-width: 415px) {
    width: 80vw;
  }
`;
 const DiscountContainer = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  align-self: flex-start;
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
  &:before {
    margin-right: 0.5em;
    content: "";
    flex: 1;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  &:after {
    content: "";
    flex: 1;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

 const TotalMoney = styled.div`
  align-items: flex-start;
  box-sizing: border-box;
  color: rgb(44, 44, 44);
  display: flex;
  flex-wrap: wrap;
  font-family: "Saira", "Helvetica Neue", Arial, sans-serif;
  font-size: 17.6px;
  font-weight: 300;
  justify-content: center;
  line-height: 26.4px;
  overflow-wrap: break-word;
  text-align: center;
`;



const RankBoostProduct = () => {
  const [firstTier, setFirstTier] = useState("I");
  const [firstRankImg, setFirstRankImg] = useState("");
  const [firstValue, setFirstValue] = useState(1000);
  const [secondValue, setSecondValue] = useState(2000);
  const [secondRankImg, setSecondRankImg] = useState("");
  const [secondTier, setSecondTier] = useState("");

  const [invalid, setInvalid] = useState("none");
  /* const [validPromo, setValidPromo] = useState(false); */
  const [activeDuo, setActiveDuo] = useState(false);
  const [activeStream, setActiveStream] = useState(false);
  const [activePriority, setPriority] = useState(false);
  const [activeOffline, setActiveOffline] = useState(false);
  const [filteredExtras, setFilteredExtras] = useState("");
  const [placementMatches, setPlacementMatches] = useState(0)
  const [totalMoney, setTotalMoney] = useState(0);
  const [moneyMultiplierDuo, setMoneyMultiplierDuo] = useState(0);
  const [moneyMultiplierStream, setMoneyMultiplierStream] = useState(0);
  const [moneyMultiplierPriority, setMoneyMultipliePriority] = useState(0);
  const [completionTime, setCompletionTime] = useState("");
  const [placement, setPlacement] = useState(false);
  /*   const [disabled, setDisabled] = useState(false);
  const [opacity, setOpacity] = useState(1); */
  /* const [disabledDiscount, setDisabledDiscount] = useState("none"); */

  /*   const handleDiscount = () => {
    if (
      validPromo === "endofsplit30" &&
      secondValue >= 10000 &&
      secondValue <= 10138
    ) {
      setTotalMoney(totalMoney - totalMoney * 0.3);
      setDisabled(true);
      setOpacity(0.4);
    }
  }; */
const PlacementPrice = 5;
  useEffect(() => {
    if (totalMoney < 0) {
      setTotalMoney(0);
    }
  }, [totalMoney]);
  useEffect(() => {
    if (isNaN(firstValue)) {
      setFirstValue(4800);
    }
  }, [firstValue]);
  useEffect(() => {
    if (isNaN(secondValue)) {
      setSecondValue(10000);
    }
  }, [secondValue]);

  useEffect(() => {
    if (activeDuo) {
      setMoneyMultiplierDuo(totalMoney * 0.75);
    }
    if (!activeDuo) {
      setMoneyMultiplierDuo(0);
    }
  }, [activeDuo, totalMoney]);

  useEffect(() => {
    if (activePriority) {
      setMoneyMultipliePriority(totalMoney * 0.25);
    }
    if (!activePriority) {
      setMoneyMultipliePriority(0);
    }
  }, [activePriority, totalMoney]);

  useEffect(() => {
    if (activeStream) {
      setMoneyMultiplierStream(totalMoney * 0.15);
    }
    if (!activeStream) {
      setMoneyMultiplierStream(0);
    }
  }, [activeStream, totalMoney]);

  useEffect(() => {
    if (Number(secondValue) < Number(firstValue)) {
      setInvalid("flex");
    } else {
      setInvalid("none");
    }
  }, [secondValue, firstValue]);

  /*   useEffect(() => {
    if (secondValue > 10137 || secondValue < 10000) {
      setDisabledDiscount("flex");
    } else {
      setDisabledDiscount("none");
    }
  }, [secondValue]); */

  useEffect(() => {
    if (firstValue > 19900) {
      setFirstValue(19900);
    }
  }, [firstValue]);

  useEffect(() => {
    if (secondValue > 20000) {
      setSecondValue(20000);
    }
  }, [secondValue]);

  useEffect(() => {
    if (firstValue >= 0) {
      setFirstTier("IV");
      setFirstRankImg(bronze);
    }
    if (firstValue >= 400) {
      setFirstTier("III");
    }
    if (firstValue >= 800) {
      setFirstTier("II");
    }
    if (firstValue >= 1200) {
      setFirstTier("I");
    }
    if (firstValue >= 1600) {
      setFirstTier("IV");
      setFirstRankImg(silver);
    }
    if (firstValue >= 2000) {
      setFirstTier("III");
    }
    if (firstValue >= 2400) {
      setFirstTier("II");
    }
    if (firstValue >= 2800) {
      setFirstTier("I");
    }
    if (firstValue >= 3200) {
      setFirstTier("IV");
      setFirstRankImg(gold);
    }
    if (firstValue >= 3600) {
      setFirstTier("III");
    }
    if (firstValue >= 4000) {
      setFirstTier("II");
    }
    if (firstValue >= 4400) {
      setFirstTier("I");
    }
    if (firstValue >= 4800) {
      setFirstTier("IV");
      setFirstRankImg(plat);
    }
    if (firstValue >= 5200) {
      setFirstTier("III");
    }
    if (firstValue >= 5600) {
      setFirstTier("II");
    }
    if (firstValue >= 6000) {
      setFirstTier("I");
    }
    if (firstValue >= 6400) {
      setFirstTier("IV");
      setFirstRankImg(diamond);
    }
    if (firstValue >= 6800) {
      setFirstTier("III");
    }
    if (firstValue >= 7200) {
      setFirstTier("II");
    }
    if (firstValue >= 7600) {
      setFirstTier("I");
    }
    if (firstValue >= 8000) {
      setFirstTier("GOAT");
      setFirstRankImg(masters);
    }
  }, [firstValue]);

  useEffect(() => {
    if (secondValue >= 0) {
      setSecondTier("IV");
      setSecondRankImg(bronze);
    }
    if (secondValue > 400) {
      setSecondTier("III");
    }
    if (secondValue > 800) {
      setSecondTier("II");
    }
    if (secondValue > 1200) {
      setSecondTier("I");
    }
    if (secondValue >= 1600) {
      setSecondTier("IV");
      setSecondRankImg(silver);
    }

    if (secondValue > 2000) {
      setSecondTier("III");
    }
    if (secondValue > 2400) {
      setSecondTier("II");
    }
    if (secondValue > 2800) {
      setSecondTier("I");
    }

    if (secondValue >= 3200) {
      setSecondTier("IV");
      setSecondRankImg(gold);
    }
    if (secondValue > 3600) {
      setSecondTier("III");
    }
    if (secondValue > 4000) {
      setSecondTier("II");
    }

    if (secondValue > 4400) {
      setSecondTier("I");
    }

    if (secondValue >= 4800) {
      setSecondTier("IV");
      setSecondRankImg(plat);
    }

    if (secondValue > 5200) {
      setSecondTier("III");
    }
    if (secondValue > 5600) {
      setSecondTier("II");
    }
    if (secondValue > 6000) {
      setSecondTier("I");
    }

    if (secondValue > 6400) {
      setSecondTier("IV");
      setSecondRankImg(diamond);
    }

    if (secondValue >= 6800) {
      setSecondTier("III");
    }
    if (secondValue > 7200) {
      setSecondTier("II");
    }

    if (secondValue > 7600) {
      setSecondTier("I");
    }

    if (secondValue > 8000) {
      setSecondTier("GOAT");
      setSecondRankImg(masters);
    }
  }, [secondValue, firstValue]);

  useEffect(() => {
    if (firstValue) {
      setCompletionTime("48 hours");
    }
    if (secondValue > 11000) {
      setCompletionTime("15 days");
    }
  }, [firstValue, secondValue]);

  const dispatch = useDispatchCart();
  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };

  let extrasArr = {
    DuoQueue: activeDuo,
    Offline: activeOffline,
    Stream: activeStream,
    priority: activePriority,
  };
  useEffect(() => {
    let extrasArr2 = {
      DuoQueue: activeDuo,
      Offline: activeOffline,
      Stream: activeStream,
      priority: activePriority,
    };
    setFilteredExtras(
      Object.fromEntries(
        Object.entries(extrasArr2).filter(([key, value]) => value === true)
      )
    );
  }, [activeDuo, activeOffline, activePriority, activeStream]);
  useEffect(() => {
    if(placementMatches>0){
      setTotalMoney(placementMatches * PlacementPrice)
      return
    }
    const prices = [
      0.1,
      1.25,
      1.25,
      1.25,
      1.25,
      1.25,
      1.25,
      1.25,
      1.25,
      1.25,
      1.25,
      1.25,
      1.25,
      1.25,
      1.25,
      1.25,
      1.25,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      3.75,
      3.75,
      3.75,
      3.75,
      3.75,
      3.75,
      3.75,
      3.75,
      3.75,
      3.75,
      3.75,
      3.75,
      3.75,
      3.75,
      3.75,
      3.75,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      7.5,
      7.5,
      7.5,
      7.5,
      10,
      10,
      10,
      10,
      12.5,
      12.5,
      12.5,
      12.5,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
    ];
    const rankMultiplierArray = prices.splice(
      (firstValue / 100) | 0,
      secondValue / 100 - ((firstValue / 100) | 0)
    );
    const summedMultiplier = rankMultiplierArray.reduce((a, b) => a + b, 0);
    setTotalMoney(summedMultiplier);
  }, [firstValue, secondValue, placementMatches]);

  return (
    <>
      <ProductContainer>
        <div></div>
        <ProductWrap>
          <Step2Container>
            <StepOneTitle>
              Need your placement matches? <br /> Flip the switch.
            </StepOneTitle>

            <IconDescWrapper
              style={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div></div>
              <ExtraCheckBox onClick={() => { setPlacement(!placement); setFirstValue(0); setSecondValue(0); setPlacementMatches(0)}} />
              <div></div>
              <p className="ExtraDesc"> Placement </p>
            </IconDescWrapper>

            {placement ? (
              <>
                <PlacementWrap>
                  <InitialRank>
                    <h2 id="current-rank">Set The Matches To Boost</h2>
                    <img src={placementImg} className="rank" alt="rank" style={{width:"auto", margin:"none"}}></img>
                    <Slider
                      value={placementMatches}
                      onChange={(e) => {setPlacementMatches(e.target.value);}}
                      max="10"
                      step="1"
                      divider="0.10"
                    ></Slider>
                    <InputTyped
                      fontSize="80px"
                      height="100px"
                      width="300px"
                      value={placementMatches}
                      onChange={(e) => setPlacementMatches(e.target.value)}
                    ></InputTyped>
                    <p style={{ textAlign: "center", fontSize: "45.23px" }}>
                      Matches
                    </p>
                  </InitialRank>
                </PlacementWrap>
              </>
            ) : (
              <>
                <StepOneTitle>
                  <F1></F1> Select Ranked Points to Boost
                </StepOneTitle>
                <StepOneSLidersWrap>
                  <InitialRank>
                    <h2 id="current-rank">Set your current AP</h2>
                    <img src={firstRankImg} className="rank" alt="rank"></img>

                    <p id="tier">{firstTier}</p>
                    <Slider
                      value={firstValue}
                      onChange={(e) => setFirstValue(e.target.value)}
                      step="25"
                      max="19900"
                      divider="200"
                    ></Slider>
                    <InputTyped
                      fontSize="80px"
                      height="100px"
                      width="300px"
                      value={firstValue}
                      onChange={(e) => setFirstValue(e.target.value)}
                    ></InputTyped>
                    <p style={{ textAlign: "center", fontSize: "45.23px" }}>
                      AP
                    </p>
                  </InitialRank>
                  <DesiredRankBoost>
                    {" "}
                    <h2 id="current-rank">Set your desired AP</h2>
                    <img src={secondRankImg} className="rank" alt="rank"></img>
                    <p id="tier">{secondTier}</p>
                    <Slider
                      value={secondValue}
                      onChange={(e) => setSecondValue(e.target.value)}
                      step="25"
                      max="20000"
                      divider="200"
                    ></Slider>
                    <InputTyped
                      fontSize="80px"
                      height="100px"
                      width="300px"
                      value={secondValue}
                      onChange={(e) => {
                        setSecondValue(e.target.value);
                      }}
                    ></InputTyped>
                    <p style={{ textAlign: "center", fontSize: "45.23px" }}>
                      AP
                    </p>
                  </DesiredRankBoost>
                </StepOneSLidersWrap>
              </>
            )}
            <StepTwoWarningContainer style={{ display: invalid }}>
              Desired Rank May Not be Less Than Current Rank
              <StepTwoWarning>
                <i
                  className="fa fa-times"
                  onClick={() => setInvalid("none")}
                ></i>
              </StepTwoWarning>
            </StepTwoWarningContainer>
          </Step2Container>

          <ExtrasContainer>
            <ExtrasTitle>
              <F2></F2>
              Choose additional services
            </ExtrasTitle>
            <ExtrasOptions>
              <ExtraIconButtonWrap>
                <IconDescWrapper>
                  <IconOffline></IconOffline>
                  <ExtraCheckBox
                    onClick={() => setActiveOffline(!activeOffline)}
                  />
                  <p className="ExtraDesc">Appear offline</p>
                  <p className="ExtraDesc"> FREE</p>
                </IconDescWrapper>
              </ExtraIconButtonWrap>
              <ExtraIconButtonWrap>
                <IconDescWrapper>
                  <IconDuo></IconDuo>
                  <ExtraCheckBox onClick={() => setActiveDuo(!activeDuo)} />
                  <p className="ExtraDesc">Duo-Queue </p>
                  <p className="ExtraDesc"> +75%</p>
                </IconDescWrapper>
              </ExtraIconButtonWrap>
              <ExtraIconButtonWrap>
                <IconDescWrapper>
                  <IconStream />
                  <ExtraCheckBox
                    onClick={() => setActiveStream(!activeStream)}
                  />
                  <p className="ExtraDesc">On Stream</p>
                  <p className="ExtraDesc"> +15%</p>
                </IconDescWrapper>
              </ExtraIconButtonWrap>
              <ExtraIconButtonWrap>
                <IconDescWrapper>
                  <IconSpeed></IconSpeed>
                  <ExtraCheckBox onClick={() => setPriority(!activePriority)} />
                  <p className="ExtraDesc">Boost-Priority</p>
                  <p className="ExtraDesc"> +25%</p>
                </IconDescWrapper>
              </ExtraIconButtonWrap>
            </ExtrasOptions>
          </ExtrasContainer>

          <TotalContainer>
            {" "}
            <TotalTitle>
              <F3></F3> Check your total
            </TotalTitle>
            <TotalMoneyCard>
              <TotalMoneyHeader>
                Your Order: <br></br>{" "}
                <span>
                  {firstValue}RP to {secondValue}RP
                </span>
                <br></br> Average Completion Time: <br></br>
                <span>{completionTime}</span>
              </TotalMoneyHeader>
              <DiscountContainer>PromoCode</DiscountContainer>
              <InputTyped
                style={{ marginTop: "0px" }}
                fontSize="20px"
                height="50px"
                width="250px"
                onChange={(e) => {
                  // setValidPromo(e.target.value.toLowerCase());
                }}
              ></InputTyped>
              <div className="button_cont" align="center">
                <button
                  className="example_c"
                  disabled={true}
                  style={{ opacity: 0.4 }}
                >
                  {" "}
                  Apply
                </button>
              </div>
              <DiscountContainer>Total</DiscountContainer>
              <TotalMoney>
                <span className="totalMoney">
                  {(
                    totalMoney +
                    moneyMultiplierDuo +
                    moneyMultiplierStream +
                    moneyMultiplierPriority
                  ).toFixed(2)}
                  {"$"}
                </span>
              </TotalMoney>

              <div className="button_cont" align="center">
                <Link to={"./cart"+ window.location.search}>
                  <button
                    onClick={() =>
                      addToCart({
                        title: "Arenas Boost",
                        price: Number(
                          totalMoney +
                            moneyMultiplierDuo +
                            moneyMultiplierStream +
                            moneyMultiplierPriority
                        ).toFixed(2),
                        firstValue: firstValue,
                        secondValue: secondValue,
                        icon: secondRankImg,
                        extrasArr: Object.entries(extrasArr),
                        filteredExtras: Object.keys(filteredExtras),
                        placementMatches: placementMatches

                      })
                    }
                    className="example_d"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    Add to cart
                  </button>
                </Link>
              </div>
            </TotalMoneyCard>
          </TotalContainer>
        </ProductWrap>

        <div></div>
      </ProductContainer>
    </>
  );
};

 export default RankBoostProduct;
