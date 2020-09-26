import * as Action from '../../action/menu/menuActionConst';
import { ImenuTypes } from '../../types/menu/menu.types';
import { ImenuAction } from '../../types/menu/menuAction.types';

const initialState: ImenuTypes = {
    womenCategoryVisible: true,
    menCategoryVisible: true
}

const menuReducer = (state = initialState, action: ImenuAction): ImenuTypes => {
    switch(action.type) {
        case Action.TOGGLE_WOMEN_CATEGORY:
            console.log("kobieta")
            return {
                ...state,
                womenCategoryVisible: !state.womenCategoryVisible
            }

        case Action.TOGGLE_MEN_CATEGORY:
            console.log("men ", state.menCategoryVisible)
            return {
                ...state,
                menCategoryVisible: !state.menCategoryVisible
            }

        default:
            return state;
    }
}

export default menuReducer;