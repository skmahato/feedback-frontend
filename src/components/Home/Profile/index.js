import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';
import { Grid } from '@material-ui/core';

import DealerInfo from '../../DealerInfo';
import ReviewItem from '../../Review/ReviewItem';
import AddDealershipForm from '../AddDealershipForm';
import { currentDealershipWithReviewsAndUsers } from '../../../selectors/currentUserSelector';
import { generateApi } from '../../../actions/dealerships';
import { requestReviews } from '../../../actions/reviews';
import './Profile.css';

const Profile = () => {
    const dealer = useSelector(currentDealershipWithReviewsAndUsers);
    const dispatch = useDispatch();
    const [api, setApi] = useState('');

    useEffect(() => {
        if (!isEmpty(dealer)) {
            dispatch(requestReviews(dealer.id));
        }
    }, [dealer])

    if (isEmpty(dealer)) {
        return <span>Loading...</span>
    }

    const generateApiHandler = () => {
        dispatch(generateApi(dealer.id)).then(response => {
            if (!response.error) {
                setApi(response.payload)
            }
        })
    }

    console.log(dealer);

    return (
            <Grid item sm={8}>
            <h1>Profile Page</h1>
            <AddDealershipForm dealer={dealer} />
            {!api && <button onClick={generateApiHandler}>Generate Reviews API</button>}
            {api && <p>To fetch reviews: {api}</p>}
            {api && <p>For iFrame: {api.replace('back', 'front')}</p>}
            <DealerInfo dealer={dealer} />
            <br />
            <h2>Reviews</h2>
            {dealer.reviews.map(f => {
                return (
                    <div key={f.id} className={f.visible ? "" : "only-admin-review"}>
                        <ReviewItem review={f} />
                    </div>
                )
            })}
            </Grid>
    )
}

export default Profile;