import Axios from 'axios';
import { Router, Request, Response } from 'express';
import { EUser } from '../database/models/User';
import { UserService } from '../database/services/user.service';
import { CategoryService } from '../database/services/category.service';
import { ILoginMsg } from '../types/User/IUserService.model';

const router = Router();
const User = new UserService();
const Category = new CategoryService();

router.get('/register', (req: Request, res: Response) => {
    console.log('user serwice');
    User.register({
        email: 'test@test.com',
        password: 'test123',
        role: EUser.User
    })
})


router.get('/login', async (req: Request, res: Response) => {
    const log: ILoginMsg = await User.login({
        email: 'test@test.com',
        password: 'test123',
        role: EUser.User
    })
    res.status(log.code).send(log.msg)
})

router.get('/category', async (req: Request, res: Response) => {
    const menCategory: string[] = await Category.getMenCategory();
    const womenCategory: string[] = await Category.getWomenCategory();
    res.send({menCategory, womenCategory})
})


export default router;