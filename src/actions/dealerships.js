import { createAction } from 'redux-actions';
import {
  REQUEST_DEALERSHIPS_SUCCESS,
  REQUEST_DEALERSHIPS_FAILURE,
  CREATE_DEALERSHIP_SUCCESS,
  CREATE_DEALERSHIP_FAILURE,
  UPDATE_DEALERSHIP_SUCCESS,
  UPDATE_DEALERSHIP_FAILURE,
  DELETE_DEALERSHIP_SUCCESS,
  DELETE_DEALERSHIP_FAILURE
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

const createDealershipSuccess = createAction(CREATE_DEALERSHIP_SUCCESS);
const createDealershipFailure = createAction(CREATE_DEALERSHIP_FAILURE);

export function createDealership(params) {
  return dispatch => Dealerships.createDealership(params)
    .then(({ data }) => dispatch(createDealershipSuccess(data)))
    .catch(error => dispatch(createDealershipFailure(error)));
}

const updateDealershipSuccess = createAction(UPDATE_DEALERSHIP_SUCCESS);
const updateDealershipFailure = createAction(UPDATE_DEALERSHIP_FAILURE);

export function updateDealership(params, id) {
  return dispatch => Dealerships.updateDealership(params, id)
    .then(({ data }) => dispatch(updateDealershipSuccess(data)))
    .catch(error => dispatch(updateDealershipFailure(error)));
}

const deleteDealershipSuccess = createAction(DELETE_DEALERSHIP_SUCCESS);
const deleteDealershipFailure = createAction(DELETE_DEALERSHIP_FAILURE);

export function deleteDealership(id) {
  return dispatch => Dealerships.deleteDealership(id)
    .then(({ data }) => dispatch(deleteDealershipSuccess({ data, id })))
    .catch(error => dispatch(deleteDealershipFailure(error)));
}