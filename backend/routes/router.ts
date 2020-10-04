import { Request, Response, Router } from 'express';
import { EUser } from '../database/models/User';
import { UserController } from '../database/controllers/user.controller';
import { CategoryController } from '../database/controllers/category.controller';
import { IMsg, ILogin } from '../types/User/IUserService.model';
import { Auth } from './auth';

export class UserRouter {
    public router: Router;
    private User: UserController = new UserController();
    private Category: CategoryController = new CategoryController();
    private auth: Auth = new Auth();

    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes() {
        this.router.post('/register', async (req: Request, res: Response) => {
            const user: IMsg = await this.User.register({
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: req.body.password,
                role: EUser.User
            })

            res.status(user.code).send({ msg: user.msg });
        })

        this.router.post('/login', async (req: Request, res: Response) => {
            const log: ILogin = await this.User.login({
                email: req.body.email,
                password: req.body.password,
            })
            if (log.token) {
                res.header('auth-token', log.token).send({ msg: log.msg });
            } else {
                res.status(log.code).send({ msg: log.msg })
            }
        })


        this.router.get('/test', this.auth.verifyToken,function (req: Request, res: Response)  {
            res.send({
                rzeczy: 'test'
            })
        })

        this.router.get('/category', async (req: Request, res: Response) => {
            const menCategory: string[] = await this.Category.getMenCategory();
            const womenCategory: string[] = await this.Category.getWomenCategory();
            res.send({ menCategory, womenCategory })
        })
    }
}