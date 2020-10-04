import { Request, Response} from 'express';
import { Category,  } from '../models/Category';


export class CategoryController {
    async getCategory(req: Request, res: Response) {
        const women: any = await Category.findAll({where: {sex: 'women'}})
        const men: any = await Category.findAll({where: {sex: 'men'}})
        const womenCategory: string[] = women.map((item: any) => item.dataValues.categoryPL)
        const menCategory: string[] = men.map((item: any) => item.dataValues.categoryPL)

        res.send({ menCategory, womenCategory })
    }
}