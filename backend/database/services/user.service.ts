import * as bcrypt from 'bcrypt';
import { create } from 'domain';
import * as jwt from 'jsonwebtoken';
import { Model } from 'sequelize/types';
import { IUser } from '../../types/User/IUser.model';
import { IMsg } from '../../types/User/IUserService.model';
import { User } from '../models/User';

const createMsg = (msg: string, code: number): IMsg => {
    return {
        msg, code
    }
}

export class UserService {
    async register({email, password, role}: IUser): Promise<IMsg>{
        const hashPassword = await bcrypt.hash(password, 10);
        const userExist = await User.count({where: {email: email}})

        if(!userExist) {
            await User.create({
                email: email,
                password: hashPassword,
                role: role
            })
            return createMsg('User created', 200);
        }
        else {
            return createMsg('User is exist', 401);
        }

    }

    async login({email, password}: IUser): Promise<IMsg> {
        console.log(email);
        console.log(password);
        const user: any = await User.findOne({ where: {email}})

        if(user === null)  return createMsg('brak usera', 401);
        
        return await bcrypt.compare(password, user.password) ?
            createMsg('poprawnie zalogowano', 200) :
            createMsg('brak dostępu', 401);
        
    }
}