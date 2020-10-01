import * as Sequelize from 'sequelize';
import { IUser, IUserDBModel } from '../../types/User/IUser.model';
import sequelize from '../conectionDB';

export enum EUser {
    User = 'USER',
    Admin = 'ADMIN'
}

export interface UserInstance extends Sequelize.Model<IUserDBModel, IUser> {}

export const User = sequelize.define<UserInstance>('user', {
    id: {
        type: Sequelize.DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.DataTypes.STRING,
    surname: Sequelize.DataTypes.STRING,
    email: {
        type: Sequelize.DataTypes.STRING,
        unique: true
    },
    password: Sequelize.DataTypes.STRING,
    role: Sequelize.DataTypes.STRING
})
