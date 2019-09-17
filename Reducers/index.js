/* eslint-disable prettier/prettier */
import { MovieReducer } from './MovieReducer';
import { combineReducers } from 'redux';
import { DetailsReducer } from './DetailsReducer';

export const rootreducer = combineReducers({ movies: MovieReducer, DETAILS: DetailsReducer });
