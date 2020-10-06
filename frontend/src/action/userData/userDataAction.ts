import * as Action from './userDataActionConst';

export const getData = (data: string) => {
    return {
        type: Action.GET_DATA,
        data: data
    }
}