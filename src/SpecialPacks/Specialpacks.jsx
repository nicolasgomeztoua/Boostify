import styled from "styled-components";
import IndiPack from "./IndiPack";
import { Discount } from "@styled-icons/boxicons-solid/Discount";
const Specialpacks = () => {
  const PackageContainer = styled.div`
    min-width: 100vw;
    min-height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <PackageContainer>
      <div
        className="services"
        style={{ width: "90%", height: "auto"}}
      >
        <div className="content-typ content-1" style={{borderRadius: "20px" }}>
          <Discount style={{ height: "100px", color: "black" }}></Discount>
          <h2>Buy any of these offers for a free 4k & 20 Bomb!</h2>
          <IndiPack title="Plat To Masters!"></IndiPack>
        </div>
      </div>
    </PackageContainer>
  );
};

export default Specialpacks;
