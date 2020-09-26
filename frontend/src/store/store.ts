import { createStore, applyMiddleware } from 'redux';
import {rootReducer} from '../reducers/rootReducer';
import thunk, {ThunkMiddleware } from 'redux-thunk';


export const store = createStore(rootReducer);// applyMiddleware(thunk as ThunkMiddleware<AppState, AppAction>));