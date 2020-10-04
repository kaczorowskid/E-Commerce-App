export interface IMsg {
    msg: string,
    code: number
}

export interface ILogin {
    msg: string,
    code: number,
    token?: string;
}