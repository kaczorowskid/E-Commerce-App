import {Model, DataTypes} from 'sequelize';
import { ICategory, ICategoryDBModel } from '../../types/Category/ICategory.model';
import sequelize from '../conectionDB';


interface CategoryInstance extends Model<ICategoryDBModel, ICategory> {}

export const Category = sequelize.define<CategoryInstance>('category', {
    id: {
        type: DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true
    },
    sex: DataTypes.STRING,
    category: DataTypes.STRING,
    categoryPL: DataTypes.STRING
})
