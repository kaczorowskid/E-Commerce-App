import Axios from 'axios';
import { Router, Request, Response } from 'express';
import { EUser } from '../database/models/User';
import { UserService } from '../database/services/user.service';
import { CategoryService } from '../database/services/category.service';
import { IMsg } from '../types/User/IUserService.model';

const router = Router();
const User = new UserService();
const Category = new CategoryService();

router.get('/register', async (req: Request, res: Response) => {
    const user: IMsg = await User.register({
        email: req.body.email,
        password: req.body.password,
        role: EUser.User
    })

    res.status(user.code).send({msg: user.msg});
})

router.post('/login', async (req: Request, res: Response) => {
    const log: any = await User.login({
        email: req.body.email,
        password: req.body.password,
    })
    res.status(log.code).send({msg: log.msg})
})

router.get('/category', async (req: Request, res: Response) => {
    const menCategory: string[] = await Category.getMenCategory();
    const womenCategory: string[] = await Category.getWomenCategory();
    res.send({ menCategory, womenCategory })
})


export default router;