import styled from "styled-components";
import Plat from "../Pages/Images/Ranked_Tier4_Platinum.png";
import PackDesc from "./PackDesc";


const IndiPack = ({ title, checkedLegend, firstColor, secondColor }) => {
  const SpecialPackTitle = styled.h1`
    font-size: calc(3vw + 20px);
    background: rgb(151, 228, 226);
    padding: 5px;
    background: ${(props) =>
      `linear-gradient(90deg, #${firstColor} 0%, #${secondColor} 80%)`};
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    flex-direction: row;
    margin-top: 100px;
  `;

  return (
    <ProductWrapper>
      <SpecialPackTitle firstColor="4de6e0" secondColor="9c64ca">
        {title}
      </SpecialPackTitle>

      
      <SelectionGrid>
        <PackDesc initialImg={Plat} checkedLegend={checkedLegend} firstColor={firstColor}/>
        <PackDesc initialImg={Plat} checkedLegend={checkedLegend} firstColor={firstColor}/>
        <PackDesc initialImg={Plat} checkedLegend={checkedLegend} firstColor={firstColor}/>
        <PackDesc initialImg={Plat} checkedLegend={checkedLegend} firstColor={firstColor}/>
      </SelectionGrid>
    </ProductWrapper>
  );
};

export default IndiPack;
