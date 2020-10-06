import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { Grid } from '@material-ui/core';

import DealerInfo from '../../DealerInfo';
import ReviewItem from '../../Review/ReviewItem';
import { currenDealerShip } from '../../../selectors/currentUserSelector';
import './Profile.css';

const Profile = () => {
    const dealer = useSelector(currenDealerShip);

    if (isEmpty(dealer)) {
        return <span>Loading...</span>
    }

    return (
            <Grid item sm={8}>
            <h1>Profile Page</h1>
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