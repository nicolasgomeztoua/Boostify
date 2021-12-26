import styled from "styled-components";
import desktopBackg from "../Images/SignUpPc.png";
import mobileBackg from "../Images/SignUpMobile.jpg";

export const Container = styled.div`
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
  export const Padder = styled.div`
    @media (orientation: landscape) {
      width: 40vw;
    }
    @media (orientation: portrait) {
      padding-top: 40vh;
    }
  `;
  export const ContentGrid = styled.section`
    display: flex;
    flex-direction: column;
  `;
  export const Title = styled.header`
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
  export const Body = styled.h2`
    font-size: 0.9rem;
    color: #fff;
    font-weight: 100;
    margin-top: 5px;
    text-align: center;
    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black,
      0 -0.07em black, -0.07em -0.07em black, -0.07em 0.07em black,
      0.07em -0.07em black, 0.07em 0.07em black;
  `;
  export const Subtitle = styled.h3`
    font-size: 0.9rem;
    color: #fff;
    font-weight: 700;
    text-align: center;
    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black,
    -0.07em -0.07em black, -0.07em 0.07em black, 0.07em -0.07em black,
    0.07em 0.07em black;
    padding:10px;
`
    export const Button = styled.button`
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

  export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;

export const Highlight = styled.div`
   background-color: #fff;
   width: auto;
   margin: 50px;
   
`

export const CardExterior = styled.div`
border: 2.5px solid #40E0D0;
border-radius: 50px;
height:70%;
width:50%;
display: flex;
flex-direction: column;
align-items: center;
`
export const StepContainer = styled.div`
min-width: 100vw;
min-height: calc(120vh - 80px);
display: flex;
justify-content: center;
align-items: center;
`
export const TypContainer = styled.div`
display: flex;
flex-direction: row;
overflow-x: auto;
width:100vw;
scroll-behavior: smooth;
`