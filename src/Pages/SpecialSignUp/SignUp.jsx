

import SpecialRegister from "./SpecialRegister";
import { useState } from "react";
import {Container,Padder, ContentGrid, Title, Body, Subtitle, ButtonContainer, Button} from "./signupstyles"
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
            AND RECEIVE A FREE 4k/20-BOMB WITH ANY RANK BOOST ORDER!
          </Subtitle>
        </div>
        <div>
          <ButtonContainer>
            <Button onClick={onClickSignUp}> Sign Up!</Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button>Cancel</Button>
          </ButtonContainer>
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
