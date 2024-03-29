import SpecialRegister from "./SpecialRegister";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import desktopBackg from "../Images/SignUpPc.png";
import mobileBackg from "../Images/SignUpMobile.jpg";

 const Container = styled.div`
    @media (orientation: landscape) {
      background-image: url(${desktopBackg});
      display: ${(props) => props.grid};
      grid-template-columns: 1fr 1fr;
      background-size: contain;
    }
    @media (orientation: portrait) {
      background-image: url(${mobileBackg});
    }
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
  `;
   const Padder = styled.div`
    @media (orientation: landscape) {
      width: 40vw;
    }
    @media (orientation: portrait) {
      padding-top: 40vh;
    }
  `;
   const ContentGrid = styled.section`
    display: flex;
    flex-direction: column;
    a{
      text-decoration: none;
    }
  `;
   const Title = styled.header`
    font-size: 1.55rem;
    color: #fff;
    font-weight: 700;
    line-height: 1em;
    padding: 28px 10vw 0;
    text-align: center;
    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black,
      0 -0.07em black, -0.07em -0.07em black, -0.07em 0.07em black,
      0.07em -0.07em black, 0.07em 0.07em black;
  `;
   const Body = styled.h2`
    font-size: 0.9rem;
    color: #fff;
    font-weight: 100;
    margin-top: 5px;
    text-align: center;
    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black,
      0 -0.07em black, -0.07em -0.07em black, -0.07em 0.07em black,
      0.07em -0.07em black, 0.07em 0.07em black;
  `;
   const Subtitle = styled.h3`
    font-size: 0.9rem;
    color: #fff;
    font-weight: 700;
    text-align: center;
    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black,
    -0.07em -0.07em black, -0.07em 0.07em black, 0.07em -0.07em black,
    0.07em 0.07em black;
    padding:10px;
`
     const Button = styled.button`
    font-size: .9rem;
    background-color: ${(props => props.background ? props.background : '#fff')};
    border:${(props => props.border ? props.border : 'solid #056e84 1px')};
    border-radius: 25px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.7);
    color: ${(props => props.color ? props.color : '#056e84')};
    cursor: pointer;
    font-weight: bold;
    height: auto;
    line-height: 2.5em;
    margin: 0;
    margin-top: 10px;
    min-height: 30px;
    min-width: 74.0740740741%;
    padding: 0.25rem 0.5rem;
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

   const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;
const SignUp = ({ history }) => {
  const [displayForm, setDisplayForm] = useState("none");
  const [displayButton, setDisplayButton] = useState("block");
  const [grid, setGrid] = useState("grid");
  

  const onClickSignUp = () => {
    setTimeout(() => {
      setDisplayButton("none");
      setDisplayForm("flex");
      setGrid("flex");
    }, 400);
  };
  return (
    <Container grid={grid}>
      <Padder style={{ display: displayButton }} />
      <ContentGrid style={{ display: displayButton }}>
        <div>
          <Title>Free 4k/20Bomb for NEW Boostify users</Title>
        </div>
        <div>
          <Body>Sign up today!</Body>
          <Subtitle>
            AND RECEIVE A FREE 4k/20-BOMB WITH ANY RANK BOOST TO MASTERS ORDER!
          </Subtitle>
        </div>
        <div>
          <ButtonContainer>
            <Button onClick={onClickSignUp}> Sign Up!</Button>
          </ButtonContainer>{" "}
          <Link to="/rank-boosting">
            <ButtonContainer>
              <Button>I am looking for something else</Button>{" "}
            </ButtonContainer>{" "}
          </Link>
        </div>
      </ContentGrid>
      <SpecialRegister
        display={displayForm}
        history={history}
      ></SpecialRegister>
    </Container>
  );
};

 export default SignUp;
