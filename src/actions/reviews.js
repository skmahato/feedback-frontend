import { createAction } from 'redux-actions';
import {
  REQUEST_REVIEWS_SUCCESS,
  REQUEST_REVIEWS_FAILURE,
  CREATE_REVIEW_SUCCESS,
  CREATE_REVIEW_FAILURE,
  UPDATE_REVIEW_SUCCESS,
  UPDATE_REVIEW_FAILURE,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAILURE
} from '../constants/actionTypes';

import * as Reviews from '../api/reviews';

/* eslint-disable import/prefer-default-export */
const requestReviewsSuccess = createAction(REQUEST_REVIEWS_SUCCESS);
const requestReviewsFailure = createAction(REQUEST_REVIEWS_FAILURE);

export function requestReviews(dealershipId) {
  return dispatch => Reviews.requestReviews(dealershipId)
    .then(({ data }) => dispatch(requestReviewsSuccess(data)))
    .catch(error => dispatch(requestReviewsFailure(error)));
}

const createReviewSuccess = createAction(CREATE_REVIEW_SUCCESS);
const createReviewFailure = createAction(CREATE_REVIEW_FAILURE);

export function createReview(params, dealershipId) {
  return dispatch => Reviews.createReview(params, dealershipId)
    .then(({ data }) => dispatch(createReviewSuccess(data)))
    .catch(error => dispatch(createReviewFailure(error)));
}

const updateReviewSuccess = createAction(UPDATE_REVIEW_SUCCESS);
const updateReviewFailure = createAction(UPDATE_REVIEW_FAILURE);

export function updateReview(params, dealershipId, id) {
  return dispatch => Reviews.updateReview(params, dealershipId, id)
    .then(({ data }) => dispatch(updateReviewSuccess(data)))
    .catch(error => dispatch(updateReviewFailure(error)));
}

const deleteReviewSuccess = createAction(DELETE_REVIEW_SUCCESS);
const deleteReviewFailure = createAction(DELETE_REVIEW_FAILURE);

export function deleteReview(id) {
  return dispatch => Reviews.deleteReview(id)
    .then(({ data }) => dispatch(deleteReviewSuccess({ data, id })))
    .catch(error => dispatch(deleteReviewFailure(error)));
}