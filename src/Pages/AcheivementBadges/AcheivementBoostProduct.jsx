import React, { useState, useEffect } from "react";
import {
  ExtrasTitle,
  ExtrasContainer,
  ExtrasOptions,
  ExtraIconButtonWrap,
  ExtraCheckBox,
  IconDuo,
  IconDescWrapper,
  IconStream,
  IconSpeed,
  IconOffline,
} from "../RankBoost/RankedBoostProductElements";
import { Link } from "react-router-dom";
import { extraBadgesObj, LegendsObj, PopularBadgesObj } from "./BadgesObj";
import "./Acheivementbadges.css";
import { useDispatchCart } from "../Cart/CartHandler";
import TwentyBomb from "../Images/20Bomb.png";
import styled from "styled-components";

 const BadgesTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #111;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 45.23px;
  font-weight: 700;
  line-height: 48px;
  padding: 0.5rem;
  margin: 3rem;
  text-align: center;
  text-transform: uppercase;
  border-bottom: solid 4px #e43403;
  border-radius: 100px;
  @media (max-width: 430px) {
    border-radius: 20px;
  }
`;
 const BadgesContainer = styled.div`
  display: flex;
  margin: auto;
  margin-bottom: 50px;
  justify-content: center;
  width: 80vw;
  border: 4px solid #e43403;
  border-radius: 50px;
  background-color: #252525;
  height: 2500px;
  @media (max-width: 420px) {
    width: 100vw;
  }
`;
 const BadgesWrap = styled.div`
  display: grid;
  grid-template-rows: 0.1fr 0.5fr 0.1fr 0.1fr 1fr 0.1fr 0.1fr 1fr;
  overflow: auto;
`;
 const BadgesSectionTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 50px;

  font-family: "Open Sans Condensed", sans-serif;
  font-size: 31.99px;
  font-weight: 700;
  line-height: 48px;
  color: white;
  border-bottom: solid 4px #e43403;
  border-top: solid 4px #e43403;
  border-radius: 10px;
  text-align: center;
  text-transform: uppercase;
  width: 80vw;
`;
 const BadgesSelectionContainers = styled.div`
  display: grid;
  width: 80vw;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: ${(props) => (props.height ? props.height : "500px")};
  overflow-y: auto;
  margin-bottom: 150px;
  @media (max-width: 1780px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 530px) {
    height: 520px;
  }
`;

 const TextIconCheckBox = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  padding: 0.5rem;
  margin: 0.5rem;
  flex-direction: column;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#3f3f3f"};
  border-radius: 100%;
  height: 320px;
  width: 320px;

  @media (max-width: 530px) {
    padding: 0.1rem;
    width: 250px;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
  }
  @media (max-width: 400px) {
    width: 200px;
  }
`;
 const BadgeDesc = styled.p`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 5px;

  font-family: "Open Sans Condensed", sans-serif;
  font-size: 22.62px;
  font-weight: 100;
  line-height: 28px;
  color: white;
  text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black,
    -0.07em -0.07em black, -0.07em 0.07em black, 0.07em -0.07em black,
    0.07em 0.07em black;
`;
 const InputTyped = styled.input.attrs({
  maxLength: "10",
})`
  display: block;
  margin: 10px auto;
  color: black;
  height: ${(props) => props.height};
  border: 4px solid #e43403;
  border-radius: 50px;
  padding-left: 30px;
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
 const TotalContainer = styled.div`
  display: grid;
  grid-template-rows: 0.1fr 1fr;
  align-items: flex-start;
  height: auto;
  margin-bottom: 100px;
  @media (max-width: 420px) {
    height: auto;
  }
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
  height: 40px;

  text-align: center;
  text-transform: uppercase;
  @media (max-width: 420px) {
    font-size: 25.99px;
    height: 150px;
    margin-top: 50px;
    margin-bottom: 0;
  }
`;

 const TotalMoneyCard = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.2fr 0.2fr 0.2fr 0.1fr;
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
    margin-top: 0px;
    width: 90vw;
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
  font-size: 21.55px;
  font-weight: 300;
  justify-content: center;
  line-height: 26.4px;
  overflow-wrap: break-word;
  text-align: center;
`;
 const Searchbar = styled.input.attrs({
  type: "text",
  placeholder: "search",
})`
  box-sizing: border-box;
  font-size: 2rem;
  padding: 1rem;
  display: block;
  margin: 2rem auto;
  width: 50vw;
  border-radius: 50px;
`;
 const totalBadgesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
 const StepTwoWarningContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  height: 50px;
  align-items: center;
  background-color: #f44336; /* Red */
  color: white;
  margin-bottom: 50px;
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
const AcheivementBoostProduct = () => {
  const [checkedPopBadges, setPopBadges] = useState({});
  const [checkedExtraBadges, setExtraBadges] = useState({});
  const [checkedLegend, setLegend] = useState({});
  const [searchField, setSearchField] = useState("");
  const [searchFieldLegends, setSearchFieldLegends] = useState("");
  const [acheivementTotalMoney, setAcheivementTotalMoney] = useState(0);
  const [valid, setValid] = useState("flex");
  const [totalExtraBadges, setTotalExtraBadges] = useState(0);
  const [totalPopBadges, setTotalPopBadges] = useState(0);
  const [moneyMultiplierDuo, setMoneyMultiplierDuo] = useState(0);
  const [moneyMultiplierStream, setMoneyMultiplierStream] = useState(0);
  const [moneyMultiplierPriority, setMoneyMultipliePriority] = useState(0);
  const [activeDuo, setActiveDuo] = useState(false);
  const [activeStream, setActiveStream] = useState(false);
  const [activePriority, setPriority] = useState(false);
  const [activeOffline, setActiveOffline] = useState(false);
  const [filteredExtras, setFilteredExtras] = useState("");
  const [disabledButtonText, setDisabledButton] = useState("");
  const [disabledState, setDisabledState] = useState("");
  let ReversedObj = [...LegendsObj].reverse()
  const dispatch = useDispatchCart();
  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };

  const handleChangePop = (e) => {
    setPopBadges(
      {
        ...checkedPopBadges,
        [e.target.name]: e.target.checked,
      },
      [checkedPopBadges]
    );
  };

  useEffect(() => {});
  const handleChangeExtra = (e) => {
    setExtraBadges(
      {
        ...checkedExtraBadges,
        [e.target.name]: e.target.checked,
      },
      [checkedExtraBadges]
    );
  };

  const handleChangeLegends = (e) => {
    setLegend({
      [e.target.name]: e.target.checked,
    });
  };

  let filteredPopBadges = Object.keys(checkedPopBadges).filter(function (x) {
    return checkedPopBadges[x] !== false;
  });

  let filteredExtraBadges = Object.keys(checkedExtraBadges).filter(function (
    x
  ) {
    return checkedExtraBadges[x] !== false;
  });
  useEffect(() => {
    let totalPop = 0;

    for (let i = 0; i < PopularBadgesObj.length; i++) {
      if (checkedPopBadges[PopularBadgesObj[i].name] === true) {
        totalPop = PopularBadgesObj[i].price + totalPop;
        setTotalPopBadges(totalPop);
      }
    }
  }, [checkedPopBadges, checkedExtraBadges]);

  useEffect(() => {
    let totalExtra = 0;
    for (let i = 0; i < extraBadgesObj.length; i++) {
      if (checkedExtraBadges[extraBadgesObj[i].name] === true) {
        totalExtra = extraBadgesObj[i].price + totalExtra;
        setTotalExtraBadges(totalExtra);
      }
    }
  }, [checkedExtraBadges, checkedPopBadges]);

  useEffect(() => {
    setAcheivementTotalMoney(totalExtraBadges + totalPopBadges);
  }, [totalExtraBadges, totalPopBadges]);

  useEffect(() => {
    if (Object.values(checkedLegend)[0] === false) {
      setValid("flex");
    }
    if (Object.values(checkedLegend)[0] === true) {
      setValid("none");
    }
  }, [checkedLegend]);

  useEffect(() => {
    if (Object.values(checkedPopBadges).includes(true) === false) {
      setTotalPopBadges(0);
    }
  }, [checkedPopBadges]);
  useEffect(() => {
    if (Object.values(checkedExtraBadges).includes(true) === false) {
      setTotalExtraBadges(0);
    }
  }, [checkedExtraBadges]);

  useEffect(() => {
    if (activeDuo) {
      setMoneyMultiplierDuo(acheivementTotalMoney * 0.75);
    }
    if (!activeDuo) {
      setMoneyMultiplierDuo(0);
    }
  }, [activeDuo, acheivementTotalMoney]);

  useEffect(() => {
    if (activePriority) {
      setMoneyMultipliePriority(acheivementTotalMoney * 0.50);
    }
    if (!activePriority) {
      setMoneyMultipliePriority(0);
    }
  }, [activePriority, acheivementTotalMoney]);

  useEffect(() => {
    if (activeStream) {
      setMoneyMultiplierStream(acheivementTotalMoney * 0.25);
    }
    if (!activeStream) {
      setMoneyMultiplierStream(0);
    }
  }, [activeStream, acheivementTotalMoney]);

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
    if (!Object.values(checkedLegend)[0] || checkedLegend.length < 1) {
      setDisabledButton("select a legend");
      setDisabledState(true);
    } else {
      setDisabledButton("Add to cart");
      setDisabledState(false);
    }
  }, [checkedLegend]);
  return (
    <>
      <BadgesTitle>Select Your Badges</BadgesTitle>
      <input type="checkbox" id="scales" name="scales"></input>
      <BadgesContainer>
        <BadgesWrap>
          <BadgesSectionTitle>Popular choices</BadgesSectionTitle>

          <BadgesSelectionContainers height="330px">
            {PopularBadgesObj.map((Items, index) => {
              return (
                <TextIconCheckBox>
                  <img
                    src={Items.icon}
                    alt="badge"
                    style={{
                      marginRight: "auto",
                      marginLeft: "auto",
                      height: "200px",
                      width: "200px",
                    }}
                  ></img>
                  <BadgeDesc>{Items.name}</BadgeDesc>
                  <BadgeDesc>{Items.price}$</BadgeDesc>
                  <label className="check" key={Items.key}>
                    <input
                      type="checkbox"
                      className="inputCheck"
                      name={Items.name}
                      checked={checkedPopBadges[Items.name]}
                      onChange={handleChangePop}
                    />

                    <div className="box"></div>
                  </label>
                </TextIconCheckBox>
              );
            })}
          </BadgesSelectionContainers>
          <BadgesSectionTitle>More Badges</BadgesSectionTitle>
          <Searchbar
            onChange={(e) => setSearchField(e.target.value)}
          ></Searchbar>
          <BadgesSelectionContainers>
            {extraBadgesObj
              .filter((items) => {
                return items.name
                  .toLowerCase()
                  .includes(searchField.toLowerCase());
              })
              .map((Items, index) => {
                return (
                  <TextIconCheckBox>
                    <img
                      src={Items.icon}
                      alt="badge"
                      style={{
                        marginRight: "auto",
                        marginLeft: "auto",
                        height: "200px",
                        width: "200px",
                      }}
                    ></img>
                    <BadgeDesc>{Items.name}</BadgeDesc>
                    <BadgeDesc>{Items.price}$</BadgeDesc>
                    <label className="check" key={Items.key}>
                      <input
                        type="checkbox"
                        className="inputCheck"
                        name={Items.name}
                        checked={checkedExtraBadges[Items.name]}
                        onChange={handleChangeExtra}
                      />

                      <div className="box"></div>
                    </label>
                  </TextIconCheckBox>
                );
              })}
          </BadgesSelectionContainers>
          <BadgesSectionTitle>Legends</BadgesSectionTitle>
          <Searchbar
            onChange={(e) => setSearchFieldLegends(e.target.value)}
          ></Searchbar>
          <BadgesSelectionContainers>
            
            {ReversedObj.filter((items) => {
              return items.name
                .toLowerCase()
                .includes(searchFieldLegends.toLowerCase());
            }).map((Items, index) => {
              return (
                <TextIconCheckBox backgroundColor="white">
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

                    <div
                      className="box"
                      style={{ backgroundColor: "black" }}
                    ></div>
                  </label>
                </TextIconCheckBox>
              );
            })}
          </BadgesSelectionContainers>
        </BadgesWrap>
      </BadgesContainer>
      <ExtrasContainer style={{ gridTemplateRows: "1fr" }}>
        <ExtrasTitle>Choose additional services</ExtrasTitle>
        <ExtrasOptions>
          <ExtraIconButtonWrap>
            <IconDescWrapper>
              <IconOffline></IconOffline>
              <ExtraCheckBox onClick={() => setActiveOffline(!activeOffline)} />
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
              <ExtraCheckBox onClick={() => setActiveStream(!activeStream)} />
              <p className="ExtraDesc">On Stream</p>
              <p className="ExtraDesc"> +75% </p>
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
      <StepTwoWarningContainer style={{ display: valid }}>
        Please Select a legend
        <StepTwoWarning>
          <i className="fa fa-times" onClick={() => setValid("none")}></i>
        </StepTwoWarning>
      </StepTwoWarningContainer>
      <TotalContainer>
        <TotalTitle>Check your total</TotalTitle>
        <TotalMoneyCard>
          <TotalMoneyHeader>
            Selected Badges:<br></br>
            <span>
              <totalBadgesContainer>
                {filteredPopBadges.map((Items, index) => {
                  return <p>{Items}</p>;
                })}
              </totalBadgesContainer>
            </span>
            <span>
              <totalBadgesContainer>
                {filteredExtraBadges.map((Items, index) => {
                  return <p>{Items}</p>;
                })}
              </totalBadgesContainer>
            </span>
            Selected Legend: <br></br>
            <span>{Object.keys(checkedLegend)}</span>
          </TotalMoneyHeader>
          <DiscountContainer>PromoCode</DiscountContainer>
          <InputTyped
            style={{ marginTop: "0px" }}
            fontSize="20px"
            height="50px"
            width="250px"
          ></InputTyped>
          <div className="button_cont" align="center">
            <button
              className="example_c"
              style={{ opacity: "0.4" }}
              disabled={true}
            >
              {" "}
              Not Applicable to Acheivement Boost
            </button>
          </div>
          <DiscountContainer>Total</DiscountContainer>
          <TotalMoney>
            {(
              acheivementTotalMoney +
              moneyMultiplierDuo +
              moneyMultiplierStream +
              moneyMultiplierPriority
            ).toFixed(2)}
            {"$"}
          </TotalMoney>

          <div className="button_cont" align="center">
            <Link to={"./cart" + window.location.search}>
              <button
                onClick={() => {
                  addToCart({
                    title: "Acheivement Boost",
                    price: (
                      acheivementTotalMoney +
                      moneyMultiplierDuo +
                      moneyMultiplierStream +
                      moneyMultiplierPriority
                    ).toFixed(2),
                    selectedPopBadges: filteredPopBadges,
                    selectedExtraBadges: filteredExtraBadges,
                    selectedLegend: Object.keys(checkedLegend),
                    icon: TwentyBomb,
                    badgesExtras: Object.keys(filteredExtras),
                  });
                }}
                className="example_d"
                href="add-website-here"
                target="_blank"
                rel="nofollow noopener"
                disabled={disabledState}
              >
                {disabledButtonText}
              </button>
            </Link>
          </div>
        </TotalMoneyCard>
      </TotalContainer>
    </>
  );
};

 export default AcheivementBoostProduct;
