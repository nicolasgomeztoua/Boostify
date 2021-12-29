
import styled from "styled-components";
import {
  BadgesSectionTitle,
  Searchbar,
  BadgesSelectionContainers,
  TextIconCheckBox,
  BadgeDesc,
} from "../Pages/AcheivementBadges/BadgesElements";
import { LegendsObj } from "../Pages/AcheivementBadges/BadgesObj";
import "../Pages/AcheivementBadges/Acheivementbadges.css";

const Legends = ({setSearchFieldLegends, setLegend, searchFieldLegends, checkedLegend}) => {



  const handleChangeLegends = (e) => {
    setLegend({
      [e.target.name]: e.target.checked,
    });
  };
  const LegendSelectionContainer = styled(BadgesSelectionContainers)`
    margin-bottom: 0;
    border: 1px solid #000;
  `;
  const LegendsTitle = styled(BadgesSectionTitle)`
    border-color: #000;
    color: black;
  `;
  const Search = styled(Searchbar)`
    border: 2px solid #000;
    outline-color: #000;
  `;

  return (
    <>
      <LegendsTitle>Select a Legend</LegendsTitle>
      <Search
        onChange={(e) => setSearchFieldLegends(e.target.value)}
        value={searchFieldLegends}
        autoFocus
      ></Search>
      <LegendSelectionContainer>
        {LegendsObj.filter((items) => {
          return items.name
            .toLowerCase()
            .includes(searchFieldLegends.toLowerCase());
        }).map((Items, index) => {
          return (
            <TextIconCheckBox backgroundColor="white" key={index}>
              <img
                src={Items.icon}
                alt="badge"
                style={{
                  marginRight: "auto",
                  marginLeft: "auto",
                  height: "210px",
                  width: "210px",
                  color: "white",
                }}
              ></img>
              <BadgeDesc>{Items.name}</BadgeDesc>
              <label
                className="check"
                key={Items.key}
                style={{ backgroundColor: "black" }}
              >
                <input
                  type="checkbox"
                  className="inputCheck"
                  name={Items.name}
                  checked={checkedLegend[Items.name]}
                  onChange={handleChangeLegends}
                />

                <div className="box" style={{ backgroundColor: "black" }}></div>
              </label>
            </TextIconCheckBox>
          );
        })}
      </LegendSelectionContainer>
    </>
  );
};
export default Legends;
