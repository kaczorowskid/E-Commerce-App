import { createStore, applyMiddleware } from 'redux';
import {rootReducer} from '../reducers/rootReducer';
import thunk, {ThunkMiddleware } from 'redux-thunk';
// import { AppAction } from '../types/appActionTypes';


export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);// applyMiddleware(thunk as ThunkMiddleware<AppState, AppAction>));