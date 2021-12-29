import styled from "styled-components";

const PackDesc = ({ initialImg, checkedLegend }) => {
  const Container = styled.div`
    position: relative;
  `;
  const ImgBox = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
    width: 100%;
    height: 100%;
    transition: 0.5s;
    transform: translateY(-50%);
    @media screen and (orientation: portrait) {
      top: 0%;
      transform: translateY(-25%);
    }
  `;
  const ContentBox = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: 1s;
    z-index: 90;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const SelectedLegend = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
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
    min-width: 74.0740740741%;
    padding: 0.25rem 0.5rem;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    vertical-align: middle;

    &:hover {
      background-color: #2ee59d;
      box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
      color: #fff;
      transform: translateY(-7px);
      transition: all 0.2s ease 0s;
    }
  `;
  const Card = styled.div`
    position: relative;
    width: 300px;
    height: 450px;
    background: #232323;
    border-radius: 20px;
    overflow: hidden;
    margin: 0 15px;

    @media screen and (orientation: portrait) {
      &::before {
        clip-path: circle(300px at 80% -20%);
      }
      ${ImgBox} {
        top: 0%;
        transform: translateY(-25%);
      }
      ${ContentBox} {
        height: 210px;
      }
      ${SelectedLegend} {
        opacity: 1;
        visibility: visible;
        transition-delay: 0.5s;
      }
      button {
        opacity: 1;
        transform: translateY(0px);
        transition-delay: 0.7s;
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${(props) =>
        `linear-gradient(90deg, #${props.firstColor} 0%, #${props.secondColor} 120%)`};
      clip-path: circle(150px at 80% 20%);
      transition: 0.5s ease-in-out;
    }
    &:hover:before {
      clip-path: circle(300px at 80% -20%);
    }
    &::after {
      content: "Plat --";
      position: absolute;
      top: 30%;
      left: -20%;
      font-size: 12em;
      font-weight: 800;
      font-style: italic;
      color: rgba(255, 255, 255, 0.04);
    }
    &:hover {
      ${ImgBox} {
        top: 0%;
        transform: translateY(-25%);
      }
      ${ContentBox} {
        height: 210px;
      }
      ${SelectedLegend} {
        opacity: 1;
        visibility: visible;
        transition-delay: 0.5s;
      }
      button {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  `;

  const Image = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 170px;
    height: auto;
  `;

  const Title = styled.h2`
    position: absolute;
    font-weight: 600;
    letter-spacing: 1px;
    color: white;
    font-size:25px !important;
  `;
  const Subtitle = styled.h3`
    color: white;
    font-weight: 300;
    font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: ${(props) => (props.marginTop ? props.marginTop : "70px")};
  `;
  let displayLegend = Object.keys(checkedLegend)[0];
  return (
    <Container>
      <Card firstColor="4de6e0" secondColor="9c64ca">
        <ImgBox>
          <Image src={initialImg} alt="Plat 4 to masters"></Image>{" "}
        </ImgBox>

        <ContentBox>
          <Title>Plat iv to masters</Title>

          <SelectedLegend>
            <Subtitle fontSize="21px">209.99$</Subtitle>
            <Subtitle marginTop="10px">Legend : {displayLegend}</Subtitle>
          </SelectedLegend>

          <Button background={"black"} color={"white"} border={"none"}>
            Buy Now
          </Button>
        </ContentBox>
      </Card>
    </Container>
  );
};

export default PackDesc;
