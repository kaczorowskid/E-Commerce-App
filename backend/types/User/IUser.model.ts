export interface IUser {
    name?: string,
    surname?: string,
    email: string;
    password: string;
    role?: string;
}

export interface IUserDBModel {
    id: number;
    name: string,
    surname: string,
    email: string;
    password: string;
    role: string
}
