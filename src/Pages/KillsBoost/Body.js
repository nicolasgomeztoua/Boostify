import React, { useState } from "react";
import styled from "styled-components";
import KillBoost from "../Images/killsboost.png";
import {
  StepOneTitle,
  F1,
  StepOneSLidersWrap,
  InitialRank,
  Slider,
  InputTyped,
} from "../RankBoost/RankedBoostProductElements";
const Outline = styled.div`
  border: 4px solid #6d00ae;
  border-radius: 50px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SliderDiv = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SliderContainer = styled(StepOneSLidersWrap)`
  display: flex;
  justify-content: center;
`;
const Body = () => {
  const [kills, setKills] = useState();
  return (
    <Outline>
      <SliderDiv>
        <StepOneTitle>
          <F1></F1> Select Ranked Points to Boost
        </StepOneTitle>
        <SliderContainer>
          <InitialRank>
            <h2 id="current-rank">Set your current RP</h2>
            <img src={KillBoost} className="rank" alt="rank"></img>
            <Slider
              value={kills}
              onChange={(e) => setKills(e.target.value)}
            ></Slider>
            <InputTyped
              fontSize="80px"
              height="100px"
              width="300px"
              value={kills}
              onChange={(e) => setKills(e.target.value)}
            ></InputTyped>
            <p style={{ textAlign: "center", fontSize: "45.23px" }}>RP</p>
          </InitialRank>
        </SliderContainer>
      </SliderDiv>
    </Outline>
  );
};

export default Body;
