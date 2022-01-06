import styled from "styled-components";
import IndiPack from "./IndiPack";
import { Discount } from "@styled-icons/boxicons-solid/Discount";
import LegendsSelector from "../LegendsSelector/LegendsSelector";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { IndiPackDetails } from "./texts/texts";
import { Link } from "react-router-dom";
const PackageContainer = styled.div`
  min-width: 100vw;
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const Button = styled.button`
  font-size: 0.9rem;
  background-color: ${(props) =>
    props.background ? props.background : "#fff"};
  border: ${(props) => (props.border ? props.border : "solid #056e84 1px")};
  border-radius: 25px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.7);
  color: ${(props) => (props.color ? props.color : "#056e84")};
  cursor: pointer;
  font-weight: bold;
  height: auto;
  line-height: 2.5em;
  margin: 0;
  margin-top: 10px;
  min-height: 30px;
  max-width: 300px;

  padding: 0.55rem 2rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: middle;
  transition: all 0.3s ease 0s;
  &&:hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
`;
const NoThanksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const NoThanksTitle = styled.h2`
  border-bottom: 5px solid black;
  border-radius: 10px;
  padding-bottom:10px;
`;
const Specialpacks = () => {
  const [searchFieldLegends, setSearchFieldLegends] = useState("");
  const [checkedLegend, setLegend] = useState({ Wraith: true });

  return (
    <>
      <Navbar></Navbar>
      <PackageContainer>
        <div className="services" style={{ width: "90%", height: "auto" }}>
          <div
            className="content-typ content-1"
            style={{ borderRadius: "20px" }}
          >
            <Discount style={{ height: "100px", color: "black" }}></Discount>
            <h2>Buy any of these offers for a free 4k & 20 Bomb!</h2>
            <LegendsSelector
              setSearchFieldLegends={setSearchFieldLegends}
              setLegend={setLegend}
              searchFieldLegends={searchFieldLegends}
              checkedLegend={checkedLegend}
            ></LegendsSelector>
            {IndiPackDetails.map((texts, index) => {
              return (
                <IndiPack
                  title={texts.title}
                  checkedLegend={checkedLegend}
                  firstColor={texts.firstColor}
                  secondColor={texts.secondColor}
                  key={texts.title}
                  index={index}
                ></IndiPack>
              );
            })}
            <NoThanksContainer>
              <NoThanksTitle>Dont like any of these offers?</NoThanksTitle>
              <Link to="/rank-boosting">
                <Button background="#000" color="#fff">
                  Checkout Rank Boost
                </Button>
              </Link>
            </NoThanksContainer>
          </div>
        </div>
      </PackageContainer>
    </>
  );
};

export default Specialpacks;
