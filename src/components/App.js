import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Route, Switch, Redirect } from 'react-router-dom';
import { isEmpty } from 'lodash';

import Home from './Home';
import { requestCurrentUser } from '../actions/users';
import { currentUserSelector } from '../selectors/currentUserSelector';
import { requestDealerships } from '../actions/dealerships';

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(currentUserSelector);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    dispatch(requestDealerships());
    dispatch(requestCurrentUser()).then(() => {
      setLoading(false);
    });
  }, [dispatch]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!isEmpty(currentUser)) {
    return (
      <Switch>
        <Route path="/" component={() => <Home currentUser={currentUser} />} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path="/" component={() => <Home currentUser={currentUser} />} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default App;
