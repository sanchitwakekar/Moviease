/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import { SEARCH_MOVIES, SEARCH_MOVIES_FAIL, SEARCH_MOVIES_SUCCESS } from '../Actions/types';

const initialState = {
    movies: [],
    search: '',
};

export function MovieReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIES: {
            return {
                ...state,
                search: action.data,
            }
        }
        case SEARCH_MOVIES_SUCCESS: {
            return {
                ...state,
                movies: action.data,
            }
        }
        case SEARCH_MOVIES_FAIL: {
            return {
                ...state,
            }
        }
        default:
            return state;
    }
}
