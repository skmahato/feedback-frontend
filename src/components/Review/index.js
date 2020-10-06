import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

import ReactForm from './ReviewForm';
import ReviewItem from './ReviewItem';
import { createReview } from '../../actions/reviews';
import { dealershipReviewSelector } from '../../selectors/dealerships';
import { isEmpty } from 'lodash';

export const Review = ({ selectedDealerId, currentUser }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const dealerReviews = useSelector(state => dealershipReviewSelector(state, selectedDealerId));

    const handleClick = () => setOpen(!open);

    const handleSubmit = (params) => {
        dispatch(createReview(params, selectedDealerId)).then(res => {
            console.log(res);
        })
    }

    const visibleReviews = dealerReviews.filter(f => f.visible)

    return (
        <div>
            <h2>Reviews</h2>
            {!isEmpty(currentUser) && (
                <>
                    <Button type="button" onClick={handleClick}>{open ? 'Cancel' : 'New Review'}</Button>
                    {open && <ReactForm handleFormSubmit={handleSubmit} />}

                    <hr />
                </>
            )}

            {visibleReviews.map(f => <ReviewItem key={f.id} review={f} />)}
        </div>
    )
}

export default Review;