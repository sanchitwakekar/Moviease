/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import { call, takeEvery, put } from 'redux-saga/effects';
import { SEARCH_MOVIES, GET_DETAILS } from '../Actions/types';
import { GetMoviesSuccess, GetMoviesFail } from '../Actions/index';
import axios from 'axios';
import { GetDetailsSaga } from './details_saga';

updateSearch = (name) => {
    return axios.get("http://www.omdbapi.com/?apikey=1673c24a&s=" + name)
        .then(response => response.data.Search)
};
function* GetMovieSaga(action) {
    try {
        let movies = yield call(updateSearch, action.data);
        //      console.log(movies);
        yield put(GetMoviesSuccess(movies));
    } catch (e) {
        yield put(GetMoviesFail(e));
    }
}

export function* RootSaga() {
    yield takeEvery(SEARCH_MOVIES, GetMovieSaga);
    yield takeEvery(GET_DETAILS, GetDetailsSaga);
} 
