import styled from "styled-components";
import PackDesc from "./PackDesc";
import { PackDescDetails } from "./texts/texts";
import { useState, useEffect } from "react";
const SpecialPackTitle = styled.h1`
  font-size: calc(3vw + 25px);
  background: rgb(151, 228, 226);
  padding: 5px;
  background: ${(props) =>
    `linear-gradient(90deg, #${props.firstColor} 0%, #${props.secondColor} 80%)`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom: 3px solid #97e4e2;
  border-radius: 20px;
  margin-top: 10px;
`;
const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  flex-direction: row;
  margin-top: 10px;
  @media screen and (orientation: portrait) {
    grid-template-columns: 1fr;
  }
`;

const IndiPack = ({ title, checkedLegend, firstColor, secondColor, index }) => {
  const [packArray, setPackArray] = useState([]);
  useEffect(() => {
    if (index === 0) {
      setPackArray(PackDescDetails.slice(0, 4));
    }
    if (index === 1) {
      setPackArray(PackDescDetails.slice(4));
    }
  }, [index]);

  console.log(PackDescDetails);
  return (
    <ProductWrapper>
      <SpecialPackTitle firstColor={firstColor} secondColor={secondColor}>
        {title}
      </SpecialPackTitle>

      <SelectionGrid>
        {packArray.map((texts, index) => {
          return (
            <PackDesc
              initialImg={texts.img}
              checkedLegend={checkedLegend}
              firstColor={firstColor}
              key={texts.title}
              title={texts.title}
              price={texts.price}
              firstValue={texts.firstValue}
              secondValue={texts.secondValue}
              img={texts.img}
            />
          );
        })}
      </SelectionGrid>
    </ProductWrapper>
  );
};

export default IndiPack;
