import React from 'react';
import { useSelector } from 'react-redux';

import { dealershipReviewSelector } from '../../selectors/dealerships';

export const Review = ({ selectedDealerId }) => {
    const dealerReviews = useSelector(state => dealershipReviewSelector(state, selectedDealerId));

    console.log(dealerReviews); 

    return (
        <>
            {dealerReviews.map(f => {
                return (
                    <div key={f.id}>
                        <strong>{f.title} | {f.rating} stars</strong>
                        <p><em>{f.comment}</em></p>
                    </div>
                )
            })}
        </>
    )
}

export default Review;