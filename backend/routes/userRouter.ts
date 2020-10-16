import { Router, Request, Response } from 'express';
import { register, login, getUser } from '../database/controllers/user.controller';

export const userRouter = Router();
 
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/get-user', getUser);
