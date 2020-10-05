import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core'

import { dealershipsSelector } from '../../selectors/dealerships';
import DealerInfo from '../DealerInfo';
import Review from '../Review';

const BeforeLogin = () => {
    const [selectedDealerId, setSelectedDealerId] = useState(null);
    const dealerships = useSelector(dealershipsSelector);
    
    return (
        <Grid container spacing={2}>
            <Grid item sm={6}>
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

            <Grid item sm={6}>
                {selectedDealerId && (
                    <Review selectedDealerId={selectedDealerId} />
                )}
            </Grid>
        </Grid>
    )
}

export default BeforeLogin;