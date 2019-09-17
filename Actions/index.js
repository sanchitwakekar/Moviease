// eslint-disable-next-line prettier/prettier
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
/* eslint-disable keyword-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import {SEARCH_MOVIES,SEARCH_MOVIES_SUCCESS,SEARCH_MOVIES_FAIL} from './types';


export function GetMovies(params) {
    return {
        type: SEARCH_MOVIES,
        data: params,
    };
}
export function GetMoviesSuccess(params) {
    return {
        type: SEARCH_MOVIES_SUCCESS,
        data: params,
    };
}
export function GetMoviesFail(params) {
    return {
        type: SEARCH_MOVIES_FAIL,
        data: params,
    };
}
