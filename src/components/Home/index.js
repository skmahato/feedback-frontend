import React from 'react';
import { Grid } from '@material-ui/core';
import { Route, Switch, useLocation } from 'react-router-dom';

import Authentication from './Authentication';
import Layout from './Layout';
import Profile from './Profile';
import ReviewFormForIframe from '../ReviewFormForIframe';

const Home = ({ currentUser }) => {
    const location = useLocation();

    if (location.search) {
        return (
            <ReviewFormForIframe token={location.search} />
        )
    }
    
    return (
        <Grid container spacing={2}>
            <Grid item sm={3}>
                <Authentication currentUser={currentUser} />
            </Grid>

            <Switch>
                <Route exact path="/" component={() => <Layout currentUser={currentUser} />} />
                <Route exact path="/profile" component={() => <Profile currentUser={currentUser} />} />
            </Switch>
        </Grid>
    )
}

export default Home;