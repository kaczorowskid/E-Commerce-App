import * as Action from './menuActionConst';
import { ImenuAction } from '../../types/menu/menuAction.types';

export const toggleWomenCategory = (): ImenuAction => {
    return {
        type: Action.TOGGLE_WOMEN_CATEGORY
    }
}

export const toggleMenCategory = (): ImenuAction => {
    return {
        type: Action.TOGGLE_MEN_CATEGORY
    }
}