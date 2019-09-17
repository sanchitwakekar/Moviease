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
} from "./types";

export function GetDetails(params) {
  return {
    type: GET_DETAILS,
    data: params
  };
}
export function GetDetailsSuccess(params) {
  return {
    type: GET_DETAILS_SUCCESS,
    data: params
  };
}
export function GetDetailsFail(params) {
  return {
    type: GET_DETAILS_FAIL,
    data: params
  };
}
export function SaveinWatchlist(params) {
  return {
    type: SAVE_DETAILS_IN_WATCHLIST,
    data: params
  };
}
export function SaveinWatchlistSuccess(params) {
  return {
    type: SAVE_DETAILS_IN_WATCHLIST_SUCCESS,
    data: params
  };
}
export function SaveinWatchlistFail(params) {
  return {
    type: SAVE_DETAILS_IN_WATCHLIST_FAIL,
    data: params
  };
}

export function DeletefromWatchlist(params) {
  return {
    type: DELETE_DETAILS_FROM_WATCHLIST,
    data: params
  };
}
export function DeletefromWatchlistWatchlistSuccess(params) {
  return {
    type: DELETE_DETAILS_FROM_WATCHLIST_SUCCESS,
    data: params
  };
}
export function DeletefromWatchlistFail(params) {
  return {
    type: DELETE_DETAILS_FROM_WATCHLIST_FAIL,
    data: params
  };
}
