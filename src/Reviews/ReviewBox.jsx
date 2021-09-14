import styled from "styled-components"
import { Rating } from '@material-ui/lab';
import User from "../Pages/Images/user.png"

const ReviewBox = ({name, rating, dateCreated, review}) => {
    const TestimonialBoxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:center;
    width:100%;
    `
    const TestimonialBox = styled.div`
    width:500px;
    box-shadow: 2px 2px 30px;
    padding: 20px;
    margin:15px;
    cursor: pointer;
    
    `
    const BoxDiv = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    `
    const Profile = styled.div`
    display:flex;
    align-items: center;
    `
    const ProfileImage = styled.div`
    width:50px;
    height:50px;
    border-radius:50%;
    overflow:hidden;
    margin-right:10px;
    img{
        width:100%;
        height:100%;
        object-fit: cover;
        object-position: center;
    }
    `
    const Reviews = styled.div`
    color:#f9d71c;
    `
    const UserName = styled.div`
    display:flex;
    flex-direction: column;

    strong{
        color:#3d3d3d;
        font-size: 1.1rem;
        letter-spacing:0.5px;
    }
    span{
        color:979797;
        font-size: .8rem;
    }
    

    `
    const ClientComment = styled.div`

    p{
        font-size: .9rem;
        color: #4b4b4b
    }
    p::selection{
        color:#fff;
        background-color: #252525
    }
    `

    return (
        <TestimonialBoxContainer>
            <TestimonialBox>
                <BoxDiv>


                    <Profile>
                        <ProfileImage>
                            <img src={User} alt="User"></img>
                        </ProfileImage>

                        <UserName>
                            <strong>{name}</strong>
                            <span>{dateCreated ? dateCreated : "6 months ago"}</span>
                        </UserName>
                    </Profile>
                    <Reviews>
                        <Rating
                            name="hover-feedback"
                            value={rating}
                            precision={0.5}
                            readOnly={true}
                        />
                    </Reviews>
                </BoxDiv>
                <ClientComment>
                    <p>{review}</p>
                </ClientComment>
            </TestimonialBox>
        </TestimonialBoxContainer>
    )
}

export default ReviewBox
