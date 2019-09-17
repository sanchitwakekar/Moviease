import {
  GET_DETAILS,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAIL,
  SAVE_DETAILS_IN_WATCHLIST,
  SAVE_DETAILS_IN_WATCHLIST_SUCCESS,
  SAVE_DETAILS_IN_WATCHLIST_FAIL,
  DELETE_DETAILS_FROM_WATCHLIST,
  DELETE_DETAILS_FROM_WATCHLIST_SUCCESS,
  DELETE_DETAILS_FROM_WATCHLIST_FAIL
} from "../Actions/types";

const initialState = {
  Details: {}
};

export function DetailsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DETAILS: {
      return {
        ...state,
        Details: action.data
      };
    }
    case GET_DETAILS_SUCCESS: {
      return {
        ...state,
        Details: action.data
      };
    }
    case GET_DETAILS_FAIL: {
      return {
        ...state
      };
    }
    case SAVE_DETAILS_IN_WATCHLIST: {
      return {
        ...state
      };
    }
    case SAVE_DETAILS_IN_WATCHLIST_SUCCESS: {
      return {
        ...state
      };
    }
    case SAVE_DETAILS_IN_WATCHLIST_FAIL: {
      return {
        ...state
      };
    }
    case DELETE_DETAILS_FROM_WATCHLIST: {
      return {
        ...state
      };
    }
    case DELETE_DETAILS_FROM_WATCHLIST_SUCCESS: {
      return {
        ...state
      };
    }
    case DELETE_DETAILS_FROM_WATCHLIST_FAIL: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
}
