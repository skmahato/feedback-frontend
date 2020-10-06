import { remove } from 'lodash';

import {
    REQUEST_DEALERSHIPS_SUCCESS,
    REQUEST_DEALERSHIPS_FAILURE,
    CREATE_DEALERSHIP_SUCCESS,
    CREATE_DEALERSHIP_FAILURE,
    DELETE_DEALERSHIP_SUCCESS,
    DELETE_DEALERSHIP_FAILURE,
    SELECTED_DEALERSHIP
  } from '../constants/actionTypes';
  
  const INITIAL_STATE = { ids: [], error: null, selected: null };
  
  export default function dealerships(state = INITIAL_STATE, action) {
    switch (action.type) {
      case REQUEST_DEALERSHIPS_SUCCESS:
        return {
          ids: action.payload.data.map(data => parseInt(data.id, 10)),
          error: null
        };
      case REQUEST_DEALERSHIPS_FAILURE:
        return {
          ...state,
          ids: [],
          error: action.payload.message
        };
      case CREATE_DEALERSHIP_SUCCESS:
        return {
            ...state,
            ids: [parseInt(action.payload.data.id, 10), ...state.ids],
            error: null
        };
      case CREATE_DEALERSHIP_FAILURE:
        return {
            ...state,
            error: action.payload.message
        };
      case DELETE_DEALERSHIP_SUCCESS:
        return {
            ...state,
            ids: remove(state.ids, key => key !== parseInt(action.payload.data.id, 10)),
            error: null
        };
      case DELETE_DEALERSHIP_FAILURE:
        return {
            ...state,
            error: action.payload.message
        };
      case SELECTED_DEALERSHIP:
        return {
          ...state,
          selected: action.payload
        }
      default:
        return state;
    }
  }
  