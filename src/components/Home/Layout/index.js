import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import { dealershipsSelector } from '../../../selectors/dealerships';
import DealerInfo from '../../DealerInfo';
import Review from '../../Review';

const Layout = ( { currentUser }) => {
    const [selectedDealerId, setSelectedDealerId] = useState(null);
    const dealerships = useSelector(dealershipsSelector);

    return (
        <>
            <Grid item sm={4}>
                {dealerships.map(f => {
                    return (
                        <DealerInfo
                            key={f.id}
                            dealer={f}
                            handleDealerClick={(id) => setSelectedDealerId(id)}
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