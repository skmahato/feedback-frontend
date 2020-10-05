import {
    REQUEST_DEALERSHIPS_SUCCESS,
    REQUEST_DEALERSHIPS_FAILURE,
  } from '../constants/actionTypes';
  
  const INITIAL_STATE = { ids: [], error: null };
  
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
      default:
        return state;
    }
  }
  