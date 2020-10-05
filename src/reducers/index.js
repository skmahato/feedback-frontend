import { combineReducers } from 'redux';

import entities from './entities';
import currentUser from './currentUser';
import dealerships from './dealerships';
import reviews from './reviews';

const appReducers = combineReducers({
  entities,
  currentUser,
  dealerships,
  reviews
});

export default appReducers;
