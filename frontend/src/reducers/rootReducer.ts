import { combineReducers } from 'redux';
import navbarReducer from './navbar/navbarReducer';
import menuReducer from './menu/menuReducer';

export const rootReducer = combineReducers({
    navbarReducer,
    menuReducer
})