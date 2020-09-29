import { Category } from '../models/Category';


export class CategoryService {
    async getWomenCategory(): Promise<Array<string>> {
        const womenCategory: any = await Category.findAll({where: {sex: 'women'}})
        console.log(womenCategory);
        const womencategoryArray: string[] = womenCategory.map((item: any) => item.dataValues.categoryPL)
        return new Promise((resolve, reject) => resolve(womencategoryArray))
    }

    async getMenCategory(): Promise<Array<string>> {
        const menCategory: any = await Category.findAll({where: {sex: 'men'}})
        const menCategoryArr: string[] = menCategory.map((item: any) => item.dataValues.categoryPL)
        return new Promise((resolve, reject) => resolve(menCategoryArr))
    }
}