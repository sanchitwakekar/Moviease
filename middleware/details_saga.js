/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

import { call, takeEvery, put } from "redux-saga/effects";
import { GET_DETAILS } from "../Actions/types";
import { GetMoviesSuccess, GetMoviesFail } from "../Actions/index";
import axios from "axios";
import { GetDetailsSuccess, GetDetailsFail } from "../Actions/GetDetailsAction";

getdetails = (id) => {
  console.log(id);
  return axios
    .get("http://www.omdbapi.com/?apikey=1673c24a&i=" + id)
    .then(response => {
    //  console.log(response);
      return response.data;
    });
};
export function* GetDetailsSaga(action) {
  try {
    //console.log('action called ' + action);
    let details = yield call(getdetails, action.data);
    //console.log(details);
    yield put(GetDetailsSuccess(details));
  } catch (e) {
    yield put(GetDetailsFail(e));
  }
}