import { combineReducers } from 'redux';

import entities from './entities';
import currentUser from './currentUser';
import dealerships from './dealerships'

const appReducers = combineReducers({
  entities,
  currentUser,
  dealerships
});

export default appReducers;
