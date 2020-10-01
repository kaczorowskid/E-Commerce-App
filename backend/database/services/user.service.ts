import * as bcrypt from 'bcrypt';
import { create } from 'domain';
import * as jwt from 'jsonwebtoken';
import { IUser } from '../../types/User/IUser.model';
import { IMsg } from '../../types/User/IUserService.model';
import { User } from '../models/User';

const createMsg = (msg: string, code: number): IMsg => {
    return {
        msg, code
    }
}

export class UserService {
    async register({name, surname,email, password, role}: IUser): Promise<IMsg>{
        const hashPassword: string = await bcrypt.hash(password, 10);
        const userExist: number = await User.count({where: {email: email}})

        if(!userExist) {
            await User.create({
                name: name,
                surname: surname,
                email: email,
                password: hashPassword,
                role: role
            })
            return createMsg('User created', 200);
        }
        else {
            return createMsg('Adres e-mail jest już w naszej bazie danych', 401);
        }

    }

    async login({email, password}: IUser): Promise<IMsg> {
        const user: any = await User.findOne({ where: {email}})

        if(user === null)  return createMsg('brak usera', 401);
        
        return await bcrypt.compare(password, user.password) ?
            createMsg('poprawnie zalogowano', 200) :
            createMsg('brak dostępu', 401);
        
    }
}