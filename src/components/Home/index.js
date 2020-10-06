import React from 'react';
import { Grid } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

import Authentication from './Authentication';
import Layout from './Layout';
import Profile from './Profile';

const Home = ({ currentUser }) => {
    
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