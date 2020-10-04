import { createAction } from 'redux-actions';
import {
  REQUEST_CURRENT_USER_SUCCESS,
  REQUEST_CURRENT_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from '../constants/actionTypes';

import * as User from '../api/users';
import { setToken } from '../helpers/localStorageCache';

/* eslint-disable import/prefer-default-export */
const requestUserSuccess = createAction(REQUEST_CURRENT_USER_SUCCESS);
const requestUserFailure = createAction(REQUEST_CURRENT_USER_FAILURE);

export function requestCurrentUser() {
  return dispatch => User.requestCurrentUser()
    .then(({ data }) => dispatch(requestUserSuccess(data)))
    .catch(error => dispatch(requestUserFailure(error)));
}

const registerUserSuccess = createAction(REGISTER_USER_SUCCESS);
const registerUserFailure = createAction(REGISTER_USER_FAILURE);

export function registerUser(params) {
  return dispatch => User.registerUser(params)
    .then(({ data }) => {
      setToken('jwtToken', data.meta.jwtToken);
      return dispatch(registerUserSuccess(data))
    })
    .catch(error => dispatch(registerUserFailure(error)));
}
