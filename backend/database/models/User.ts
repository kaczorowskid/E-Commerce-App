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
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    telefonnumber: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    createaccount: DataTypes.DATE,
    myaddressstreet: DataTypes.STRING,
    myaddresspostcode: DataTypes.STRING,
    myaddressvoivodeship: DataTypes.STRING,
    myaddresscountry: DataTypes.STRING,
    shippingaddressname: DataTypes.STRING,
    shippingaddressstreet: DataTypes.STRING,
    shippingaddresspostcode: DataTypes.STRING,
    shippingaddressvoivodeship: DataTypes.STRING,
    shippingaddresscountry: DataTypes.STRING,
})
