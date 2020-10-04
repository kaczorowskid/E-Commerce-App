import { Model, DataTypes} from 'sequelize';
import { IUser, IUserDBModel } from '../../types/User/IUser.model';
import sequelize from '../conectionDB';

export enum EUser {
    User = 'USER',
    Admin = 'ADMIN'
}

export interface UserInstance extends Model<IUserDBModel, IUser> {}

export const User = sequelize.define<UserInstance>('user', {
    id: {
        type: DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING
})
