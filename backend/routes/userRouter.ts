import { Router } from 'express';
import { UserController } from '../database/controllers/user.controller';

export class UserRouter {
    public router: Router;
    private User: UserController = new UserController();

    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes() {
        this.router.post('/register', this.User.register)
        this.router.post('/login', this.User.login)
    }
}