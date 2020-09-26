import * as Action from '../../action/navbar/navbarActionConst';
import { InavbarTypes } from '../../types/navbar/navbar.types';
import { InavbarAction } from '../../types/navbar/navbarAction.types';

const initialState: InavbarTypes = {
    menuVisible: false
}

const navbarReducer = (state = initialState, action: InavbarAction): InavbarTypes => {
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