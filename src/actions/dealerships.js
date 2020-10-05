import { createAction } from 'redux-actions';
import {
  REQUEST_DEALERSHIPS_SUCCESS,
  REQUEST_DEALERSHIPS_FAILURE,
} from '../constants/actionTypes';

import * as Dealerships from '../api/dealerships';

/* eslint-disable import/prefer-default-export */
const requestDealershipsSuccess = createAction(REQUEST_DEALERSHIPS_SUCCESS);
const requestDealershipsFailure = createAction(REQUEST_DEALERSHIPS_FAILURE);

export function requestDealerships() {
  return dispatch => Dealerships.requestDealerships()
    .then(({ data }) => dispatch(requestDealershipsSuccess(data)))
    .catch(error => dispatch(requestDealershipsFailure(error)));
}
