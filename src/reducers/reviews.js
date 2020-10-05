import { remove } from 'lodash';

import {
    REQUEST_REVIEWS_SUCCESS,
    REQUEST_REVIEWS_FAILURE,
    CREATE_REVIEW_SUCCESS,
    CREATE_REVIEW_FAILURE,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAILURE
  } from '../constants/actionTypes';
  
  const INITIAL_STATE = { ids: [], error: null };
  
  export default function reviews(state = INITIAL_STATE, action) {
    switch (action.type) {
      case REQUEST_REVIEWS_SUCCESS:
        return {
          ids: action.payload.data.map(data => parseInt(data.id, 10)),
          error: null
        };
      case REQUEST_REVIEWS_FAILURE:
        return {
          ...state,
          ids: [],
          error: action.payload.message
        };
      case CREATE_REVIEW_SUCCESS:
        return {
            ...state,
            ids: [parseInt(action.payload.data.id, 10), ...state.ids],
            error: null
        };
      case CREATE_REVIEW_FAILURE:
        return {
            ...state,
            error: action.payload.message
        };
      case DELETE_REVIEW_SUCCESS:
        return {
            ...state,
            ids: remove(state.ids, key => key !== parseInt(action.payload.data.id, 10)),
            error: null
        };
      case DELETE_REVIEW_FAILURE:
        return {
            ...state,
            error: action.payload.message
        };
      default:
        return state;
    }
  }
  