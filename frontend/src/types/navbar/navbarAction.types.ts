import * as Action from '../../action/navbar/navbarActionConst';

export interface ItoggleMenu {
    type: typeof Action.TOGGLE_MENU
}

export type InavbarAction = ItoggleMenu;