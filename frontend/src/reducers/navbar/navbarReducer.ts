import * as Action from '../../action/navbar/navbarActionConst';
import { InavbarReducer } from '../../types/navbar/navbar.types';
import { InavbarAction } from '../../types/navbar/navbarAction.types';

const initialState: InavbarReducer = {
    menuVisible: false
}

const navbarReducer = (state = initialState, action: InavbarAction): InavbarReducer => {
    switch(action.type) {
        case Action.TOGGLE_MENU: 
            return {
                ...state,
                menuVisible: !state.menuVisible
            }

        default:
            return state;
    }
}


export default navbarReducer;