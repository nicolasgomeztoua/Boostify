import styled from "styled-components";
import IndiPack from "./IndiPack";
import { Discount } from "@styled-icons/boxicons-solid/Discount";
import LegendsSelector from "../LegendsSelector/LegendsSelector";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { IndiPackDetails } from "./texts/texts";
const Specialpacks = () => {
  const [searchFieldLegends, setSearchFieldLegends] = useState("");
  const [checkedLegend, setLegend] = useState("");

  const PackageContainer = styled.div`
    min-width: 100vw;
    min-height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  let plat = IndiPackDetails.Plat;
  let diamond = IndiPackDetails.Diamond;
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
            <IndiPack
              title={plat.title}
              checkedLegend={checkedLegend}
              firstColor={plat.firstColor}
              secondColor={plat.secondColor}
            ></IndiPack>
            <IndiPack
              title={diamond.title}
              checkedLegend={checkedLegend}
              firstColor={diamond.firstColor}
              secondColor={diamond.secondColor}
            ></IndiPack>
          </div>
        </div>
      </PackageContainer>
    </>
  );
};

export default Specialpacks;
