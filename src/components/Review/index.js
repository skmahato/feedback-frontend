import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

import ReactForm from './ReviewForm';
import { createReview } from '../../actions/reviews';
import { dealershipReviewSelector } from '../../selectors/dealerships';
import currentUser from '../../reducers/currentUser';
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

    return (
        <div>
            {!isEmpty(currentUser) && (
                <>
                    <Button type="button" onClick={handleClick}>{open ? 'Cancel' : 'New Review'}</Button>
                    {open && <ReactForm handleFormSubmit={handleSubmit} />}

                    <hr />
                </>
            )}

            {dealerReviews.map(f => {
                return (
                    <div key={f.id}>
                        <strong>{f.title}</strong> | {f.rating} stars
                        <p><em>{f.comment}</em></p>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default Review;