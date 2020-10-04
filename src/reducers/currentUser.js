import {
    REQUEST_CURRENT_USER_SUCCESS,
    REQUEST_CURRENT_USER_FAILURE,
    LOGOUT_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
  } from '../constants/actionTypes';
  
  const INITIAL_STATE = { id: null, error: null };
  
  export default function currentUser(state = INITIAL_STATE, action) {
    switch (action.type) {
      case REQUEST_CURRENT_USER_SUCCESS:
      case REGISTER_USER_SUCCESS:
        return {
          id: action.payload.data.id,
          error: null
        };
      case REQUEST_CURRENT_USER_FAILURE:
      case REGISTER_USER_FAILURE:
        return {
          ...state,
          id: null,
          error: action.payload.message
        };
      case LOGOUT_USER:
        return {
          ...state,
          id: null
        };
      default:
        return state;
    }
  }
  