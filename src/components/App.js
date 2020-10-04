import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import CircularProgress from '@material-ui/core/CircularProgress';

import BeforeLogin from './BeforeLogin';
import Layout from './Layout';
import { requestCurrentUser } from '../actions/users';
import { currentUserSelector } from '../selectors/currentUserSelector';

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(currentUserSelector);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    dispatch(requestCurrentUser()).then(() => {
      setLoading(false);
    });
  }, [dispatch]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!isEmpty(currentUser)) {
    return (
      <Layout />
    );
  }

  return (
    <BeforeLogin />
  );
};

export default App;
