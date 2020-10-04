import { Category } from '../models/Category';


export class CategoryController {
    async getWomenCategory(): Promise<Array<string>> {
        const womenCategory: any = await Category.findAll({where: {sex: 'women'}})
        const womencategoryArray: string[] = womenCategory.map((item: any) => item.dataValues.categoryPL)
        return womencategoryArray
    }

    async getMenCategory(): Promise<Array<string>> {
        const menCategory: any = await Category.findAll({where: {sex: 'men'}})
        const menCategoryArr: string[] = menCategory.map((item: any) => item.dataValues.categoryPL)
        return menCategoryArr
    }
}