import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ReviewBox from './ReviewBox'
import axios from 'axios'
import SubmitReview from './SubmitReview'

const Reviews = () => {

    const [reviews, setReviews] = useState([])

    const Testimonials = styled.section` 
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
width:100%;

`
    const TestimonialsHeader = styled.div`
letter-spacing: 1px;
margin: 30 0px;
padding: 10px 20px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;

h1{
    font-size:2.2rem;
    font-weight: 500;
    background-color:#202020;
    color:#fff;
    padding: 10px 20px;
}

span{
    font-size:1.3rem;
    color:#252525;
    margin-bottom: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
}
`
    useEffect(
        async () => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            try {
                const { data } = await axios.get(
                    "https://secret-cove-64633.herokuapp.com/api/auth/get-reviews",
                    config


                ); setReviews(data.reviews);
            } catch (error) {
                console.log(error);
            }

        }, [])

    return (<>
        

        <Testimonials>
           
            <TestimonialsHeader>
                <span>Reviews</span>
                <h1>Clients Say</h1>
            </TestimonialsHeader>
            <div style={{display: "flex", flexDirection:"column-reverse"}}>
            {reviews.map((review, index) => {
               return( <ReviewBox name={review.name} main={review.main} rating={review.rating} review={review.review} dateCreated={review.dateCreated}></ReviewBox>)
            })}
            </div>
            <SubmitReview/>

        </Testimonials>

</>
    );
}

export default Reviews