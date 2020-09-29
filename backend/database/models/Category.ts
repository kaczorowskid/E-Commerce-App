import * as Sequelize from 'sequelize';
import { ICategory, ICategoryDBModel } from '../../types/Category/ICategory.model';
import sequelize from '../conectionDB';


interface CategoryInstance extends Sequelize.Model<ICategoryDBModel, ICategory> {}

export const Category = sequelize.define<CategoryInstance>('category', {
    id: {
        type: Sequelize.DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true
    },
    sex: Sequelize.DataTypes.STRING,
    category: Sequelize.DataTypes.STRING,
    categoryPL: Sequelize.DataTypes.STRING
})
