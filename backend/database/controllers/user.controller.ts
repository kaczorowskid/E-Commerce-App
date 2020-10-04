import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { IUser } from '../../types/User/IUser.model';
import { IMsg, ILogin } from '../../types/User/IUserService.model';
import { User } from '../models/User';

export class UserController {
    private createMsg = (msg: string, code: number, token?: string): ILogin => {
        return {
            msg, code, token
        }
    }

    public async register({ name, surname, email, password, role }: IUser): Promise<IMsg> {
        const hashPassword: string = await bcrypt.hash(password, 10);
        const userExist: number = await User.count({ where: { email: email } })

        if (!userExist) {
            await User.create({
                name: name,
                surname: surname,
                email: email,
                password: hashPassword,
                role: role
            })
            return this.createMsg('User created', 200);
        }
        else {
            return this.createMsg('Adres e-mail jest już w naszej bazie danych', 401);
        }

    }

    public async login({ email, password }: IUser): Promise<ILogin> {
        const user: any = await User.findOne({ where: { email } })
        if (user === null) return this.createMsg('brak usera', 401);

        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY as string);

        return await bcrypt.compare(password, user.password) ?
            this.createMsg('poprawnie zalogowano', 200, token) :
            this.createMsg('brak dostępu', 401);
    }
}