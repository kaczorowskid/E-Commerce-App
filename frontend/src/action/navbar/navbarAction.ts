import * as Action from './navbarActionConst';
import { InavbarAction } from '../../types/navbar/navbarAction.types';

export const toggleMenu = (): InavbarAction => {
    return {
        type: Action.TOGGLE_MENU
    }
}