import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ReviewItem from './ReviewItem';

const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const resp = await fetch('/data/review.json');
            const json = await resp.json();
            setReview(json);
        }
        fetchData();
    }, []);

    return (
        <Wrapper className='container'>
            <div className="tittle">
                <h1>Review</h1>
            </div>
            <div className="details">
                <ReviewItem reviews={review} />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`

.details{
    width: 90%;
    margin: 1rem auto;
    background: var(--primaryColor);
}
`

export default Review;
