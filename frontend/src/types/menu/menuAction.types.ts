import * as Action from '../../action/menu/menuActionConst';

interface ItoogleWomenCategory {
    type: typeof Action.TOGGLE_WOMEN_CATEGORY
}

interface ItoogleMenCategory {
    type: typeof Action.TOGGLE_MEN_CATEGORY
}

export type ImenuAction = ItoogleWomenCategory | ItoogleMenCategory;