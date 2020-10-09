import { Router, Request, Response } from 'express';
import { UserController } from '../database/controllers/user.controller';
import { Auth } from './auth';

export class UserRouter {
    public router: Router;
    private User: UserController = new UserController();
    private auth: Auth = new Auth();

    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes() {
        this.router.post('/register', this.User.register)
        this.router.post('/login', this.User.login)
        this.router.get('/dupa', this.auth.verifyToken,  (req: Request, res: Response) => {
            
        })
    }
}