import styled from "styled-components";
import Plat from "../Pages/Images/Ranked_Tier4_Platinum.png";
import Masters from "../Pages/Images/Ranked_Tier6_Master.png";
import PackDesc from "./PackDesc";
import { useState } from "react";
import Select from "react-select";
import { Legends } from "./texts/texts";
const IndiPack = ({ title }) => {
  const [main, setMain] = useState();

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      width: 270,
      backgroundColor: "black",
      color: "white",
      zIndex: '-10',
      border: ".1px solid white"
    }),
    control: () => ({
      width: 270,
      backgroundColor: "black",
      color: "white",
      display: "flex",
      
    }),
  };

  const SpecialPackTitle = styled.h1`
    font-size: calc(3vw + 20px);
    background: rgb(151, 228, 226);
    padding: 5px;
    background: ${(props) =>
      `linear-gradient(90deg, #${props.firstColor} 0%, #${props.secondColor} 80%)`};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-bottom: 3px solid #97e4e2;
    border-radius: 20px;
  `;
  const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const SelectionGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    flex-direction: row;
    margin-top: 100px;
  `;

  return (
    <ProductWrapper>
      <SpecialPackTitle firstColor="4de6e0" secondColor="9c64ca">
        {title}
      </SpecialPackTitle>
      <Select
        styles={customStyles}
        options={Legends}
        onChage={(value) => setMain(value.value)}
      />
      <SelectionGrid>
        <PackDesc initialImg={Plat} finalImg={Masters} />
        <PackDesc initialImg={Plat} finalImg={Masters} />
        <PackDesc initialImg={Plat} finalImg={Masters} />
      </SelectionGrid>
    </ProductWrapper>
  );
};

export default IndiPack;
