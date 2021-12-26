import styled from "styled-components"


const PackDesc = ({initialImg, finalImg}) => {
const Pack = styled.div`

display: grid;
flex-direction:column;
align-items:center;
border: 4px solid black;
margin:20px;

`
const PackImgs = styled.div`
display:grid;
grid-template-columns:1fr 0.1fr 1fr;
display:flex;
justify-content:space-around;

`
const Img = styled.img`
width:calc(3vw + 12px);
height: auto;

`

    return (
        <Pack>
            <h2>Plat4 to masters</h2>
            <PackImgs>
                <Img src={initialImg} alt="initial rank"></Img>
                <p>=></p>
                <Img src={finalImg} alt="final rank"></Img>
            </PackImgs>
            <button>add to cart</button>
        </Pack>
    )
}

export default PackDesc
