import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

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

  return (
    <Home currentUser={currentUser} />
  );
};

export default App;
