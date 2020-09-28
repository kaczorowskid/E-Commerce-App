import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Model } from 'sequelize/types';
import { IUser } from '../../types/User/IUser.model';
import { ILoginMsg } from '../../types/User/IUserService.model';
import * as userModel from '../models/User';


export class UserService {
    find() {
        userModel.User.findAll({}).then(result => console.log(result));
    }

    async register({email, password, role}: IUser){
        const hashPassword = await bcrypt.hash(password, 10);
        userModel.User.create({
            email: email,
            password: hashPassword,
            role: role
        }).then(a => console.log(a));
    }

    async login({email, password}: IUser): Promise<ILoginMsg> {
        const user: any = await userModel.User.findOne({ where: {email}})
        console.log(typeof user);
        if(user == null) return Promise.reject();
        if(await bcrypt.compare(password, user.password)) {
            return new Promise((resolve) => resolve({
                msg: 'poprawnie zalogowano',
                code: 200
            })) 
        } else {
            return new Promise((resolve) => resolve({
                msg: 'brak dostępu',
                code: 500
            })) 
        }
    }
}