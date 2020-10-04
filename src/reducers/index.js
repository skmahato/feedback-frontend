import { combineReducers } from 'redux';

import entities from './entities';
import currentUser from './currentUser';

const appReducers = combineReducers({
  entities,
  currentUser
});

export default appReducers;
