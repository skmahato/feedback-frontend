import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';

import { dealershipsSelector } from '../../../selectors/dealerships';
import { requestReviews } from '../../../actions/reviews';
import DealerInfo from '../../DealerInfo';
import Review from '../../Review';
import AddDealershipForm from '../AddDealershipForm';
import { selectedDealership } from '../../../actions/dealerships';

const Layout = ( { currentUser }) => {
    const dispatch = useDispatch();
    // const [selectedDealerId, setSelectedDealerId] = useState(null);
    const dealerships = useSelector(dealershipsSelector);

    const handleDealerClick = (id) => {
        // setSelectedDealerId(id);
        dispatch(requestReviews(id));
        dispatch(selectedDealership(id));
    }

    const selectedDealerId = useSelector(state => state.dealerships.selected);

    return (
        <>
            <Grid item sm={4}>
                <h2>Dealerships</h2>
                {currentUser && !currentUser.admin && <AddDealershipForm />}
                {dealerships.map(f => {
                    return (
                        <DealerInfo
                            key={f.id}
                            dealer={f}
                            handleDealerClick={(id) => handleDealerClick(id)}
                        />
                    )
                })}
            </Grid>

            <Grid item sm={5}>
                {selectedDealerId && (
                    <Review
                        selectedDealerId={selectedDealerId}
                        currentUser={currentUser}
                    />
                )}
            </Grid>
        </>
    )
}

export default Layout;